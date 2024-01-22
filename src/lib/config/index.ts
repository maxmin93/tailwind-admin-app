export * from './docs';
export * from './site';

import { persisted } from 'svelte-persisted-store';

type Config = {
	style: string;
	theme: string;
	radius: number;
};

export const config = persisted<Config>('config', {
	style: 'default',
	theme: 'slate',
	radius: 0.5
});
