var cheerio = require('cheerio');

module.exports = (function(content) {
  $ = cheerio.load(content);
  $('blockquote').map(function(i, el) {
    // this === el
    var $self = $(this);
    $self.attr('data-length', $self.text().length);
  });
  return $.html();
});
