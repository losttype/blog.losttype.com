var vagueTime = require('vague-time')
require('smoothscroll') // Need to Browserify Shim this
require('dropcap.js')   // “”
var mustard = mustard || false

// Check if we cut the mustard inline,
// otherwise let’s do it again I guess
if (mustard || 'querySelector' in window.document) {

  var elDateFuzzy = document.getElementsByClassName('js-dateFuzzy')
  var elDropcap = document.querySelectorAll('.js-dropcap')

  for (var i = elDateFuzzy.length - 1; i >= 0; i--) {
    var dateTime = new Date(elDateFuzzy[i].getAttribute('datetime'))
    elDateFuzzy[i].innerHTML = vagueTime.get({
      to: dateTime,
      from: Date.now()
    })
  }

  window.Dropcap.layout(elDropcap, 3)
  // TODO Re-run after resize complete

  // Social icons
  // WebFont.load({
  //   custom: {
  //     families: ['SSSocialRegular']
  //   }
  // })
  loadCSS('http://fonts.kennethormandy.com/css/symbolset.css')
}
