function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
	if (r !== null) return decodeURI(r[2]);
	return null; //返回参数值
}
var SPORT = {
	"SAFE": 0,
	"PARTY": 1,
	"PARTYJZ": 2
};

var sportid = getUrlParam('sid');
var perScore = getUrlParam('score');
var cht_title = getUrlParam('city');
cht_title = (cht_title == null) ? '质量月微信现场竞答活动' : decodeURI(cht_title);
var max1 = getUrlParam('max1');
max1 = (max1 == null) ? 100 : max2;
var max2 = getUrlParam('max1');
max1 = (max2 == null) ? 100 : max2;

var gb = {
	//bgmid:2,
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
	title: cht_title,
	max1: max1,
	max2: max2,
	option: {},
	myChart: [],
	dom: [],
	color: ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"],
	sportid: (sportid == null) ? 2 : sportid,
	perScore: (perScore == null) ? 1 : perScore
};

module.exports = gb;