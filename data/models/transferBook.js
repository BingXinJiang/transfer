'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 传递台账表
 * @type {mongoose}
 */
var TransferBookSchema = new Schema({
  transferId: {
    type: String,
    required: true
  },
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
  updateTime: Date,
  permissionUserId: [String],
  scene: [String]
})

/**
 * 定义模型TransferBook
 * @type {[type]}
 */
var TransferBook = mongoose.model('TransferBook', TransferBookSchema)
module.exports = TransferBook;