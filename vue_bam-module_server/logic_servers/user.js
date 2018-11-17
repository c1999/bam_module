/**
 * Created by Administrator on 2018/6/7.
 */
const express = require('express');
const app = express();
let session = require('express-session');
let router = require('../routes/back/index');
let bodyParser = require('body-parser');
let log = require("../utils/log");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const  cors = require('cors');
app.use(cors());

//路由
router.app(app);
//第二个参 只有本地才能访问
app.listen(7799,'localhost', function () {
    log.info("用户服务器开启7799端口 用户服务器")
});




















/*var fs = require("fs");
var https = require('https');
var options = {
    key: fs.readFileSync('./key/1529930297397.key'),
    cert: fs.readFileSync('./key/1529930297397.pem')
};*/
