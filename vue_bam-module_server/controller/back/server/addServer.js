/**
 * Created by Administrator on 2018/9/14.
 */

const db = require('../../../module/db');
const url = "mongodb://47.94.210.229:27017/";
const ObjectID = require('mongodb').ObjectID;
let log = require("../../../utils/log");
let  a = {
    "code": 20000,
    "data": {
        "token": "admin"
    }
};

let data = {};
exports.addServer = async (req,res)=> {
    log.error(req.body)
    try {
        let userData =await  db.insertOneData(url,req.body.server_id,"yk_information_management","servers_message");
        userData.code=2000;
        a.data = userData;
        console.log(userData);
        res.jsonp(a)
    }catch (err){
        log.error(err)
    }
};
