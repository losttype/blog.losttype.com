// Inline
var path = require('path');
var fs = require('fs');
var UglifyJS = require("uglify-js");

module.exports = function(src) {
  return UglifyJS.minify(src, { compress: true, mangle: true }).code;
};
