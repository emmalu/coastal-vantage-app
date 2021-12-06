import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/emmalu/coastal-vantage-app.git', // Update to point to your repository
		user: {
			name: 'emmalu', // update to use your name
			email: 'emma.lu.paz@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
