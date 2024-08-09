import { createSupabaseClient } from '~~/utils/client';

export default defineEventHandler(async (event) => {
  const client = createSupabaseClient(event);

  const { data } = await client.auth.getUser();

  return {
    statusCode: 200,
    body: data,
  };
});
