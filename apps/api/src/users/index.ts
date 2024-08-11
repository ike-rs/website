import { authGuard } from "../utils/auth-guard";
import { createBaseElysia } from "../base";

const me = createBaseElysia()
    .use(authGuard)
    .get("/me", ({ user }) => {
        return user;
    });

const users = createBaseElysia({ prefix: "/users" }).use(me);

export { users };