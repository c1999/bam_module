/**
 * Created by Administrator on 2018/6/14.
 */
const crypto = require('crypto');
exports.md5 = function (string) {
        return crypto.createHash('md5').update(string).digest('hex');
};