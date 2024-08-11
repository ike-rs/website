import cors from '@elysiajs/cors';
import swagger from '@elysiajs/swagger';
import { auth } from './auth';
import { baseElysia } from './base';
import { users } from './users';
import { info } from './logger.ts';

const app = baseElysia()
  .use(
    cors({
      origin: 'localhost:3000',
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  )
  .use(swagger())
  .use(auth)
  .use(users)
  .get('/', () => {
    return { message: 'Hello, world!' };
  })
  .listen(3001);

info(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
