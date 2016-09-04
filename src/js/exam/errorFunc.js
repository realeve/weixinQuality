	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = encodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
		if (r !== null) return decodeURI(r[2]);
		return -1; //返回参数值
	}

	function getExamTemplateByObj(data, mode, i, obj) {
		var ques = [];
		var arr = [];
		var answerAttr = ['A', 'B', 'C', 'D'];
		//选项乱序
		if (typeof(data.question) == 'undefined') {
			return;
		}
		arr = getRandomArr(data.question.length);
		var oldOrder = [];
		arr.map(function(arrData, id) {
			oldOrder[arrData] = id;
		});
		var str = '<div class="section background_main_error">' +
			'<h1 class="title answer-num ' + /*(i % 2 ? '' : 'white-font')+*/ '" style="fontSize:2em;">第<span>' + i + '</span>题</h1>';
		if (mode) {
			str += '<h3 class="weui_cells_title">错误人数：<span>' + obj.nums + '人 </span>( ' + obj.percent + '% )</h3>';
		}

		str += '<h3 class="weui_cells_title">正确答案:<span>' + answerAttr[Number.parseInt(oldOrder[data.answer - 1])] + '</h3>' +
			'<div class="weui_cells_title ' + /*(i % 2 ? '' : 'white-font')+*/ '">' + data.title + '</div>' +
			'<div class="weui_cells weui_cells_checkbox weui_cells_dark weui_cells_dark_myerr" data-id=' + (i - 1) + ' data-answer=' + (oldOrder[data.answer - 1] + 1) + '>';

		data.question.map(function(qTitle, idx) {
			ques[idx] = '';
			ques[idx] += '    <label class="weui_cell weui_check_label">';
			ques[idx] += '<div class="weui_cell_hd">';
			ques[idx] += '    <input type="radio" class="weui_check" name="radio' + (i - 1) + '"' + ((idx == data.answer - 1) ? 'checked' : ' ') + '>';
			ques[idx] += '    <i class="weui_icon_checked"></i>';
			ques[idx] += '</div>';
			ques[idx] += '<div class="weui_cell_bd weui_cell_primary" data-value=' + oldOrder[idx] + '>';
			ques[idx] += ((idx == data.answer - 1) ? '<p style="font-weight:bold;color: rgb(255, 16, 80);">' : '    <p>') + qTitle + '</p>';
			ques[idx] += '</div></label>';
		});

		var strQues = '';
		for (var j = 0; j < data.question.length; j++) {
			strQues += ques[arr[j]];
		}
		//选项乱序 -END

		str += strQues + '</div></div>';
		return str;
	}

	//数组随机排序
	function randomsort(a, b) {
		return Math.random() > 0.5 ? -1 : 1;
	}

	function getRandomArr(len) {
		var arr = [];
		for (var i = 0; i < len; i++) {
			arr.push(i);
		}
		return arr.sort(randomsort);
	}
	
	function isPaperHide(idx,exam) {
		var key = exam.examPaper + '_errlist_' + sid;
		var errList = localStorage.getItem(key);
		if (errList == null) {
			return false;
		} else {
			var errArrList = errList.split(',');
			var isFind = false
			for (var i = 0; !isFind && i < errArrList.length; i++) {
				if (idx + 1 == errArrList[i]) {
					isFind = true;
				}
			}
			return isFind;
		}
	}
		
	module.exports ={
		getUrlParam:getUrlParam,
		getExamTemplateByObj:getExamTemplateByObj,
		isPaperHide:isPaperHide
	}