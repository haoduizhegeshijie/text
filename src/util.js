//util.js文件主要写的是会经常使用到的工具类
//校验邮箱格式
function checkUsername(username){
	return RegExp("^[a-zA-Z](\d\w{4}|\w\d\w{3}|\w{2}\d\w{2}|\w{3}\d\w|\w{4}\d)$").test(username)
}
//校验手机格式
function checkMobile(mobile){
	return RegExp(/^1[34578]\d{9}$/).test(mobile);
}
	
module.exports = {
	checkUsername : checkUsername,
	checkMobile : checkMobile,
}