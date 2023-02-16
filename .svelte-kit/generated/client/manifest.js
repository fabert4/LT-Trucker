import * as client_hooks from '../../../src/hooks.client.ts';

export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9')];

export const server_loads = [];

export const dictionary = {
	"/(app)": [5,[2]],
	"/login": [8,[3],[4]],
	"/logout": [9],
	"/(app)/order": [6,[2]],
	"/(app)/order/confirm": [7,[2]]
};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
};