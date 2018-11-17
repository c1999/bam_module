/**
 * Created by Administrator on 2018/9/13.
 */
/**
 * Created by Administrator on 2018/9/13.
 */
const db = require('../../../module/db');
const url = "mongodb://localhost:27017/";
let log = require("../../../utils/log");
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
exports.logout = async (req,res)=> {
    log.info(req.body)
    res.jsonp(b)
    /*    try{
     let userData = await db.findData_2(url,{type:"4"},"yukai","homeBulletion");
     data.result="1";
     data.msg = userData;
     res.json(data)
     }catch (err){
     data.result="0";
     data.msg = "出错了";
     res.json(data);
     log.error(err)
     }*/
};