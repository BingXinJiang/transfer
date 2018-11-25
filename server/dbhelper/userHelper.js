'use strict'

var mongoose =  require('mongoose')
var User = mongoose.model('User')

/**
 * 通过电话号码查询
 * @param  {[type]} options.phoneNumber [description]
 * @return {[type]}                     [description]
 */
exports.findByPhoneNumber = async ({phoneNumber}) => {
	var query = User.find({phoneNumber})
	var res = null
	await query.exec(function(err, user) {
		if(err) {
			res = {}
		}else {
			res = user
		}
	})
	return res;
}

/**
 * 查找所用用户
 * @return {[type]} [description]
 */
exports.findAllUsers = async () => {
	var query = User.find({});
	let res = await query.exec()
	return res
}

/**
 * 增加用户
 * @param  {[User]} user [mongoose.model('User')]
 * @return {[type]}      [description]
 */
exports.addUser = async (user) => {
	let newU = new User(user)
	let res = newU.save()
	return res
}

/**
 * 删除用户
 * @param  {[type]} options.id [description]
 * @return {[type]}                     [description]
 */
exports.deleteUser = async ({id}) => {
	var flag = false
	await User.remove({id}, function(err) {
		if(err) {
			flag = false
		}else{
			flag = true
		}
	})
	return flag
}