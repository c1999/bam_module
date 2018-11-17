/**
 * Created by Administrator on 2018/9/7.
 */

const http = require("http");
const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
const url = require("url");
const qs = require("querystring");
const userServer = require('./logic_servers/user');
let path = require("path");
let log = require("./utils/log");
let proxy = httpProxy.createProxyServer();
let reqNum  = 0; // 缓存目前请求的数量
const  cors = require('cors');
app.use(cors());
app.use(express.static(path.join(process.cwd(),"dist")));
app.use('/static',express.static('public'));
proxy.on("proxyReq",()=>{
    //proxy_servers.setHeader('X-Special-Proxy-Header', 'foobar');
    reqNum++;
    log.info("接收到一个请求,当前的请求数量是 "+reqNum)
});
proxy.on("proxyRes",()=>{
    reqNum--;
    log.info("完成一个请求,当前的剩余的请求数量是 "+reqNum)
});
proxy.on('error',  (err, req, res)=> {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Something went wrong. And we are reporting a custom error message.');
});

app.use( function (req,res) {
    var arg = url.parse(req.url).query;
    var serverId = qs.parse(arg)['serverId'];
    switch (serverId){
        case 'back':  proxy.web(req, res, {target: 'http://localhost:7799'});
            break
    }
});
app.listen(9588,()=>{
    log.info("代理服务器开启");
});



































/*
const  express = require('express');
const  app = express();
const  cors = require('cors');
 app.use(cors());
let  log = require('./utils/log.js');


let  a = {
    "code": 20000,
    "data": {
        "token": "admin"
    }
};
let  b = {
    "code": 20000,
    "data": {
        "roles": [
            "admin"
        ],
        "name": "admin",
        "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    }
};
app.post('/user/login',(req,res)=>{
    console.log("======");
    res.send(a)
});
app.post('/user/logout',(req,res)=>{
    console.log("======");
    res.send(a)
});
app.get('/user/info',(req,res)=>{
    console.log("----");
    res.jsonp(b)
});
app.listen(9588,()=>{
    log.info('服务器开启')
});*/
