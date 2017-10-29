const Highlights = require('highlights');

const highlighter = new Highlights({
	// Prefix all highlighted scope classes with the same 'syntax--' string Atom does:
	scopePrefix: 'syntax--'
});

// Highlighing function
const highlight = (contents, lang) => {
	return highlighter.highlightSync({
		fileContents: contents,
		filePath: `fake.${lang}`
	});
};

module.exports = highlight;
