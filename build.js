const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdownit');

const SITE_NAME = 'Metalsmith boilerplate';
const SITE_DESCRIPTION = 'Metalsmith boilerplate to create Metalsmith sites';

metalsmith(__dirname)
	.metadata({
		site: {
			name: SITE_NAME,
			description: SITE_DESCRIPTION
		}
	})
	.source('./src')
	.destination('./build')
	.use(markdown())
	.build(function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log(SITE_NAME, 'built!');
		}
	});
