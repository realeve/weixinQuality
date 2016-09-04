//公共资源
require('./vendors/jquery.fullPage.js');
require('./vendors/jquery-weui.js');
require('./vendors/fakeLoader.js/fakeLoader.js');

function initDom() {
	//此处设置一个较长数值，数据载入完毕后再显示
	$("#fakeLoader").fakeLoader({
		timeToHide: 600000, //Time in milliseconds for fakeLoader disappear
		bgColor: "#d7eefe",
		spinner: "spinner7"
	});
	$('.fl').parent().append('<p class="center" style="position:absolute;width:100%;top:60%;color:#445">载入中...</p>');
}
initDom();

var exam = require('./global/config.js');
var WINDOWTITLE = require('./global/windowtitle.js');
var PAPER = require('./global/paper.js');
var util = require('./exam/errorFunc.js');
var uid = util.getUrlParam('uid');
var sid = util.getUrlParam('sid');

if (sid != null) {
	exam.examPaper = PAPER[sid];
	document.title = WINDOWTITLE[sid];
}

var app = function() {
	var rendPaper = function() {

		$('#fullpage').fullpage({
			navigation: (uid == -1) || exam.myErrNums > 10 ? false : true,
			onLeave: function(index, nextIndex, direction) {
				if (index > exam.lastPage && (direction == 'down')) {
					$('.iSlider-arrow').hide();
				}
				//存储用户当前看到第几页
				localStorage.setItem(exam.examPaper + '_' + sid, index + 1 - exam.hideNum);
			},
			afterLoad: function(anchor, index) {
				if (index == exam.lastPage) {
					$('.iSlider-arrow').hide();
				} else {
					$('.iSlider-arrow').show();
				}

				exam.curPage = index;
			}
		});

		//全屏加载完毕
		if (!exam.loadComplete) {
			$("#fakeLoader").hide();
			document.getElementById('autoplay').play();

			//载入数据
			exam.lastPage = localStorage.getItem(exam.examPaper + '_' + sid);
			if (!(exam.lastPage == null)) {
				$.fn.fullpage.moveTo(exam.lastPage); // - offset);
			}

		}
	};

	function getNormalErrPaper(question, errorList) {

		//只抽取maxAnswerNum个
		exam.maxAnswerNum = Math.max(question.length, exam.maxAnswerNum);

		//我的错题
		var str = '';
		if (uid == -1) { //显示所有题库
			//question.length
			//管3答题 显示前200道
			for (i = 0; i < exam.maxAnswerNum; i++) {
				//console.log(question[exam.myError[i]]);
				if (!util.isPaperHide(i)) {
					$('#fullpage').append(util.getExamTemplateByObj(question[i], 0, i + 1));
				}
			}

			//var str = '<div class="weui_opr_area"><p class="weui_btn_area"><a href="javascript:$.fn.fullpage.moveTo(1);" class="weui_btn weui_btn_primary" >返回首页</a></p></div>';
			var str = '<div class="weui_opr_area"><p class="weui_btn_area"><div class="weui-row">' +
				'<div class="weui-col-30"><a href="javascript:;" name="hidethis" class="weui_btn weui_btn_plain_primary">隐藏此题</a></div>' +
				'<div class="weui-col-30"><a href="javascript:;" name="showAll" class="weui_btn weui_btn_plain_primary">显示所有</a></div>' +
				'<div class="weui-col-30"><a href="javascript:$.fn.fullpage.moveTo(1);" class="weui_btn weui_btn_plain_primary">返回首页</a></div>' +
				'	</p></div></div>';

			$('.answer-num').parent().append(str);

		} else {
			var len = errorList.length;
			for (i = 0; i < len; i++) {
				//console.log(question[exam.myError[i]]);
				if (typeof question[errorList[i]] != 'undefined') {
					$('#fullpage').append(util.getExamTemplateByObj(question[errorList[i]], 0, i + 1));
				}
			}
		}
	}

	function getPaper() {
		var question = require('./config/' + exam.examPaper + '.json');
		//普通答题，直接载入即可
		if (exam.type == '0') {
			getNormalErrPaper(question, exam.myError);
		} else {
			//过关类型，需按关卡分别载入数据
			var err = exam.myError;
			for (var key in err) {
				var id = parseInt(key, 10);
				getNormalErrPaper(question['part' + id].data, err[key]);
			}
		}

		//间隔背景
		exam.lastPage = exam.myErrNums;
		// for (i = 0; i < exam.lastPage; i++) {
		// 	exam.secColor[i] = (i % 2) ? '#fff' : '#445';
		// }

		document.getElementById('autoplay').play();
		rendPaper();
	}

	function initApp() {
		if (uid == -1) {
			getPaper();
		} else {
			$.ajax({
				url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getMyErrs&sportid=' + sid + '&uid=' + uid,
				async: false,
				dataType: "jsonp",
				callback: "JsonCallback"
			}).done(function(obj) {

				$('[name="username"]').text(obj.user_name);

				if (Number.parseInt(obj.score) > 100) {
					$('[name="userscore"]').text('没有参与本次答题活动');
				} else {
					$('[name="userscore"]').text('获得了' + obj.score + '分。');
				}

				if (obj.sportType == '1') {
					exam.myError = JSON.parse(obj.errors);
				} else {
					exam.myErrNums = 100 - Number.parseInt(obj.score);
					if (exam.myErrNums > 0) {
						$('[name="errTips"]').text('做错' + exam.myErrNums + '道题,最终');
						$('[name="myErrTips"]').text('接下来我们来看看这' + exam.myErrNums + '道题目的正确答案。');
						exam.myError = obj.errors.split(',');
						exam.myErrNums = exam.myError.length;
					}
				}
				getPaper();
			});
		}
	}

	$('#fullpage').on('click', '[name="hidethis"]', function() {
		/* Act on the event */
		//载入数据
		var key = exam.examPaper + '_errlist_' + sid;
		//var key = 'party3-errlist-2';
		var errList = localStorage.getItem(key);
		//console.log(errList);
		var curID = $('.answer-num:nth(' + (exam.curPage - 1) + ')').text().replace('第', '').replace('题', '').trim();
		if (errList == null) {
			localStorage.setItem(key, curID);
		} else {
			localStorage.setItem(key, errList + ',' + curID);
		}
		exam.hideNum++;
	});

	$('#fullpage').on('click', '[name="showAll"]', function() {
		/* Act on the event */
		var key = exam.examPaper + '_errlist_' + sid;
		//var key = 'party3-errlist-2';
		localStorage.removeItem(key);
		window.location.href = window.location.href;
	});

	return {
		init: function() {
			initApp();
		}
	};
}();

jQuery(document).ready(function() {
	app.init();
});