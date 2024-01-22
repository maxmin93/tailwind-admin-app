import { db } from '$lib/server/index.js';
import { users } from '$lib/server/schema';
import type { PageServerData } from './$types.js';

// type UsersType = typeof users.$inferInsert;
const pageSize = 10;

// @ts-ignore
export const load: PageServerData = async ({ params }) => {
	const pageUsers = await db.select().from(users).orderBy(users.id).limit(pageSize);
	// for DEBUG
	for (let index = 0; index < pageUsers.length; index++) {
		const element = pageUsers[index];
		console.log(`[${index}] ${element.id} ${element.email}`);
	}

	const data = {
		account: 63,
		sales: 6,
		tickets: 5,
		invoices: 10,
		earnings: 168682,
		pageviews: 768541,
		pageUsers
		/*
		pageUsers: [
			{
				id: 'order_0006578',
				email: 'g.taylor@example.com',
				state: 'Pending',
				revenue: 185.13
			},
			{
				id: 'order_0006577',
				email: 'j.keily@example.com',
				state: 'Pending',
				revenue: 280.63
			},
			{
				id: 'order_0006576',
				email: 'n.hart@example.com',
				state: 'Completed',
				revenue: 110.69
			},
			{
				id: 'order_0006575',
				email: 'j.doe@example.com',
				state: 'Completed',
				revenue: 120.37
			},
			{
				id: 'order_0006574',
				email: 'o.smith@example.com',
				state: 'Completed',
				revenue: 150.27
			},
			{
				id: 'order_0006573',
				email: 'n.hart@example.com',
				state: 'Completed',
				revenue: 215.25
			}
		]
    */
	};
	return {
		data
	};
};
