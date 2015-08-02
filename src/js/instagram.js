dug({
  target: 'js-instagram',
  cacheExpire: '3600000',
  endpoint: 'https://api.instagram.com/v1/tags/fieldtripam/media/recent?client_id=fad5f6d6043a4c9b9e456c7b0e0b359e',
  beforeRender: function (feed) {
    // feed.data.forEach(function (gram, i) {
    //   if(gram.user.username = 'rileycran' || (gram.location && gram.location.name === 'The Main') || (typeof gram.location === 'undefined' && gram.tags.length <= 3)) {
    //   } else {
    //     feed.data.splice(i, 1)
    //   }
    // })
    // return feed
  },
  template: '' +
    '{{#data}}' +
      '<li>' +
        '<a href="{{link}}" class="photo" data-content="{{caption.text}}">' +
          '<img src="{{images.low_resolution.url}}" alt="">' +
        '</a>' +
      '</li>' +
    '{{/data}}'
  })
