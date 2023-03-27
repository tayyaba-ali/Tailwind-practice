/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*'],
	theme: {
		extend: {
			fontSize: {
				'10xl': ['10rem', { lineHeight: '1.6' }],
			},
			spacing: {
				13: '4rem',
			},
		},
	},
	plugins: [],
};
