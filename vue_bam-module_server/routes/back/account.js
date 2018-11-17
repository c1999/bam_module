let express = require('express');
let accountList = require('../../controller/back/account/accountList');
let getPassword = require('../../controller/back/account/getPassword');
let addAccount = require('../../controller/back/account/addAccount');




const routers = express.Router();
/*动态路由入口*/
routers
    .post('/accountList',accountList.accountList)
    .post('/getPassword',getPassword.getPassword)
    .post('/addAccount',addAccount.addAccount);




exports.router = routers;