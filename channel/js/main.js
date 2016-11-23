function init_window(){//窗体
		$(".window").draggable();
	$('.close_btn').click(function(){
    	$(this).parent().parent().hide(100);
  	});
  	
}
function slow(html,showorhide,time){
	if(showorhide=='show'){
		$(html).show(time);
	}else{
		$(html).hide(time);
	}
}
function init_window(){//窗体
		$(".window").draggable();
	$('.close_btn').click(function(){
    	$(this).parent().parent().hide(100);
  	});
  	
}
function ow(e){
	$('.window').hide();
	$('#'+e).show(100);
}
function hw(e) {
    $('.window').hide();
    $('#' + e).hide(100);

}
//只打开当前
function owonly(e) {
    $('#' + e).show(100);
}
function TryClick(id){
	$("#"+id).trigger("click");
}

$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};


function form_clear(id){
	$(':input','#'+id) .not(':button, :submit, :reset, :hidden') .val('').removeAttr('checked') .removeAttr('selected');  
}

function toast(type,result,reload){
	if(type=='success'){
		$("body").append('<p class="toast">'+result+'<\/p>');
		$('.window').hide();
	}else if(type=='warning'){
		$("body").append('<p class="toast orange">'+result+'<\/p>');
	}else if(type=='error'){
		$("body").append('<p class="toast red">'+result+'<\/p>');
	}
	if(reload==true){
		setTimeout(function(){location.reload()}, 1000);
	}else{
		setTimeout(function(){$(".toast").remove()}, 2000);
		
	}
}

ArrayIntersect = function(a, b) {//差集
	return $.merge($.grep(a, function(i) {
		return $.inArray(i, b) == -1;
	}), $.grep(b, function(i) {
		return $.inArray(i, a) == -1;
	}));
};

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时 
        "H+": this.getHours(),
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "f": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function GetNow() {
    return new Date().Format("yyyy-MM-dd HH:mm:ss");
}
function OperateTime(str) {
    str = str.replace(/-/gi, '/');
    str = str.replace(/T/gi, ' ');
    return new Date(str);
}

//判断身份证号
var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];    // 加权因子   
var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];            // 身份证验证位值.10代表X   
function IdCardValidate(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格                     
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证    
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 得到身份证数组   
        if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {   //进行18位身份证的基本验证和第18位的验证
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
/**  
 * 判断身份证号码为18位时最后的验证位是否正确  
 * @param a_idCard 身份证号码数组  
 * @return  
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 声明加权求和变量   
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作   
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和   
    }
    valCodePosition = sum % 11;                // 得到验证码所位置   
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
/**  
  * 验证18位数身份证号码中的生日是否是有效生日  
  * @param idCard 18位书身份证字符串  
  * @return  
  */
function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题   
    if (temp_date.getFullYear() != parseFloat(year)
          || temp_date.getMonth() != parseFloat(month) - 1
          || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
/**  
 * 验证15位数身份证号码中的生日是否是有效生日  
 * @param idCard15 15位书身份证字符串  
 * @return  
 */
function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
    if (temp_date.getYear() != parseFloat(year)
            || temp_date.getMonth() != parseFloat(month) - 1
            || temp_date.getDate() != parseFloat(day)) {
        return false;
    } else {
        return true;
    }
}
//去掉字符串头尾空格   
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
