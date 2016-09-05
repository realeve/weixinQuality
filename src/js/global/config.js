var SPORT = require('./sport.js');

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
	if (r !== null) return decodeURI(r[2]);
	return null; //返回参数值
}

var num = getUrlParam('num');
num = (num === null) ? 50 : Number.parseInt(num);

var allowEdit = getUrlParam('edit');
allowEdit = (allowEdit === null) ? true : false;

var exam = {
	loadComplete: false,
	total: 0, //总分
	error: [], //错误题目（原顺序）
	answerList: [], //乱序后的答案顺序
	isAnswered: [], //题目回答状态
	timeReleased: false, //时间用尽
	isStarted: false, //活动是否开始
	timeLength: 40 * 60 * 1000, //启用时间限制 0为不限制
	sourceList: [], //原题目顺序
	scoresPerAnswer: 0, //每道题目分数
	isSubmit: false, //数据是否提交
	isLogin: false, //是否登录
	loginData: {}, //用户登录信息
	maxAnswerNum: num, //最大抽取多少道题目
	answerTimes: 0, //每个用户最多回答几次
	examPaper: "safe", //试卷文件
	sportDate: "9月5日至25日",
	sportid: SPORT.QUALITY,
	editAnswer: allowEdit, //允许修改答案
	curID: 0, //当前答题数
	realMatch: true, //实时提交分数，用于比赛中用户成绩获取
	showTips: false,
	lastPage: 0,
	secColor: [],
	debug: false, //无网络测试模式
	titleNumPerPart: 5, // 每关题目数量
	part: 9, //答题关数
	lastAnswerTime: 0
};

module.exports = exam;