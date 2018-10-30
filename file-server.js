/*
 *  文件资源服务
 */
var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');

// 创建服务
var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);

    // 获取文件状态:
    fs.stat(filepath, function(err, stats) {
        if (!err && stats.isFile()) {
            // 发送200响应:
            response.writeHead(200, {   //设置报文头
                'size': stats.size, //文件大小
                'brithTime': encodeURI(stats.birthtime.toString()),//创建时间
                'modifiedTime':  encodeURI(stats.mtime.toString())//最后修改时间
            });
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});


module.exports=server;