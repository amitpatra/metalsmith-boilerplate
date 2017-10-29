# Metalsmith Boilerplate
## A boilerplate for creating websites with Metalsmith
I have created this boilerplate to eliminate the repetitive process of installing plugins and writing the core.
## Included in this boilerplate
The order in which plugins are invoked is vital in Metalsmith. Therefore I am listing plugins in order of their invocation inside `build.js`

#### Metalsmith
The core Metalsmith Module 
[Github][metalsmith-github] | [npm][metalsmith-npm] | [Link][metalsmith]

#### Metalsmith markdownit
A Metalsmith plugin to convert markdown files using [markdown-it][markdown-it] library.
[Github][metalsmith-markdownit-github] | [npm][metalsmith-markdownit-npm]

### Extras
#### Markdown-it Katex
Markdown-it plugin to add Math to your Markdown
[Github][markdown-it-katex-github] | [npm][markdown-it-katex-npm]

[metalsmith-github]: https://github.com/segmentio/metalsmith
[metalsmith-npm]: https://www.npmjs.com/package/metalsmith
[metalsmith]: http://metalsmith.io

[metalsmith-markdownit-github]: https://github.com/mayo/metalsmith-markdownit
[metalsmith-markdownit-npm]: https://www.npmjs.com/package/metalsmith-markdownit
[markdown-it]: https://github.com/markdown-it/markdown-it

[markdown-it-katex-github]: https://github.com/waylonflinn/markdown-it-katex
[markdown-it-katex-npm]: https://www.npmjs.com/package/markdown-it-katex/