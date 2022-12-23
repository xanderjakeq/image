this is related to the last clip. for my project I wanted to modify a package
that I’m using: https://github.com/editor-js/image i was able to build the
package but I couldn’t do import x from 'output.js'

glad I found this article even though I wasted hours trying to figure it out lol

https://newbedev.com/output-an-es-module-using-webpack

tldr:

//webpack.config.json
output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    library: '__MODULE_DEFAULT_EXPORT__',
    libraryTarget: 'window',
    libraryExport: 'default'
  },

//.dist/index.js (manually create this file)
import './bundle.js'
const __MODULE_DEFAULT_EXPORT__ = window.__MODULE_DEFAULT_EXPORT__
delete window.__MODULE_DEFAULT_EXPORT__
export default __MODULE_DEFAULT_EXPORT__

//package.json
"main": "dist/index.js",
