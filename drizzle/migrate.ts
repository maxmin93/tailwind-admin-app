import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
import { drizzle } from 'drizzle-orm/bun-sqlite';
// @ts-ignore
import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DB_URL as string);
export const db = drizzle(sqlite);

async function main() {
	try {
		await migrate(db, {
			migrationsFolder: 'drizzle/migrations'
		});
		console.log('Tables migrated!');
		process.exit(0);
	} catch (error) {
		console.error('Error performing migration: ', error);
		process.exit(1);
	}
}

main();
