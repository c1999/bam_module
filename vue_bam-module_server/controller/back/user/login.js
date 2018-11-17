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

let  b = {
    "code": 5000,
    "data": {
        "token": "error"
    }
};

let data = {};
exports.login = async (req,res)=> {
    let msg = req.body;
    console.log(msg.username);
    try {
        let userData =await  db.findData_2(url,{name:msg.username},"yk_information_management","user");
        console.log(userData);
        if(userData[0]==null){
            data.result = "0";
            data.msg = "用户名不存在";
            res.json(data)
        }else {
            if (msg.password==userData[0].password){
                data.msg = userData[0];
                data.result = "1";
                res.json(a);
                log.getLog(msg,"ShopLogin","当日登录记录");
            }else {
                data.result = "0";
                data.msg = "密码错误";
                res.json(b)
            }
        }
    }catch (err){
        log.error(err)
    }
};
