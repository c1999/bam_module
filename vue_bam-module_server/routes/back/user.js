/**
 * Created by Administrator on 2018/9/12.
 */

let express = require('express');
let login = require('../../controller/back/user/login');
let info = require('../../controller/back/user/info');
let logout = require('../../controller/back/user/logout');

const routers = express.Router();

routers
    .post('/login',login.login)
    .post('/info',info.info)
    .post('/logout',logout.logout);

exports.router = routers;