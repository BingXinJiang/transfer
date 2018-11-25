'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 传递场景表
 * @type {mongoose}
 */
var SceneSchema = new Schema({
  title: {
      type: String,
      required: true,
  },
  createTime: Date,
  updateTime: Date,
  valid: {
    type: Boolean,
    default: true
  },
  template: [String],
})

/**
 * 定义模型Scene
 * @type {[type]}
 */
var Scene = mongoose.model('Scene', SceneSchema)
module.exports = Scene;