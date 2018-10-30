const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const logger = require('koa-logger')

const controller = require('./controller'); //扫描控制器
const rest = require('./rest'); //restAPI
const session = require('./session'); //session配置
const fileServ = require('./file-server');//文件资源服务
const db = require('./db');

const app = new Koa();
const isProduction = process.env.NODE_ENV === 'production'; //判断是否为生产环境

db(isProduction);
app.use(cors()); //跨域-cors
app.use(bodyParser()); //解析请求
app.use(session); //添加session
app.use(logger());

app.use(async (ctx, next) => { //输出请求
    console.log(`${ctx.request.method} ${ctx.request.url}...`); //输出收到的请求
    await next();
});
if (!isProduction) { //静态文件加载
    let staticFiles = require('./static-file');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(rest.restify()); //REST接口
app.use(controller()); //扫描加载控制器

app.listen(3000); // app应用服务在端口3000监听:
fileServ.listen(8099)   //文件服务在8099

console.log('app started...');