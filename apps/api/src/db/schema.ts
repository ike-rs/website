import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: varchar('username').unique().notNull(),
  email: varchar('email').unique().notNull(),
  avatar: text('avatar').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  role: text('role').$type<'admin' | 'user'>().default('user'),
});

export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date"
  }).notNull()
});