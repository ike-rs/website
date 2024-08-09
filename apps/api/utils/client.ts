import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from '@supabase/ssr';
import { H3Event } from 'h3';

export const createSupabaseClient = (event: H3Event) => {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = process.env;

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(event.node.req.headers.cookie ?? '');
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          event.node.res.appendHeader(
            'Set-Cookie',
            serializeCookieHeader(name, value, options),
          ),
        );
      },
    },
  });
};
