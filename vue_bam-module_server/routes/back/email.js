let express = require('express');
let emailList = require('../../controller/back/email/emailList');
let getPassword = require('../../controller/back/email/getPassword');
let addEmail = require('../../controller/back/email/addEmail');



const routers = express.Router();
/*动态路由入口*/
routers
    .post('/emailList',emailList.emailList)
    .post('/getPassword',getPassword.getPassword)
    .post('/addEmail',addEmail.addEmail)



exports.router = routers;