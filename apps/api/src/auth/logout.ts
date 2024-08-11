import { createBaseElysia } from "../base";
import { BadRequestException } from "../utils/errors";
import { lucia } from "../utils/lucia";

export const logoutRoute = createBaseElysia().post("/logout", async ({ cookie, redirect }) => {
    const sessionCookie = cookie[lucia.sessionCookieName];

    if (!sessionCookie?.value) {
        throw new BadRequestException("Session not found");
    }
    await lucia.invalidateSession(sessionCookie.value);
    const blankSessionCookie = lucia.createBlankSessionCookie();

    sessionCookie.set({
        value: blankSessionCookie.value,
        ...blankSessionCookie.attributes,
    });

    return redirect("http://localhost:3000");
});
