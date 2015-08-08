// Cut the mustard, choose your own method here—querySelector is an easy one.
if ('querySelector' in window.document) {
  var mustard = true
  var WebFontConfig = {
    timeout: 1500,
    typekit: {
      id: 'lma3xaj' // @losttype cpc2pit
    },
    custom: {
      families: ['Moriston:n8,n4']
    }
  }
  loadJS('https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.6/webfontloader.js')
  loadCSS('http://fonts.kennethormandy.com/css/moriston.css')
}
