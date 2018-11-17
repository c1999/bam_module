/**
 * Created by Administrator on 2018/9/14.
 */
/**
 * Created by Administrator on 2018/9/13.
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
exports.getPassword = async (req,res)=> {
    try {
        let userData =await  db.findData_2(url,{_id:ObjectID(req.body.server_id)},"yk_information_management","account_message");
        userData.code=2000;
        a.data = userData[0];
        console.log(userData);
        res.jsonp(a)
    }catch (err){
        log.error(err)
    }
};
