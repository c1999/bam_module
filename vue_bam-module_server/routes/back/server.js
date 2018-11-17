
/**
 * Created by Administrator on 2018/6/6.
 */
let express = require('express');
let serverList = require('../../controller/back/server/serverList');
let getPassword = require('../../controller/back/server/getPassword');
let addServer = require('../../controller/back/server/addServer');



const routers = express.Router();
/*动态路由入口*/
routers
    .post('/serverList',serverList.serverList)
    .post('/getPassword',getPassword.getPassword)
    .post('/addServer',addServer.addServer);


exports.router = routers;