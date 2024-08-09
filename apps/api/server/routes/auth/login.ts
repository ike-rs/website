import { createSupabaseClient } from '~~/utils/client';

export default defineEventHandler(async (event) => {
  const client = createSupabaseClient(event);

  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });
  console.log(data);

  if (data.url) {
    await sendRedirect(event, data.url);
  }
});
