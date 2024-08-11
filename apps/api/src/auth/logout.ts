import { createBaseElysia } from "../base";
import { db } from "../db/db";
import { sessions } from "../db/schema";
import { debug } from "../logger";
import { BadRequestException } from "../utils/errors";
import { lucia } from "../utils/lucia";
import { eq } from 'drizzle-orm';

export const logoutRoute = createBaseElysia().post("/logout", async ({ cookie, redirect }) => {
    const sessionCookie = cookie[lucia.sessionCookieName];

    debug(`Invalidating session with id: ${sessionCookie?.value}`);
    if (!sessionCookie?.value) {
        throw new BadRequestException("Session not found");
    }
    await lucia.invalidateSession(sessionCookie.value);
    const blankSessionCookie = lucia.createBlankSessionCookie();

    sessionCookie.set({
        value: blankSessionCookie.value,
        ...blankSessionCookie.attributes,
    });

    await db.delete(sessions).where(eq(sessions.id, sessionCookie.value));

    return redirect("http://localhost:3000");
});
