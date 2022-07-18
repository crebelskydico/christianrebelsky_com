/** @type {import('tailwindcss').Config} */
module.exports = {
  	content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#4A5865',
			},
			gridTemplateRows: {
				content: 'auto 1fr auto',
			},
		},
	}
}
