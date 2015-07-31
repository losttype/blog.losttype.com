// Inline
var fs = require('fs')
var minify = require('harp-minify')

module.exports = function (src) {
  var file = fs.readFileSync(src)
  return minify.js(file.toString(), { compress: true, mangle: true })
}
