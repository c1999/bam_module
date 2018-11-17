/**
 * Created by Administrator on 2018/9/14.
 */
/**
 * Created by Administrator on 2018/9/13.
 */
/**
 * Created by Administrator on 2018/9/13.
 */
/**
 * Created by Administrator on 2018/8/1.
 */
const db = require('../../../module/db');
const url = "mongodb://47.94.210.229:27017/";
let log = require("../../../utils/log");
let  a = {
    "code": 20000,
    "data": {
        "token": "admin"
    }
};

let data = {};
exports.emailList = async (req,res)=> {
    try {
        let userData =await  db.findData(url,"yk_information_management","email_message");
        userData.code=2000;
        a.data = userData
        res.jsonp(a)

    }catch (err){
        log.error(err)
    }
};
