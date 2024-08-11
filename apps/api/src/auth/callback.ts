import { createBaseElysia } from '../base.ts';
import { db } from '../db/db.ts';
import { users } from '../db/schema.ts';
import { debug } from '../logger.ts';
import { lucia } from '../utils/lucia.ts';
import { getAccount, getEmail, getTokens } from '../utils/provider.ts';
import { eq } from 'drizzle-orm';

export const callbackRoute = createBaseElysia().get(
    'callback',
    async ({ query: { code, state }, cookie, redirect }) => {
        const next = 'http://localhost:3000';
        const storedState = cookie.oauth_state?.value;

        if (!storedState || state !== storedState) {
            throw new Error(
                'The state provided does not match the state in the cookie.',
            );
        }

        const tokens = await getTokens(code as string);
        const account = await getAccount(tokens.accessToken);
        const email = await getEmail(tokens.accessToken);

        const user = {
            id: account.id,
            username: account.name,
            avatar: account.avatar_url,
            email,
        };

        const existingUser = await db.query.users.findFirst({
            where: ({ id }, { eq }) => eq(user.id, id),
        });
        let id = existingUser?.id;

        if (!existingUser) {
            debug(`Creating new user with username: ${user.username}`);

            const result = await db.insert(users).values(user).returning({
                id: users.id
            })
            id = result[0].id;
        } else {
            debug(`Updating username and avatar for user with id: ${id}`);

            await db.update(users).set({
                username: user.username,
                avatar: user.avatar,
            }).where(eq(users.id, id as string));
        }

        debug(`Creating session for user with id: ${id}`);
        const session = await lucia.createSession(id as string, {});
        const sessionCookie = lucia.createSessionCookie(session.id);

        cookie[sessionCookie.name]?.set({
            value: sessionCookie.value,
            ...sessionCookie.attributes,
        });

        return redirect(next, 302);
    },
);
