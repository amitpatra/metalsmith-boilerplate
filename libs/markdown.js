const highlight = require('./hightlight');
const markdownConfig = {
	html: true,
	typographer: true,
	highlight
};
const markdown = require('metalsmith-markdownit')(markdownConfig);
const katex = require('markdown-it-katex');

/*
Use markdown-it-katex-plugin
*/
markdown.parser.use(katex);

module.exports = markdown;
