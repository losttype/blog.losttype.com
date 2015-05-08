var cheerio = require('cheerio');

module.exports = (function(content) {
  $ = cheerio.load(content);
  $('blockquote').map(function(i, el) {
    // this === el
    var $self = $(this);
    var textLength = $self.text().length;
    if(textLength > 600) {
      $self.attr('data-length', textLength).addClass('blockquote blockquote--long');
    } else if(textLength > 300) {
      $self.attr('data-length', textLength).addClass('blockquote blockquote--medium');
    } else {
      $self.attr('data-length', textLength).addClass('blockquote blockquote--short');
    }
  });
  return $.html();
});
