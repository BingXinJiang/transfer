const session = require('koa-session-minimal');

module.exports = session({
    key: 'session-id', // cookie 中存储 session-id 时的键名, 默认为 koa:sess
    cookie: { // 与 cookie 相关的配置
        domain: 'localhost', // 写 cookie 所在的域名
        path: '/', // 写 cookie 所在的路径
        maxAge: 1000 * 30, // cookie 有效时长
        httpOnly: true, // 是否只用于 http 请求中获取
        overwrite: false // 是否允许重写
    }
})