'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 祝福场景表
 * @type {mongoose}
 */
var WishSchema = new Schema({
  transferId: {
      type: String,
      required: true,
  },
  userId: {
      type: String,
      required: true,
  },
  createTime: Date,
  valid: {
    type: Boolean,
    default: true
  },
  updateTime: Date,
})

/**
 * 定义模型Wish
 * @type {[type]}
 */
var Wish = mongoose.model('Wish', WishSchema)
module.exports = Scene;