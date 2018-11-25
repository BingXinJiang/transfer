'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

/**
 * 基础用户关系表
 * @type {mongoose}
 */
var UserRelationShipSchema = new Schema({
  hostUserId: {
      type: String,
      required: true,
  },
  groupOpSide: {
      type: String,
      required: true,
  },
  createTime: Date,
  updateTime: Date,
  valid: {
    type: Boolean,
    default: true
  }
})

/**
 * 定义模型UserRelationShip
 * @type {[type]}
 */
var UserRelationShip = mongoose.model('UserRelationShip', UserRelationShipSchema)
module.exports = UserRelationShip;