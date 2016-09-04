var gb = require("./online/globalData.js");
//import gb from "./online/globalData.js";

var initChart = function() {

	var echarts = require('./vendors/echarts.common.js');

	var getOption = require("./online/getOption.js");

	require("./vendors/jquery.fullPage.js");

	$('#fullpage').fullpage({
		sectionColor: ['#f2f3f4']
	});

	gb.dom[0] = document.getElementById("chart0");
	gb.option = getOption();
	gb.myChart[0] = echarts.init(gb.dom[0]);
	gb.myChart[0].setOption(gb.option);

	$(window).on('resize', function() {
		gb.myChart[0].resize();
	});
}();

var refreshData = require("./online/refreshChart.js");

refreshData.start(gb, 2000);