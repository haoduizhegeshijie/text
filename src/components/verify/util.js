//util.js文件主要写的是会经常使用到的工具类
//校验邮箱格式
function checkUsername(email){
	return RegExp("[a-zA-Z_][a-zA-Z_0-9]{0,}").test(username)
}
//校验手机格式
function checkMobile(mobile){
	return RegExp(/^1[34578]\d{9}$/).test(mobile);
}
	
module.exports = {
	checkUsername : checkUsername,
	checkMobile : checkMobile,
}