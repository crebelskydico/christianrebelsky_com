/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
  	purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
		colors: {
			primary: '#4A5865',
		},
		gridTemplateRows: {
			content: 'auto 1fr auto',
		},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
