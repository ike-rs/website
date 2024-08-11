import { createBaseElysia } from '../base.ts';
import { loginRoute } from './login.ts';
import { callbackRoute } from './callback.ts';
import { logoutRoute } from './logout.ts';

export const auth = createBaseElysia({
  prefix: '/auth',
})
  .use(loginRoute)
  .use(callbackRoute)
  .use(logoutRoute);
