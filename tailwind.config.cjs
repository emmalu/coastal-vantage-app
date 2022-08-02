module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	media: false, // or 'media' or 'class'
	theme: {
		extend: {},
		boxShadow: {
			default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			neumodark:
				//'inset 1px 1px 3px #1f2327,9px 9px 20px rgb(11, 11, 11, 0.8),-0px -0px 20px #1f2327',
				'1px 1px 2px #aaa, -1px -1px 2px #ddd;',
			neumolight:
				//'inset 1px 1px 5px #fff, 9px 9px 20px rgba(222, 222, 222, 0.8),-0px -0px 20px #ffffff'
				'inset 1px 1px 1px #fff, -9px -9px 9px #e6e6e6, 9px 9px 20px rgba(199, 199, 199, 0.8)'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
