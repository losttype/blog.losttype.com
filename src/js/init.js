// Cut the mustard, choose your own method here—querySelector is an easy one.
if ('querySelector' in window.document) {
  var mustard = true

  // if (typeof sessionStorage.loadedMoriston === 'undefined' || sessionStorage.loadedMoriston !== true) {
  //   loadCSS('http://fonts.kennethormandy.com/css/moriston.css')
  //
  //   var observeMoriston = new FontFaceObserver('Moriston')
  //     .check()
  //     .then(function() {
  //       setFontsLoaded('Moriston')
  //     })
  // }
  //
  // // if (typeof sessionStorage.loadedProspectus === 'undefined' || sessionStorage.loadedProspectus !== true) {
  // //   loadCSS('../css/fonts.css')
  // //
  // //   var observeProspectus = new FontFaceObserver('Prospectus')
  // //     .check()
  // //     .then(function() {
  // //       setFontsLoaded('Prospectus')
  // //     })
  // // }
  //
  // var setFontsLoaded = function (name) {
  //   var html = document.documentElement
  //   html.classList.add('wf-' + name.toLowerCase())
  //   sessionStorage['loaded' + name] = true
  //   // console.log('Loaded ' + name)
  // }
}
