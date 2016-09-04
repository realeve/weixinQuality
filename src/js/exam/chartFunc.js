var gb = require('../global/chartConfig.js');
var initOption = function() {
	var option = {
		color: ['rgba(255,255,255,0.6)'],
		grid: {
			borderWidth: 0,
			x: 15,
			y: 60,
			x2: 15,
			y2: 35
		},
		tooltip: {},
		yAxis: [{
			type: 'category',
			"show": false,
			data: []
		}],
		xAxis: [{
			type: 'value',
			splitLine: {
				show: !0,
				lineStyle: {
					type: "dashed",
					color: gb.colors.whiteLight
				}
			},
			axisLine: {
				show: !1
			},
			axisTick: {
				show: !1
			},
			boundaryGap: 0,
			axisLabel: {
				textStyle: {
					color: gb.colors.whiteMedium
				}
			}
		}],
		series: [{
			name: '得分',
			type: "bar",
			barMaxWidth: 60,
			areaStyle: {
				normal: {
					color: gb.colors.whiteMediumLight
				}
			},
			lineStyle: {
				normal: {
					width: 1
				}
			},
			data: [],
			itemStyle: {
				normal: {
					color: gb.colors.whiteMedium,
					width: 1,
					label: {
						show: false,
						textStyle: {
							fontSize: 15,
							color: '#fff'
						},
						position: 'insideRight',
						formatter: '{b}:{c}'
					},
					barBorderRadius: 2
				}
			},
			//animationEasing: 'cubicInOut',
			//animationEasingUpdate: 'cubicInOut',
			animationDelay: function(idx) {
				return idx * 200;
			},
			animationDelayUpdate: function(idx) {
				return idx * 200;
			}
		}]
	};
	return option;
};

module.exports = {
	initOption: initOption,
	getUrlParam: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
		if (r !== null) return decodeURI(r[2]);
		return -1; //返回参数值
	}
};