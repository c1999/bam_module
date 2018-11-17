/**
 * Created by Administrator on 2018/6/6.
 */
//import shopping from './shopping'
'use strict';
let url = require('url');
let user = require('./user');
let email = require('./email');
let account = require('./account');
let server = require('./server');
let eamil = require('./email');
let tx = require('./tx');

/*路由总入口 先检测token是否有效*/
exports.app = (app)=> {
        app
            .use('/user',user.router)
            .use('/server',server.router)
            .use('/email',email.router)
            .use('/account',account.router)
};
