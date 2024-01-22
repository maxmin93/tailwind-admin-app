import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id', { length: 36 }) // UUID v4
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	username: text('username'),
	email: text('email', { length: 256 }),
	status: text('status'),
	revenue: real('revenue') // float(precision=2)
});
