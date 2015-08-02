var vagueTime = require('vague-time')
require('smoothscroll')

if (document.getElementsByClassName) {
  var tags = document.getElementsByClassName('js-dateFuzzy')
  for (var i = tags.length - 1; i >= 0; i--) {
    var dateTime = new Date(tags[i].getAttribute('datetime'))
    console.log(tags[i].getAttribute('datetime'), dateTime)
    tags[i].innerHTML = vagueTime.get({
      to: dateTime,
      from: Date.now()
    })
  }
}
