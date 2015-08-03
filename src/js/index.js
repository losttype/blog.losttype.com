var vagueTime = require('vague-time')
require('smoothscroll')
// Check if we cut the mustard inline,
// otherwise let’s do it again I guess
if (mustard || 'querySelector' in window.document) {

  var tags = document.getElementsByClassName('js-dateFuzzy')
  for (var i = tags.length - 1; i >= 0; i--) {
    var dateTime = new Date(tags[i].getAttribute('datetime'))
    tags[i].innerHTML = vagueTime.get({
      to: dateTime,
      from: Date.now()
    })
  }
}
