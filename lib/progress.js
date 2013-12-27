var j = require('jquery');
var eventy = require('eventy');
var Progression = require('./progression');

module.exports = Progress;

function Progress(el) {
  var thisProgress = eventy(this);

  this.el = el;
  this.percentage = 0;
  this.progression = new Progression(j(this.el).find('>.progression').get(0));
}

Progress.prototype.setPercentage = function (percentage) {
  this.percentage = percentage;
  this.progression.setWidthByPercentage(percentage);
  this.trigger('percentage', percentage);
}
