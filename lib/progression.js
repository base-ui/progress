var j = require('jquery');

module.exports = Progression;

function Progression(el) {
  this.el = el;
}

Progression.prototype.setWidthByPercentage = function (percentage) {
  j(this.el).css('width', percentage + '%');
}
