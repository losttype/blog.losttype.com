var cheerio = require('cheerio')

module.exports = (function (content) {
  $ = cheerio.load(content)

  // var lead = $('p').get(0)
  // var dropcap = lead.substring(0, 1)
  // lead = dropcap

  // $('p:first-child').get(0).prepend($('<span/>').html(dropacp))

  // $lead
  //   .html(dropcap.substring(1))
  //   .addClass('dropcap-container')
  //   .attr('data-dropcap', $(dropcap).text())
  //   .prepend($('<span/>')
  //     .html(dropcap)
  //     .addClass('dropcap js-dropcap'))


  return $.html()
})
