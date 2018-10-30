const APIError = require('../rest').APIError;   //错误请求处理

//服务...
const user=require('../server/user');

//请求接口配置...
module.exports = {

    //添加用户
    'PUT /api/adduser':async(ctx,next)=>{
        let userN = await user.addNewUser(ctx.request.body)
        ctx.rest({
            user:userN
        })
    },
    //userlist全部
    'GET /api/userlist':async(ctx,next)=>{
        let userlist = await user.getAllUser()
        ctx.rest({
            userlist:userlist
        })
    },



    //选择男
    'GET /api/userlist/m':async(ctx,next)=>{
        ctx.rest({
            userlist:user.getUserSex('男')
        })
    },
    //选择女
    'GET /api/userlist/f':async(ctx,next)=>{
        ctx.rest({
            userlist:user.getUserSex('女')
        })
    },
    //姓名搜索
    'GET /api/userlist:name':async(ctx,next)=>{
        ctx.rest({
            userlist:user.getUserName(ctx.params.name)
        });
    },
    //删除用户
    'DELETE /api/userlist:id':async(ctx,next)=>{
        ctx.rest({
            userlist:user.deleteUser(ctx.params.id)
        })
    },
    //修改用户信息
    'POST /api/edituser':async(ctx,next)=>{
        ctx.rest({
            userlist:user.editUser(ctx.request.body)
        })
    }


}
