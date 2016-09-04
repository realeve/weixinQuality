//公共资源
require('./vendors/jquery.fullPage.js');
require('./vendors/fakeLoader.js/fakeLoader.js');

var echarts = require('./vendors/echarts.common.js');

var SPORT = require('./global/sport.js');
var SPORTNAME = require('./global/sportname.js');
var gb = require('./global/chartConfig.js');
var util = require('./exam/chartFunc.js');

var uid = util.getUrlParam('uid');
gb.sportid = util.getUrlParam('sid');


var setSportDpt = function() {

	//此处设置一个较长数值，数据载入完毕后再显示
	$("#fakeLoader").fakeLoader({
		timeToHide: 600000, //Time in milliseconds for fakeLoader disappear
		bgColor: "#9b59b6",
		spinner: "spinner7"
	});
	$('.fl').parent().append('<p class="center" style="position:absolute;width:100%;top:60%;color:#fff">载入中</p>');
	for (var i = 1; i < 7; i++) {
		gb.dom[i] = document.getElementById("chart" + i);
	}

	$('[name="sportname"]').text(SPORTNAME[gb.sportid]);
	var str = [];

	str[0] = '<p style="font-size: 1em;padding-top:30px;">安全保卫部</p>' +
		'<p style="font-size: 1em">企业文化部</p>';
	str[1] = '<p style="font-size: 1em;padding-top:30px;">党委组织部</p>' +
		'<p style="font-size: 1em">党委宣传部</p>' +
		'<p style="font-size: 1em">公司团委</p>';
	str[2] = '<p style="font-size: 1em;padding-top:30px;">管三党支部</p>';
	str[3] = '<p style="font-size: 1em;padding-top:30px;">计划财务部</p>' +
		'<p style="font-size: 1em">党委宣传部</p>';
	str[4] = '<p style="font-size: 1em;padding-top:30px;">中钞长城贵金属有限公司</p>';
	str[5] = '<p style="font-size: 1em;padding-top:30px;">能源环保部</p>';
	str[6] = '<p style="font-size: 1em;padding-top:30px;">中国人民银行商洛市中心支行</p>';
	str[7] = '<p style="font-size: 1em;padding-top:30px;">技术质量部</p>';
	$('[name="sportMaster"]').html(str[gb.sportid]);
}();


function getScoreOrder() {
	//载入首页信息完毕，准备第二页信息
	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreOrder&score=' + gb.userInfo.score,
		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(1);
		//$('[name="progress"]').text('10%');
		gb.userInfo.peopleNums = obj.allPeople;
		//gb.userInfo.peopleNums = //obj.allPeople;
		gb.userInfo.scoreOrder = obj.scoreOrder;
		gb.userInfo.scorePropt = obj.lessThan;
		//总人数
		$('[name="totals"]').text(gb.userInfo.peopleNums);

		$('[name="ltdOrder"]').text(gb.userInfo.scoreOrder);
		$('[name="scorePropt"]').text(gb.userInfo.scorePropt);
		$('[name="scoreProptDesc"]').text(Number.parseFloat(gb.userInfo.scorePropt) > 50 ? "，想想是不是有点小激动呢？" : "。");
		getScoreOrderByDpt();
	});
}

function getScoreOrderByDpt() {
	//载入首页信息完毕，准备第二页信息
	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreOrderByDpt&score=' + gb.userInfo.score + "&dpt=" + gb.userInfo.user_dpt,

		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(2);
		//$('[name="progress"]').text('20%');
		gb.userInfo.dpt = {};
		gb.userInfo.dpt.all = obj.dpt_people;
		gb.userInfo.dpt.peopleNums = obj.allPeople;
		gb.userInfo.dpt.scoreOrder = obj.scoreOrder;
		gb.userInfo.dpt.scorePropt = obj.lessThan;

		$('[name="dptName"]').text(gb.userInfo.user_dpt);

		//总人数
		$('[name="dptCrewNum"]').text(gb.userInfo.dpt.all);
		$('[name="dptTotals"]').text(gb.userInfo.dpt.peopleNums);
		$('[name="dptOrder"]').text(gb.userInfo.dpt.scoreOrder);

		$('[name="dptScorePropt"]').text(gb.userInfo.dpt.scorePropt);
		getTimeLength();
	});
}
// Handles counterup plugin wrapper
var handleCounterup = function(obj, time) {
	if (!$().counterUp) {
		return;
	}

	obj.counterUp({
		delay: 10,
		time: time
	});
};

//handleCounterup($('[name="progress"]'), 5000);

//用户分数排名(在部门或在公司中排序)
function getScoreRangeOption(obj, option) {
	userScore = Math.floor(Number.parseInt(gb.userInfo.score) / 10) * 10;
	option.grid.x = 35;
	option.yAxis = [{
		"type": "category",
		"show": true,
		"axisLine": {
			"show": false
		},
		"axisTick": {
			"show": false
		},
		"splitLine": {
			"show": false
		},
		"axisLabel": {
			"textStyle": {
				"color": "rgba(255, 255, 255, 0.6)"
			}
		},
		"data": []
	}];
	obj.map(function(data, i) {
		option.yAxis[0].data.push(data.score);
		if (userScore != data.score) {
			option.series[0].data.push(data.nums);
		} else {
			option.series[0].data.push({
				value: data.nums,
				itemStyle: {
					normal: {
						color: '#95E570'
					}
				},
				label: {
					normal: {
						show: true,
						formatter: '你的分数 ' + gb.userInfo.score + ' 分'
					}
				}
			});
		}
	});
	return option;
}

function getTimeLength() {

	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getTimeLength',
		data: {
			dpt: gb.userInfo.user_dpt,
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(3);
		//$('[name="progress"]').text('30%');
		gb.userInfo.dptTime = obj.dptTime;
		gb.userInfo.ltdTime = obj.ltdTime;

		$('[name="timeDesc1"]').text(Number.parseInt(gb.userInfo.timeUsed) < Number.parseInt(gb.userInfo.dptTime) ? '低于' : '高于');
		$('[name="timeDesc2"]').text(Number.parseInt(gb.userInfo.timeUsed) < Number.parseInt(gb.userInfo.ltdTime) ? '低于' : '高于');

		//总人数
		$('[name="dptTimeLength"]').text((Number.parseInt(gb.userInfo.dptTime) / 60).toFixed(1));
		$('[name="ltdTimeLength"]').text((Number.parseInt(gb.userInfo.ltdTime) / 60).toFixed(1));

		getAnsweredRatio();
	});
}

//活动参与度
function getAnsweredRatio() {
	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getAnsweredRatio',
		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(4);
		//$('[name="progress"]').text('40%');
		//部门间比较信息
		//gb.userInfo.dptCompare = {};
		gb.userInfo.dptCompare.answerRatio = obj;
		$('[name="mostPeople"]').text(obj[0].dpt);
		$('[name="answeredPrpt"]').text(obj[0].answeredRatio);

		//如果不是第一
		if (obj[0].dpt != gb.userInfo.user_dpt) {
			$('[name="answerRatioDesc"]').text(',赶快邀请小伙伴们来参与吧。');
		} else {
			$('[name="answerRatioDesc"]').text('，告诉小伙伴们要继续努力哦。');
		}
		getScoreCompare();
	});
}

//得分对比
function getScoreCompare() {
	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreCompare',
		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(5);
		//$('[name="progress"]').text('50%');
		//部门间比较信息
		//gb.userInfo.dptCompare = {};
		gb.userInfo.dptCompare.scoreCompare = obj;
		$('[name="highestScore"]').text(obj[0].dpt);
		$('[name="highestScorePrpt"]').text(obj[0].score);
		//getPrizeCompare();
		//get2ndPassedCompare();
		getScoreRangeByDpt();
	});
}

//获奖对比
// function getPrizeCompare() {
// 	$.ajax({
// 		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getPrizeCompare',
// 		data: {
// 			sportid: gb.sportid
// 		},
// 		async: false,
// 		dataType: "jsonp",
// 		callback: "JsonCallback"
// 	}).done(function(obj) {
// 		//console.log(6);
// 		//$('[name="progress"]').text('60%');
// 		//部门间比较信息
// 		//gb.userInfo.dptCompare = {};
// 		gb.userInfo.dptCompare.prizeCompare = obj;
// 		$('[name="prizePrpt"]').text(obj[0].passRatio);

// 		//get2ndPassedCompare();

// 	});
// }

//获奖对比
// function get2ndPassedCompare() {
// 	$.ajax({
// 		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/get2ndPassedRatio',
// 		data: {
// 			sportid: gb.sportid
// 		},
// 		async: false,
// 		dataType: "jsonp",
// 		callback: "JsonCallback"
// 	}).done(function(obj) {
// 		//console.log(7);
// 		//$('[name="progress"]').text('70%');
// 		$('[name="2ndTimesPrpt"]').text(obj['2ndPassedRatio']);
// 		$('[name="1stTime"]').text(obj.moreChance);

// 		$.ajax({
// 			url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/get2ndPassedCompare',
// 			data: {
// 				sportid: gb.sportid
// 			},
// 			async: false,
// 			dataType: "jsonp",
// 			callback: "JsonCallback"
// 		}).done(function(obj) {
// 			//gb.userInfo.dptCompare = {};
// 			//console.log(8);
// 			//$('[name="progress"]').text('80%');
// 			gb.userInfo.dptCompare.moreChancePassedCompare = obj;
// 			getScoreRangeByDpt();
// 		});

// 	});
// }

function getScoreRangeByDpt() {
	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreRangeByDpt&dpt=' + gb.userInfo.user_dpt,

		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(9);
		//$('[name="progress"]').text('90%');
		var mostScore = obj[obj.length - 1];
		$('[name="dptMostScore"]').text(mostScore.score);
		$('[name="dptMostScoreNum"]').text(mostScore.nums);
		if (gb.sportid == SPORT.PARTY) {
			$('[name="dptMostScoreDesc"]').text("他们一定在“两学一做”学习教育中狠抓落实，对党的相关知识熟记于心了。");
		}
		gb.userInfo.dptScoreOrder = obj;
		getScoreRange();
	});
}

function getScoreRange() {

	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreRange',
		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		//console.log(10);
		gb.userInfo.scoreRange = obj;
		for (var i = 2; i <= 8; i++) {
			gb.option[i] = getOptions(i);
		}
		//$('[name="progress"]').text('99%');
		initDom();
	});
}

var getOptions = function(index) {
	var option;
	if (index == 2 && !gb.optionRenderFlag[index - 2]) {

		option = util.initOption();
		option.series[0].data = [];
		option = getScoreRangeOption(gb.userInfo.scoreRange, option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	} else if (index == 3 && !gb.optionRenderFlag[index - 2]) {

		option = util.initOption();
		option.series[0].data = [];
		option = getScoreRangeOption(gb.userInfo.dptScoreOrder, option);

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	} else if (index == 4 && !gb.optionRenderFlag[index - 2]) {
		//获取下一页，参与度信息

		option = util.initOption();

		option.series[0].data = [];
		option.yAxis[0].data = ['全公司', gb.userInfo.user_dpt, gb.userInfo.user_name];
		option.series[0].name = "答题时间";
		option.series[0].data = [(Number.parseInt(gb.userInfo.ltdTime) / 60).toFixed(1), (Number.parseInt(gb.userInfo.dptTime) / 60).toFixed(1), {
			value: (Number.parseInt(gb.userInfo.timeUsed) / 60).toFixed(1),
			itemStyle: {
				normal: {
					color: 'rgb(99,201,99)',
					label: {
						"textStyle": {
							"color": "#fff"
						}
					}
				}
			}
		}];
		option.series[0].itemStyle.normal.label = {
			"show": true,
			"textStyle": {
				"fontSize": 18,
				"color": "#333"
			},
			"position": "insideLeft",
			"formatter": "{b}:{c}分钟"
		};

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	} else if (index == 5 && !gb.optionRenderFlag[index - 2]) {

		option = util.initOption();
		option.series = [{
			name: '已参与',
			type: 'bar',
			barMaxWidth: 60,
			stack: '比例',
			label: {
				normal: {
					show: false,
					position: 'insideLeft',
					textStyle: {
						fontSize: 15
					},
					formatter: function(param) {
						return param.name + '\n' + (param.value).toFixed(2) + '%';
					}
				}
			},
			itemStyle: {
				normal: {
					color: function(params) {
						return gb.color[params.dataIndex];
					},
				}
			},
			data: [],
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 100;
			},
			animationDelayUpdate: function(idx) {
				return idx * 100;
			}
		}, {
			name: '未参与',
			type: 'bar',
			barMaxWidth: 60,
			stack: '比例',
			label: {
				normal: {
					show: true,
					position: 'insideRight',
					textStyle: {
						fontSize: 15
					},
					formatter: function(param) {
						return param.name + '\n' + (100 - param.value).toFixed(2) + '%';
					}
				}
			},
			itemStyle: {
				normal: {
					color: gb.colors.whiteMediumLight
				}
			},
			data: [],
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 100;
			},
			animationDelayUpdate: function(idx) {
				return idx * 100;
			}
		}];

		gb.userInfo.dptCompare.answerRatio.map(function(data) {
			option.yAxis[0].data.push(data.dpt);
			var curRatio = Number.parseFloat(data.answeredRatio);
			option.series[0].data.push(curRatio);
			option.series[1].data.push(100 - curRatio);
		});
		//如果有一半以上的人员参与
		if (option.series[0].data[0] > 50) {
			option.series[0].label.normal.show = true;
			option.series[1].label.normal.show = false;
		}
		option.yAxis[0].data.reverse();
		option.series[0].data.reverse();
		option.series[1].data.reverse();

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	} else if (index == 6 && !gb.optionRenderFlag[index - 2]) {

		option = {
			color: gb.color,
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}分 : {c}人 ({d}%)"
			},
			legend: {
				show: false,
				orient: 'vertical',
				left: 'left',
				data: []
			},
			series: [{
				name: '得分分布',
				type: 'pie',
				radius: '60%',
				center: ['50%', '50%'],
				data: [],
				label: {
					normal: {
						textStyle: {
							color: '#334'
						},
						formatter: '{b}分\n({d}%)'
					}
				},
				labelLine: {
					normal: {
						length: 10,
						lineStyle: {
							color: '#334'
						}
					}
				},
				//animationEasing: 'cubicInOut',
				//animationEasingUpdate: 'cubicInOut',
				animationDelay: function(idx) {
					return idx * 100;
				},
				animationDelayUpdate: function(idx) {
					return idx * 100;
				}
			}]
		};
		gb.userInfo.dptScoreOrder.map(function(data) {
			option.legend.data.push(data.score);
			option.series[0].data.push({
				name: data.score,
				value: data.nums
			});
		});

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	} else if (index == 7 && !gb.optionRenderFlag[index - 2]) {

		option = util.initOption();
		option.tooltip = {
			trigger: 'item',
			formatter: "{a} <br/>{b} :{c}分"
		};
		option.series = [{
			name: '平均得分',
			type: 'bar',
			label: {
				normal: {
					show: true,
					position: 'insideRight',
					textStyle: {
						fontSize: 15
					},
					formatter: '{b}\n{c}分'
				}
			},
			itemStyle: {
				normal: {
					color: function(params) {
						return gb.color[params.dataIndex];
					},
				}
			},
			data: [],
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 100;
			},
			animationDelayUpdate: function(idx) {
				return idx * 100;
			}
		}];

		gb.userInfo.dptCompare.scoreCompare.map(function(data) {
			option.yAxis[0].data.push(data.dpt);
			option.series[0].data.push(data.score);
		});
		option.yAxis[0].data.reverse();
		option.series[0].data.reverse();

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	}
	/*else if (index == 8 && !gb.optionRenderFlag[index - 2]) {

		option = util.initOption();

		option.tooltip = {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		};
		option.series = [{
			name: '获奖比例',
			type: 'bar',
			barMaxWidth: 60,
			label: {
				normal: {
					show: true,
					position: 'insideRight',
					textStyle: {
						fontSize: 15
					},
					formatter: '{b}\n{c}%'
				}
			},
			itemStyle: {
				normal: {
					color: function(params) {
						return gb.color[params.dataIndex];
					},
				}
			},
			data: [],
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 100;
			},
			animationDelayUpdate: function(idx) {
				return idx * 100;
			}
		}];

		gb.userInfo.dptCompare.prizeCompare.map(function(data) {
			option.yAxis[0].data.push(data.dpt);
			option.series[0].data.push(data.dptPassRatio);
		});
		option.yAxis[0].data.reverse();
		option.series[0].data.reverse();

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;

	}
	else if (index == 8 && !gb.optionRenderFlag[index - 2]) {

		option = util.initOption();
		option.legend = {
			show: true,
			data: ['第二次', '第一次'],
			textStyle: {
				color: '#fff'
			},
			x: 'right',
			y: 30
		};
		option.tooltip = {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		};
		option.yAxis = [{
			"type": "category",
			"show": true,
			"axisLine": {
				"show": false
			},
			"axisTick": {
				"show": false
			},
			"splitLine": {
				"show": false
			},
			"axisLabel": {
				"textStyle": {
					"color": "rgba(255, 255, 255, 0.6)"
				}
			},
			"data": []
		}];
		option.grid.x = 95;
		option.color = gb.color;
		option.series = [{
			name: '第二次',
			type: 'bar',
			barMaxWidth: 60,
			stack: '总比例',
			label: {
				normal: {
					show: false
				}
			},
			data: [],
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 100;
			},
			animationDelayUpdate: function(idx) {
				return idx * 100;
			}
		}, {
			name: '第一次',
			type: 'bar',
			barMaxWidth: 60,
			stack: '总比例',
			label: {
				normal: {
					show: false
				}
			},
			data: [],
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 100;
			},
			animationDelayUpdate: function(idx) {
				return idx * 100;
			}
		}];
		gb.userInfo.dptCompare.moreChancePassedCompare.map(function(data) {
			option.yAxis[0].data.push(data.dpt);
			option.series[0].data.push(data['2ndPassed']);
			option.series[1].data.push(data['1stPassed']);
		});

		option.yAxis[0].data.reverse();
		option.series[0].data.reverse();
		option.series[1].data.reverse();

		//gb.myChart[index - 2].setOption(option);
		gb.optionRenderFlag[index - 2] = true;
		return option;
	}*/
};


//sectionsColor: ['#293c55'],
var initDom = function() {

	$('#fullpage').fullpage({
		navigation: true,
		afterRender: function(index, direction) {

			for (var i = 1; i < 7; i++) {
				gb.myChart[i - 1] = echarts.init(gb.dom[i]);
			}

			$(window).resize(function() {
				for (var i = 1; i < 7; i++) {
					gb.myChart[i - 1].resize();
				}
			});

			//最后一页隐藏箭头
			if (index == 7 && (direction == 'down')) {
				$('.iSlider-arrow').hide();
			}
		},
		afterLoad: function(anchor, index) {
			handleCounterup($(".section:nth(" + (index - 1) + ")").find(".number"), 500);

			if (index >= 2 && index <= 7) {
				gb.myChart[index - 2] = echarts.init(gb.dom[index - 1]);
				gb.myChart[index - 2].setOption(gb.option[index]);
			}

			if (index == 8) {
				//console.log('进入最后一页');
				$('.iSlider-arrow').hide();
			} else {
				$('.iSlider-arrow').show();
			}
		}
	});

	$('.hidden').removeClass('hidden');

	//全屏加载完毕
	if (!gb.loadComplete) {
		$("#fakeLoader").hide();
		gb.loadComplete = true;
	}
};

var refreshData = function() {
	$.ajax({
		url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getSafeExamData&uid=' + uid,
		data: {
			sportid: gb.sportid
		},
		async: false,
		dataType: "jsonp",
		callback: "JsonCallback"
	}).done(function(obj) {
		gb.loadBscInfo = obj.status;
		if (gb.loadBscInfo) {

			gb.userInfo = obj;
			gb.userInfo.dptCompare = {};
			gb.userInfo.user_dpt = gb.userInfo.user_dpt.trim();
			$('[name="userName"]').text(gb.userInfo.user_name);
			$('[name ="userOrder"]').text(gb.userInfo.answerOrder); //Number.parseInt(gb.userInfo.id) - gb.dbSheetIdx
			$('[name="userScore"]').text(gb.userInfo.score);

			gb.windowTitle = '我在本次' + SPORTNAME[gb.sportid] + '答题活动获得了' + gb.userInfo.score + '分，你也来参加吧！';
			document.title = gb.windowTitle;

			if (gb.sportid == SPORT.PARTYJZ) {
				//$('[name="myErr"]').hide();
				$('.section').last().find('p:nth(2)').hide();
				$('.section').last().find('p:nth(3)').hide();
				$('.section').last().find('p:nth(1)').text('管三党支部').css('font-size', '1.5em');
			}

			if (gb.userInfo.score == 100) {
				$('[name="myErr"]').hide();
			} else {
				$('[name="myErr"]').attr('href', window.location.href.replace('score', 'error'));
			}


			//所用时间
			var minutes = Math.floor(Number.parseInt(gb.userInfo.timeUsed) / 60);
			var seconds = Number.parseInt(gb.userInfo.timeUsed) % 60;

			$('[name="userMinuteLength"]').text(minutes);
			$('[name="userSecondLength"]').text(seconds);

			var scoreDesc = (Number.parseInt(gb.userInfo.score) >= 80) ? "这是一个不错的分数哟" : "下次还需要继续努力呢";

			$('[name="scoreDesc"]').text(scoreDesc);
			$('[name="answerTimes"]').text(gb.userInfo.iTimes == "1" ? "仅用了一次机会便" : "用了两次机会");
			//$('[name="answerTimes"]').text("用了" + gb.userInfo.iTimes + "次机会");


			getScoreOrder();

			/*getTimeLength();
			getAnsweredRatio();
			getScoreCompare();
			getPrizeCompare();
			get2ndPassedCompare();

			console.log(JSON.stringify(gb.userInfo));

			for (var i = 2; i <= 9; i++) {
			    gb.option[i] = getOptions(i);
			}

			initDom();*/

		}
	});
}();