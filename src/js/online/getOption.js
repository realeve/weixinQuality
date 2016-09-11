var echarts = require('../vendors/echarts.common.js');
var gb = require("./globalData.js");

module.exports = function() {
	var bgPatternImg = new Image();
	bgPatternImg.src = "http://cbpc540.applinzi.com/topic/exam/assets/img/led.jpg";

	var bg = {
		image: bgPatternImg,
		repeat: 'repeat'
	};

	var fontFamily = ['Microsoft JhengHei', "Microsoft YaHei", "Arial", "黑体"];

	var color = ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"];
	var seriesData = [];
	var legendData = ['准确率 Top 25', '得分 Top 25'];
	for (var i = 0; i < 2; i++) {
		seriesData.push({
			name: legendData[i],
			type: 'bar',
			symbol: 'none',
			barMaxWidth: 60,
			barMinHeight: 50,
			xAxisIndex: i,
			yAxisIndex: i,
			itemStyle: {
				normal: {
					//opacity:0.9,
					color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
						offset: 0,
						color: 'rgba(60, 174, 65,1)'
					}, {
						offset: 1,
						color: 'rgb(25,183, 177)'
					}]),
					//color: color[i+6],
					label: {
						show: true,
						textStyle: {
							fontSize: 18,
							color: '#fff',
							fontFamily: fontFamily
						},
						position: /*i ? 'insideLeft' : */ 'insideRight',
						formatter: '{c}' + (i ? '分' : '%')
					}
				}
			},
			data: []
		});
	}
	var yAxisData = [],
		xAxisData = [],
		gridData = [];
	for (i = 0; i < 2; i++) {
		yAxisData.push({
			type: 'category',
			name: legendData[i],
			gridIndex: i,
			nameGap: 15,
			nameTextStyle: {
				fontSize: 20
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#ddd'
				}
			},
			axisTick: {
				show: false,
				lineStyle: {
					color: '#ddd'
				}
			},
			//inverse: i,
			//position: i ? 'right' : 'left',
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#ddd',
					fontSize: 18,
					fontFamily: fontFamily
				}
			},
			data: []
		});
		xAxisData.push({
			type: 'value',
			scale: true,
			gridIndex: i,
			boundaryGap: false,
			splitLine: {
				show: false
			},
			show: false
		});
		//准确率排序
		gridData.push({
			top: 160,
			right: '4%',
			left: (4 + i * 28) + '%',
			width: '25%',
			bottom: '3%',
			containLabel: true
		});
	}

	var cmpData = ['各小组得分Top 6', '答题速度Top 10'];
	for (i = 0; i < 2; i++) {
		xAxisData.push({
			type: 'category',
			gridIndex: i + 2,
			axisLine: {
				show: false,
				lineStyle: {
					color: '#ddd'
				}
			},
			axisTick: {
				show: false,
				lineStyle: {
					color: '#ddd'
				}
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#ddd',
					fontSize: 14,
					fontFamily: fontFamily
				}
			},
			data: []
		});
		yAxisData.push({
			type: 'value',
			scale: true,
			gridIndex: i + 2,
			boundaryGap: false,
			splitLine: {
				show: false
			},
			max: i === 0 ? gb.max1 : gb.max2,
			min: 0,
			show: false
		});
		seriesData.push({
			name: cmpData[i],
			type: 'bar',
			symbol: 'none',
			xAxisIndex: i + 2,
			yAxisIndex: i + 2,
			barMinHeight: 10,
			barMaxWidth: 60,
			itemStyle: {
				normal: {
					//opacity:0.5,
					color: color[i],
					label: {
						show: true,
						textStyle: {
							fontSize: 18,
							color: '#fafafa',
							fontFamily: fontFamily
						},
						formatter: '{c}',
						position: 'top'
					}
				}
			},
			data: [] // [9, 12, 15, 23, 25].reverse()
		});
		//分组排名
		gridData.push({
			top: (44 + i * 30) + '%',
			left: '55%',
			width: '44%',
			height: '21%',
			containLabel: true
		});
	}


	seriesData.push({
		name: 'pie',
		type: 'pie',
		selectedMode: 'single',
		selectedOffset: 30,
		clockwise: true,
		center: ['83%', '27%'],
		radius: ['12%', '20%'],
		label: {
			normal: {
				textStyle: {
					fontSize: 18,
					color: '#ddd',
					fontFamily: fontFamily
				}
			}
		},
		labelLine: {
			normal: {
				lineStyle: {
					color: '#ddd'
				},
				length: 10,
				length2: 15,
				smooth: true
			}
		},
		data: [],
		itemStyle: {
			normal: {
				color: color[5],
				borderWidth: 0.5,
				borderColor: '#fff'
			}
		}
	});
	var col3x = '58%';
	option = {
		backgroundColor: 'rgb(42,47,71)', //bg,//
		title: [{
				top: 20,
				text: gb.title,
				subtext: '当前已连接人数：0',
				textStyle: {
					color: '#eee',
					fontSize: '40',
					fontFamily: fontFamily
				},
				subtextStyle: {
					color: '#ddd',
					fontSize: '30',
					fontFamily: fontFamily
				},
				x: 'center'
			},
			/*{
			x: 'right',
			y: '10%',
			text: '各小组参赛人数',
			textStyle: {
				color: '#eee',
				fontSize: '20',
				fontFamily: fontFamily
			},
		},*/
			{
				x: col3x,
				y: '37%',
				text: cmpData[0],
				textStyle: {
					color: '#eee',
					fontSize: '20',
					fontFamily: fontFamily
				},
			}, {
				x: col3x,
				y: '66%',
				text: cmpData[1],
				textStyle: {
					color: '#eee',
					fontSize: '20',
					fontFamily: fontFamily
				},
			}
		],
		tooltip: {
			trigger: 'item'
		},
		toolbox: {
			show: true,
			feature: {
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		grid: gridData,
		xAxis: xAxisData,
		yAxis: yAxisData,
		series: seriesData
	};

	return option;
};