// Cut the mustard, choose your own method here—querySelector is an easy one.
if( "querySelector" in window.document ) {
  WebFontConfig = {
    timeout: 1000,
    typekit: {
      id: 'lma3xaj'
    },
    custom: {
      families: ['Moriston:n8,n4', 'SSSocialRegular']
    }
  }
  loadJS('https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js')
  loadCSS('/css/fonts.css')
}
