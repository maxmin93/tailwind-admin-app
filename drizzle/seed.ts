import { drizzle } from 'drizzle-orm/bun-sqlite';
import { count } from 'drizzle-orm';
// @ts-ignore
import { Database } from 'bun:sqlite';
import { faker } from '@faker-js/faker';
import * as schema from '../src/lib/server/schema';

const main = async () => {
	const sqlite = new Database(process.env.DB_URL as string);
	const db = drizzle(sqlite);
	const data: (typeof schema.users.$inferInsert)[] = [];

	for (let i = 0; i < 20; i++) {
		data.push({
			id: faker.string.nanoid(21),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			status: faker.helpers.arrayElement(['Proceeding', 'Pending', 'Completed']),
			revenue: faker.number.float({ min: 0.0, max: 1000.0, precision: 0.01 })
		});
	}

	console.log(`Seed start (${data.length})`);
	await db.insert(schema.users).values(data);
	let usersSize = await db.select({ value: count() }).from(schema.users);
	console.log(`Seed done.. (total=${usersSize.at(-1)?.value})`);
};

main();
