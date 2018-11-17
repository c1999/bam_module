var qs = require("querystring");
var request = require("request");
var sha1 = require("sha1");
var str = "along";
var Appkey = "33caccdae1b53e2fe0814abf7f29bbb9";
var Appsecret = "cc18d0940516";
var Nonce = "yuanji";
var time = new Date();
var CurTime = time.getTime();
var CheckSum = sha1(Appsecret + Nonce + CurTime);
let log = require("./log");
var account;
// console.log(CheckSum);




function callback2(error, response, body) {
    account = JSON.parse(body);
    if(account.code!==200){
        log.error("网易云短信"+account.code+account.msg)
    }else {
        log.info("网易云短信"+account.msg)
    }
}
// console.log(account);
//发送验证码
exports.send_msg = function (num,callback) {
    var post_data = {
        templateid:3912986,
        mobile: num,
        //code:"2956"
    };
//这是需要提交的数据
    var content = qs.stringify(post_data);
    var proxy_url_2 =' '//https://api.netease.im/sms/sendcode.action?' + content;      //sendcode发送验证码sendtemplate
    var options = {
        url: proxy_url_2, //拼接也是在body 不拼接就写body:"", 封装好的
        method: 'POST',
        hostname: 'api.netease.im',
        port:443,
        path: '/sms/sendtemplate.action',
        body: "aaaa",
        headers: {
            'AppKey': Appkey,
            'Nonce' : Nonce,
            'CurTime': CurTime,
            'CheckSum': CheckSum,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
    };
    request(options, callback2);
    callback(options.headers)
};



//验证 验证码是否正确
exports.send_msg_verify = function (msg,callback) {
    var post_data = {
        //templateid:3912986,       //语音短信
        mobile: msg.num,
        code:msg.code
    };
//这是需要提交的数据
    var content = qs.stringify(post_data);
    var proxy_url = 'https://api.netease.im/sms/verifycode.action?' + content;      //验证 验证码是否正确
    var options = {
        url: proxy_url, //拼接也是在body 不拼接就写body:"", 封装好的
        method: 'POST',
        hostname: 'api.netease.im',
        port:443,
        path: '/sms/sendtemplate.action',
        body: "aaaa",
        headers: {
            'AppKey': Appkey,
            'Nonce' : Nonce,
            'CurTime': msg.CurTime,
            'CheckSum': msg.CheckSum,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        }
    };
    request(options, callback);
};