'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 基础用户信息表
 * @type {mongoose}
 */
var UserSchema = new Schema({
  wechatOpenId: {
    unique: true,
    type: String
  },
  wechatUnionId: {
    unique: true,
    type: String
  },
  wechatAvatarUrl: String,
  wechatNickName: String,
  phoneNumber: {
    unique: true,
    type: String,
    required: true,
  },
  createTime: {
    type: Date,
    default: Date.now()
  },
  type: Number,
  fromUserId: String,
  fromUrl: String,
  valid: {
    type: Boolean,
    default: true
  }
})

// Defines a pre hook for the document.
UserSchema.pre('save', function(next) {
  
})

/**
 * 定义模型User
 * @type {[type]}
 */
var User = mongoose.model('User', UserSchema)
module.exports = User