function jsRight(sr, rightn) {
	return sr.substring(sr.length - rightn, sr.length);
}

//数组随机排序
function randomsort(a, b) {
	return Math.random() > 0.5 ? -1 : 1;
}

function getRandomArr(start, end) {
	var arr = [];
	if (typeof end == 'undefined') {
		end = start;
		start = 0;
	}
	for (var i = start; i < end; i++) {
		arr.push(i);
	}
	return arr.sort(randomsort);
}

function timeReleasedTip(lastPage) {
	$.alert("答题时间到，系统将不再记录此后的得分，请提交当前成绩！", "时间到！", function() {
		$.fn.fullpage.moveTo(0, lastPage - 2);
	});
}

function handleTotalScore(iScore, uid, exam) {
	var tipStr = '';
	if (iScore >= 80) {
		tipStr = '感谢您的参与！';
	} else {
		if (exam.loginData.iTimes < exam.answerTimes) {
			tipStr = '您还有一次答题机台，退出页面重新进入即可，下次继续努力哦！';
		}
		tipStr = '下次继续努力哦！';
	}

	$('[name="sucessInfo"] .weui_msg_desc').html('提交成功，您一共得了<span name="totalScore" style="font-weight:bold;color:#445"> ' + iScore + ' </span>分');
	$('.weui_icon_msg').last().addClass('weui_icon_success').removeClass('weui_icon_warn');

	//处理得分专题
	$('[name="scoreLink"]').attr('href', './score.html?sid=' + exam.sportid + '&uid=' + uid);
	$('[name="errLink"]').attr('href', './error.html?sid=' + exam.sportid + '&uid=' + uid);

	//显示提示信息
	$('[name="sucessInfo"] .weui_msg_title').text(tipStr).show();
}

function submitPaper(data, exam) {
	$.ajax({
			url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/setSafeExamData',
			data: data,
			dataType: "jsonp",
			callback: "JsonCallback",
			success: function(obj) {
				if (obj.status == 0) {
					$('[name="sucessInfo"] .weui_msg_title').text('提交失败，请稍后重试');
				} else if (obj.status == -1) {
					$('[name="sucessInfo"] .weui_msg_title').text('该用户已提交数据');
				} else { //提交成功
					handleTotalScore(data.score, data.uid, exam);
					if (!exam.realMatch) {
						if (data.score == exam.loginData.oldScore) {
							$.alert("本次得分" + data.score + "与上一次相同，系统将不保存此次得分", "警告！");
						} else if (data.score < exam.loginData.oldScore) {
							$.alert("系统检测到本次得分" + data.score + "比上次更低，系统将不保存此次得分", "警告！");
						}
					}
					//防止一个人写多条记录
					//exam.loginData.iTimes = 2;
				}

				// if (isAllQuestionAnswered(exam)) {
				// 	$.fn.fullpage.moveTo(0, exam.lastPage - 1);
				// }

				//$.fn.fullpage.moveSlideRight();


			},
			error: function(obj) {
				var tipStr = '提交失败，请退出页面重新进入';
				$('[name="sucessInfo"] .weui_msg_title').text(tipStr).show();
			}
		})
		.always(function() {
			exam.isSubmit = true;
			//隐藏提交按钮，防止二次提交数据
			if (!exam.realMatch) {
				$('#submit').hide();
			}
		});

	// if (isAllQuestionAnswered(exam)) {
	// 	$.fn.fullpage.moveTo(0, exam.lastPage - 1);
	// }
}

function isAllQuestionAnswered(exam) {
	var passed = true;
	var len = exam.isAnswered.length;
	for (var i = 0; i < len - 1 && passed; i++) {
		var isAnswered = exam.isAnswered[i];
		if (!isAnswered) {
			var j = i + 1;
			if (!exam.realMatch) {
				$.toast("第" + j + "题尚未作答，请先填写完所有题目再交卷");
				$.fn.fullpage.moveTo(0, j + 1);
			}
			passed = false;
			return passed;
		}
	}
	return passed;
}

function today(type) {
	var date = new Date();
	var a = date.getFullYear();
	var b = jsRight(('0' + (date.getMonth() + 1)), 2);
	var c = jsRight(('0' + date.getDate()), 2);
	var d = date.getHours();
	var e = date.getMinutes();
	var f = date.getSeconds();
	var output;
	switch (type) {
		case 0:
			output = a + '年' + b + '月' + c + '日';
			break;
		case 1:
			output = a + '-' + b + '-' + c + ' ' + d + ':' + e + ':' + f;
			break;
		case 2:
			output = a + '年' + b + '月' + c + '日' + d + '时' + e + '分' + f + '秒';
			break;
		case 3:
			output = a + '-' + b + '-' + c + ' ' + d + ':' + e;
			break;
		case 4:
			output = a + '年' + b + '月' + c + '日  ' + d + '时' + e + '分';
			break;
		case 5:
			output = b + '/' + c + '/' + a;
			break;
		case 6:
			output = a + '-' + b + '-' + c;
			break;
	}
	return output;
}

function validate(data) {
	var isPass = true;
	if (data.user_name == '') {
		$('[name="userName"]').parents('.weui_cell').find('label').css('color', '#fff');
		isPass = false;
	} else {
		$('[name="userName"]').parents('.weui_cell').find('label').attr('style', '');
	}

	if (data.user_dpt == '') {
		$('[name="user_dpt"]').parents('.weui_cell').find('label').css('color', '#fff');
		isPass = false;
	} else {
		$('[name="user_dpt"]').parents('.weui_cell').find('label').attr('style', '');
	}

	if (data.user_id == '') {
		$('[name="userCard"]').parents('.weui_cell').find('label').css('color', '#fff');
		isPass = false;
	} else {
		$('[name="userCard"]').parents('.weui_cell').find('label').attr('style', '');
	}
	return isPass;
}

function submitData(bCheck, answerNums, exam) {
	//清空错误数据
	exam.error = [];
	//得分清零
	exam.total = 0;

	answerNums = (answerNums + 1) < exam.maxAnswerNum ? (answerNums + 1) : exam.maxAnswerNum;

	exam.answerList.map(function(scores, i) {
		exam.total += scores;
		if (!scores) {
			//错误题目推送原题目的顺序
			exam.error.push(exam.sourceList[i]);
		}
	});

	//是否所有题目均答完
	if (bCheck && !isAllQuestionAnswered(exam)) {
		if (!exam.realMatch) {
			return exam;
		}
	}
	var errStr = '';
	exam.error.map(function(elem) {
		errStr += elem + ',';
	});

	errStr = (errStr.length) ? errStr.substring(0, errStr.length - 1) : '-1';

	var data = {
		score: (exam.total * exam.scoresPerAnswer).toFixed(0),
		errors: errStr,
		rec_time: today(1),
		start_time: exam.loginData.loginTime,
		uid: exam.loginData.uid,
		iTimes: exam.loginData.iTimes,
		oldScore: exam.loginData.oldScore,
		sportid: exam.sportid,
		bCheck: bCheck,
		answer_nums: answerNums //当前答题数量
	};
	//中途提交，次数增1
	if (!bCheck && data.answer_nums < exam.maxAnswerNum) {
		data.iTimes = 2;
	}
	if (exam.timeLength == 0) {
		$.modal({
			title: "提示",
			text: "您确定要交卷吗?",
			buttons: [{
				text: "交卷",
				onClick: function() {
					exam.isSubmit = true;
					submitPaper(data, exam);
				}
			}, {
				text: "检查一遍",
				onClick: function() {
					$.fn.fullpage.moveTo(0, 2);
				}
			}]
		});
	} else {
		exam.isSubmit = true;
		submitPaper(data, exam);
	}
	return exam;
}

module.exports = {
	timeReleasedTip: timeReleasedTip,
	judgeTimeReleased: function(exam) {
		//开始计时
		if (exam.timeLength && exam.isLogin && !exam.isStarted && !exam.timeReleased) {
			exam.isStarted = true;
			//答题时间用完
			setTimeout(function() {
				exam.timeReleased = true;
				timeReleasedTip(exam.lastPage);
			}, exam.timeLength);
			var minutes = exam.timeLength / 1000 / 3;
			var strTips = Math.floor(minutes / 60) + '分' + ((minutes % 60 > 0) ? (minutes % 60 + '秒') : '钟');
			//答题时间提醒
			setTimeout(function() {
				$.toast("考试时间已过去" + strTips);
			}, exam.timeLength * 0.33);

			//答题时间提醒
			setTimeout(function() {
				$.toast("考试时间仅剩" + strTips + ',请抓紧时间');
			}, exam.timeLength * 0.67);
		}
		return exam;
	},
	pageChange: function(index, nextIndex, direction, exam) {
		var idx = index - 1;
		if (!exam.debug) { //非测试模式

			if (direction == 'right' && !exam.isLogin && !exam.timeReleased) {
				setTimeout(function() {
					$.fn.fullpage.moveTo(0, 1);
				}, 200);
				return;
			}

			if (direction == 'right' && !exam.timeReleased && idx > 0 && idx < exam.lastPage - 2 && !exam.isAnswered[idx - 1]) {
				$.alert("第" + idx + "题您还没有作答！", "警告！", function() {
					$.fn.fullpage.moveTo(0, index);
				});
			}
		}

		//最后一页隐藏箭头
		if (index > exam.lastPage && (direction == 'right')) {
			$('.iSlider-arrow-blue-right').hide();
		}
		//禁止改题
		if (direction == 'left' && exam.isStarted && exam.isAnswered[idx - 2]) {
			if (!exam.editAnswer) {
				setTimeout(function() {
					$.fn.fullpage.moveTo(0, index);
					$.toast("不允许修改答案");
				}, 200);
			}
			return;
		}
	},
	handleTotalScore: handleTotalScore,
	today: today,
	getExamTemplate: function(data, i, pNum) {
		var ques = [];
		var arr = [];
		//选项乱序
		arr = getRandomArr(data.question.length);
		var oldOrder = [];
		arr.map(function(arrData, id) {
			oldOrder[arrData] = id;
		});
		var str = '<div class="slide">' +
			'<h1 class="answer-num title-hor blue-font">第<span>' + i + '</span>题</h1>' +
			'<div class="weui_cells_title blue-font" style="margin-top:-5px;line-height:1.2;">' + data.title + '</div>' +
			'<div class="weui_cells weui_cells_checkbox weui_cells_dark weui_cells_dark_myerr blue-font" data-id=' + (i - 6 + pNum * 5) + ' data-order=' + (i - 1) + ' data-answer=' + (oldOrder[data.answer - 1] + 1) + '>';

		data.question.map(function(qTitle, idx) {
			ques[idx] = '';
			ques[idx] += '    <label class="weui_cell weui_check_label" style="padding-top:5px;padding-bottom:5px;">' +
				'<div class="weui_cell_hd">' +
				'    <input type="radio" class="weui_check" name="radio' + (i - 1) + '">' +
				'    <i class="weui_icon_checked"></i>' +
				'</div>' +
				'<div class="weui_cell_bd weui_cell_primary" data-value=' + oldOrder[idx] + '>' +
				'    <p>' + qTitle + '</p>' +
				'</div></label>';
		});

		var strQues = '';
		for (var j = 0; j < data.question.length; j++) {
			strQues += ques[arr[j]];
		}
		//选项乱序 -END

		str += strQues + '</div><img name="fixed" src="//cbpc540.applinzi.com/topic/exam/assets/img/main.jpg" class="background_dark answer-title"></div>';
		return str;
	},
	getRandomArr: getRandomArr,
	isAllQuestionAnswered: isAllQuestionAnswered,
	submitData: submitData,
	handleTouchEvent: function(exam, obj) {
		var answerPrnt = obj.parents('.weui_cells');
		var answerInfo = obj.parent().find('.weui_cell_primary');
		var curScore = (answerInfo.data('value') + 1 == answerPrnt.data('answer')) ? 1 : 0;
		var curID = answerPrnt.data('id');

		//增加此条件将存在修改答案后分数不变的BUG
		//if (!exam.isAnswered[curID])
		{
			exam.answerList[curID] = curScore;
			exam.isAnswered[curID] = 1;
			exam.curID = curID;

			if (exam.timeReleased) {
				timeReleasedTip(exam.lastPage);
			} else {

				//未到最后一题
				//
				if (curID <= exam.maxAnswerNum - 1) {
					//如果当前答对，并且在实时比赛模式才提交分数
					if ( /*curScore && */ exam.realMatch) {
						//直接提交当前数据，不需审核
						exam = submitData(false, curID, exam);
					}

					setTimeout(function() {
						$.fn.fullpage.moveTo(0, curID + 3);
					}, 300);
				}
			}
		}

		return exam;
	},
	getUserInfo: function(exam) {
		var data = {
			user_name: $('[name="userName"]').val().trim(),
			user_id: $('[name="userCard"]').val().trim(),
			user_dpt: $('[name="user_dpt"]').val(),
			sportid: exam.sportid
		};

		if (!validate(data)) {
			$.toast("请输入个人用户信息", "cancel");
		} else {
			$.ajax({
				url: '//cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/examSafeLogin',
				data: data,
				dataType: "jsonp",
				callback: "JsonCallback",
				success: function(obj) {
					//var obj = loginData[0];
					if (obj.id == 0) { //查无此人
						$.alert("登录失败，请检查您的个人信息", "警告！");
					} else { //登录成功

						//存储用户信息
						localStorage.setItem('userInfo', JSON.stringify(data));

						if (exam.answerTimes > 0 && obj.answer_times >= exam.answerTimes) { //回答次数用完
							$.alert("您已用完" + exam.answerTimes + "次答题机会", "警告！", function() {
								window.location.href = './score.html?sid=' + exam.sportid + '&uid=' + obj.id;
							});
						} else {
							exam.isLogin = true;
							exam.loginData = data;
							exam.loginData.uid = obj.id;
							//答题次数增1
							exam.loginData.iTimes = Number.parseInt(obj.answer_times) + 1;

							//上次分数
							exam.loginData.oldScore = (exam.loginData.iTimes >= 1) ? Number.parseInt(obj.score) : 0;
							exam.loginData.loginTime = today(1);

							//曾经登录过
							if (exam.loginData.iTimes > 1) {

								$.modal({
									title: "提示",
									text: "您已经提交过答案，是否继续作答?",
									buttons: [{
										text: "再做一遍",
										onClick: function() {
											//隐藏页面，防止登录信息再次修改
											$(this).parents('.slide').hide();
											$.fn.fullpage.moveSlideRight();
										}
									}, {
										text: "查看成绩",
										onClick: function() {
											window.location.href = './score.html?sid=' + exam.sportid + '&uid=' + obj.id;
										}
									}]
								});
							} else {
								//隐藏页面，防止登录信息再次修改
								$(this).parents('.slide').hide();
								$.fn.fullpage.moveSlideRight();
							}
						}
					}
				},
				error: function(obj) {
					$.alert("登录失败，请刷新重试", "警告！");
				}
			});
		}
		return exam;
	},
	afterSliderRender: function(exam) {
		//全屏加载完毕
		if (!exam.loadComplete) {
			$("#fakeLoader").hide();
			exam.loadComplete = true;

			//载入数据
			var userInfo = localStorage.getItem('userInfo');
			if (!(userInfo == null)) {
				var obj = $.parseJSON(userInfo);
				$('[name="user_dpt"]').val(obj.user_dpt);
				$('[name="userName"]').val(obj.user_name);
				$('[name="userCard"]').val(obj.user_id);
			}
		}
		return exam;
	}
};