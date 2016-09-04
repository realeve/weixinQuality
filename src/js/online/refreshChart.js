var updateChart = require("./updateChart.js");

module.exports = {
	start: function(gb, timeLength) {
		var timeTicket = setInterval(function() {
			updateChart.answeredNums(gb);
			updateChart.realScore(gb);
			updateChart.realScoreRate(gb);
			updateChart.scoreByGroup(gb);
			updateChart.answerSpeed(gb);
		}, timeLength);
	},
	stop: function() {

	}
};