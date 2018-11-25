'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 传递表
 * @type {mongoose}
 */
var TransferSchema = new Schema({
  userId: {
      type: String,
      required: true,
  },
  title: {
      type: String,
      required: true,
  },
  description: [String],
  voice: [String],
  image: [String],
  video: [String],
  groupOpSide: [String],
  supervisor: [String],
  performer: [String],
  createTime: Date,
  status: String,
  fatherId: String,
  valid: Boolean,
  public: String,
  permissionUserId: [String],
  scene: [String],
  fixedScene: [{
      sceneId: String,
      status: String
  }]
})

/**
 * 定义模型Transfer
 * @type {[type]}
 */
var Transfer = mongoose.model('Transfer', TransferSchema)
module.exports = Transfer;