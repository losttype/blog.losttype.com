var fs = require('fs')
var path = require('path')
var dir = require('node-dir')
var imagemagick = require('imagemagick-native')

dir.readFilesStream(path.resolve(__dirname, '../src/media/2015/04') ,
  function (err, stream, next) {
    if (err) throw err
    var content = ''
    stream.on('data', function (buffer) {
      content += buffer.toString()
      imagemagick.streams.convert({
        srcData: content,
        quality: 50,
        width: 2500,
        resizeStyle: 'aspectfit'  // Closest to the max size without altering the ratio
      })
    })
    stream.on('end', function () {
      next()
    })
  },
  function (err, files) {
    console.log(files)
    if (err) throw err
    console.log('Done')
  })

//
// dir.files(path.resolve(__dirname, '../src/media/2015'), function(err, files) {
//   if (err) throw err
//   console.log(files)
//
// })
