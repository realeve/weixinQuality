function handleBarData(obj, gb, i) {
	var scoreOrder = {
		xAxis: [],
		yAxis: []
	};

	obj.map(function(userInfo, i) {
		scoreOrder.yAxis[i] = userInfo.name + ' (' + userInfo.user_dpt + ') ';
		scoreOrder.xAxis[i] = userInfo.value;

	});

	gb.option.xAxis[i].min = scoreOrder.xAxis[obj.length - 1] - 10;
	gb.option.series[i].data = scoreOrder.xAxis.reverse();
	gb.option.yAxis[i].data = scoreOrder.yAxis.reverse();
	gb.myChart[0].setOption(gb.option);
}

module.exports = {
	realScore: function(gb) { //所有人员得分排名
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getRealScore&nums=25',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {
			handleBarData(obj, gb, 1);
		});
	},
	realScoreRate: function(gb) {
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getRealScoreRate&nums=25&perscore=' + gb.perScore,
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {
			handleBarData(obj, gb, 0);
		});
	},
	scoreByGroup: function(gb) {
		//小组得分排序
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreByGroup',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {

			var scoreOrder = {
				xAxis: [],
				yAxis: []
			};

			obj.map(function(userInfo, i) {

				scoreOrder.xAxis[i] = userInfo.dpt;
				scoreOrder.yAxis[i] = userInfo.score;

			});
			gb.option.series[2].data = scoreOrder.yAxis;
			gb.option.xAxis[2].data = scoreOrder.xAxis;

			gb.myChart[0].setOption(gb.option);
		});
	},
	answerSpeed: function(gb) {
		//小组得分排序
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getAnswerSpeed',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {

			var scoreOrder = {
				xAxis: [],
				yAxis: []
			};
			obj.map(function(userInfo, j) {

				scoreOrder.xAxis[j] = userInfo.user_name;
				scoreOrder.yAxis[j] = userInfo.num;

			});

			gb.option.series[3].data = scoreOrder.yAxis;
			gb.option.xAxis[3].data = scoreOrder.xAxis;

			gb.myChart[0].setOption(gb.option);
		});
	},
	answeredNums: function(gb) {

		//小组得分排序
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getAnsweredNums',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {
			var scoreOrder = [];
			var nums = 0;
			obj.map(function(userInfo, i) {
				scoreOrder[i] = {
					name: 1,
					value: 1
				};
				scoreOrder[i].name = userInfo.dpt;
				scoreOrder[i].value = userInfo.nums;
				nums += Number.parseInt(userInfo.nums);
			});
			gb.option.series[4].data = scoreOrder;

			gb.option.title[0].subtext = '当前已连接人数：' + nums;

			gb.myChart[0].setOption(gb.option);
		});
	}
};