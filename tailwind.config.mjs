/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#fbf7fc",
					100: "#f7edfa",
					200: "#eddbf3",
					300: "#e1bee9",
					400: "#d4a1de",
					500: "#b86ec7",
					600: "#9d4faa",
					700: "#833f8c",
					800: "#6c3573",
					900: "#5c305f",
					950: "#39163c"
				},
			},
			fontFamily: {
				mono: "Space Mono"
			}
		},
	},
	plugins: [],
}
