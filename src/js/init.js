// Cut the mustard, choose your own method here—querySelector is an easy one.
if ('querySelector' in window.document) {
  var mustard = true

  if (sessionStorage.loadedMoriston !== true) {
    loadCSS('http://fonts.kennethormandy.com/css/moriston.css')

    var observeMoriston = new FontFaceObserver('Moriston')
      .check()
      .then(function() {
        setFontsLoaded('Moriston')
      })
  }

  if (sessionStorage.loadedMetaSerif !== true) {
    var observeMeta = new FontFaceObserver('ff-meta-serif-web-pro')
      .check()
      .then(function() {
        setFontsLoaded('MetaSerif')
      })
  }

  var setFontsLoaded = function (name) {
    var html = document.documentElement
    html.classList.add('wf-' + name.toLowerCase())
    sessionStorage['loaded' + name] = true
    // console.log('Loaded ' + name)
  }
}
