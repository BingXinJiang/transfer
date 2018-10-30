const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')

/**
 * 已递归的形式，读取models文件夹下的js模型文件，并require
 * @param  {[type]} modelPath [description]
 * @return {[type]}           [description]
 */
var walk = function(modelPath) {
  fs
    .readdirSync(modelPath)
    .forEach(function(file) {
      var filePath = path.join(modelPath, '/' + file)
      var stat = fs.statSync(filePath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(filePath)
        }
      }
      else if (stat.isDirectory()) {
        walk(filePath)
      }
    })
}
module.exports = (isProduction)=>{
    let database = 'mongodb://127.0.0.1:27017/transfertest'
    if(isProduction){
      database = ''
    }
    mongoose.Promise = require('bluebird')
    mongoose.connect(database,{ useNewUrlParser: true })
    const models_path = path.join(__dirname, './data/models')
    walk(models_path);
}