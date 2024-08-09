import { createSupabaseClient } from '~~/utils/client';

export default defineEventHandler(async (event) => {
  const query = getRequestURL(event).searchParams;
  const code = query.get('code');

  if (code) {
    const supabase = createSupabaseClient(event);
    await supabase.auth.exchangeCodeForSession(code as string);
  }

  return sendRedirect(event, `/`, 303);
});
