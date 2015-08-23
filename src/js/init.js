// Cut the mustard, choose your own method here—querySelector is an easy one.
if ('querySelector' in window.document) {
  var mustard = true

  loadCSS('http://fonts.kennethormandy.com/css/moriston.css')

  var observeMoriston = new FontFaceObserver('Moriston')
    .check()
    .then(function() {
      console.log('Loaded Moriston!')
    })

  var observeMeta = new FontFaceObserver('ff-meta-serif-web-pro')
    .check()
    .then(function() {
      console.log('Loaded Meta Serif!')
    })
}
