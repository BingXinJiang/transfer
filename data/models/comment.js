'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 评论表
 * @type {mongoose}
 */
var CommentSchema = new Schema({
  transferId: {
      type: String,
      required: true,
  },
  userId: {
      type: String,
      required: true,
  },
  comment: String,
  voice: [String],
  image: [String],
  video: [String],
  createTime: Date,
  valid: {
    type: Boolean,
    default: true
  }
})

/**
 * 定义模型Comment
 * @type {[type]}
 */
var Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment;