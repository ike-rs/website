import { GitHub, generateCodeVerifier, generateState } from 'arctic';
import { createBaseElysia } from '../base.ts';
import { github } from '../utils/provider.ts';

export const loginRoute = createBaseElysia().get(
  '/login',
  async ({ redirect, cookie: { oauth_state } }) => {
    const state = generateState();

    const url = await github.createAuthorizationURL(state, {
      scopes: ['user:email'],
    });

    oauth_state?.set({
      value: state,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 10,
    });

    return redirect(url.toString(), 302);
  },
);
