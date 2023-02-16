import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		target: ['esnext']
	},
	server: {
		proxy: {
			'^/api(?!/kit/)': {
				target: 'http://localhost:8080',
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
};

export default config;
