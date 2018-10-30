module.exports={

	APIError: function (code, message) {   //restAPI错误处理
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    
    restify: (pathPrefix) => {  //restAPI方法绑定->为ctx绑定rest方法
    	pathPrefix=pathPrefix || '/api/';
    	return async (ctx,next)=>{
    		if(ctx.request.path.startsWith(pathPrefix)){  //API请求
    			ctx.rest = (data) => {
    				ctx.response.type='application/json';
    				ctx.response.body=data;

    			}
	    		try{
	    			await next();
	    		}catch(e){   //请求错误
	    			ctx.response.status=400;
	    			ctx.response.type='application/json';
	    			ctx.response.body={
	    				code: e.code || 'internal:unknow_error',
	    				message: e.message || ''
	    			};
	    		}
    		}else{
    			await next();
    		}
    	}
    }
}