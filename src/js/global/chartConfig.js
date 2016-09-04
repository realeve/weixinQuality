var gb = {
	windowTitle: '',
	loadComplete: false,
	colors: {
		white: "#FFF",
		whiteMedium: "rgba(255, 255, 255, 0.6)",
		whiteMediumLight: "rgba(255, 255, 255, 0.3)",
		whiteLight: "rgba(255, 255, 255, 0.2)",
		whiteLighter: "rgba(255, 255, 255, 0.1)",
		primary: "#556fb5",
		primaryLight: "#889acb"
	},
	dbSheetIdx: 53, //数据库中成绩表单初始ID值，减去该值后得到用户是第几个参加活动
	option: [],
	optionRenderFlag: [],
	userInfo: {},
	dom: [],
	myChart: [],
	loadBscInfo: false,
	color: ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
};

module.exports = gb;