import { drizzle } from 'drizzle-orm/bun-sqlite';
import { sql } from 'drizzle-orm';
// @ts-ignore
import { Database } from 'bun:sqlite'; // bun 런타임
import { DB_URL } from '$env/static/private';
import * as schema from './schema';

const sqlite = new Database(DB_URL); // DB 파일 이름
export const db = drizzle(sqlite, { schema });

// for DEBUG
const query = sql`select "bun:sqlite" as text`;
const result = db.get<{ text: string }>(query);
console.log('database: ' + result?.text);
