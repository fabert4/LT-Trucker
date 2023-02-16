const primary = {
	50: '#fff7ed',
	100: '#ffedd5',
	200: '#fed7aa',
	300: '#fdba74',
	400: '#fb923c',
	500: '#f97316',
	600: '#ea580c',
	700: '#c2410c',
	800: '#9a3412',
	900: '#7c2d12'
};

const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],
	theme: {
		extend: {
			colors: {
				// yellow
				// primary: {"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12"}

				// amber
				// primary: {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"}

				// theme: orange
				primary: primary,
				blue: primary,
				trueBlue: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a'
				}
			}
		}
	}
};

module.exports = config;
