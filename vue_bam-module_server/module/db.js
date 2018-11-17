/**
 * Created by Administrator on 2018/5/7.
 */
var MongoClient = require('mongodb').MongoClient;

/*
* url:连接数据库ip
* data:数据/条件
* dbName:数据库名字
* collectionName:集合名字*/

//插入单条数据
exports.insertOneData = function (url,data,dbName,collectionName) {
    //如果有该数据库或集合 则直接添加数据 如果没有则创建并添加
    return new Promise(function (resolev,reject) {
        MongoClient.connect(url,data, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).insertOne(data, function(err, res) {
                if (err) throw err;
                resolev("文档插入成功");
                db.close();
            });
        });
    })
};
//插入多条数据
exports.insertManyData = function (url,data,dbName,collectionName) {
    //如果有该数据库或集合 则直接添加数据 如果没有则创建并添加
    MongoClient.connect(url,data, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).insertMany(data, function(err, res) {
            if (err) throw err;
            console.log("文档插入成功");
            db.close();
        });
    });
};

//查询所有数据
exports.findData = async function (url,dbName,collectionName) {
    return new Promise(function (resolev,reject) {
        MongoClient.connect(url, function(err, db) {
            if (err){
                reject(err)
            }
            var dbo = db.db(dbName);
            dbo.collection(collectionName).find({}).toArray( function(err, result) {
                if (err){
                    reject(err)
                }else {
                    resolev(result);
                    db.close();
                }
            });
        });
    })
};

//指定条件查询 //条件data 例1{name:'AAA'} 例2 {$or:[{name:'AAA'},{name:'BBB'}]} 例3 小于<lt   {'RMB':{$lt:200}} {'RMB':{$lte:200}} 例4  大于>lt   {'RMB':{$gt:200}}  {'RMB':{$gte:200}} 例5 != {'RMB':{$ne:200}}
exports.findData_2 = function (url,data,dbName,collectionName) {
    return new Promise(function (resolev,reject) {
        MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
            if (err) reject(err);
            var dbo = db.db(dbName);
            dbo.collection(collectionName).find(data).toArray(function(err, result) {
                if (err) reject (err);
                resolev(result);
                db.close();
            });
        });
    })

};


//数据修改 只更改查出的第一条数据


//{$set: { "item_count": 10 }}
//{$inc: { "item_count": 10 }} 加法
//{$unset:{'shop_data.name':''}} 删除某文档中的文档字段
//multiply 乘法
exports.updateOneData = function (url,data,data_2,dbName,collectionName) {
    return new Promise(function (resolev,reject) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).updateOne(data,data_2,function(err, result) {
                if (err) throw err;
                resolev('修改成功');
                db.close();
            })
        });
    })

};
//数据多条修改
exports.updateManyData = function (url,data,data_2,dbName,collectionName) {
    return new Promise(function (resolev,reject) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).updateMany(data,data_2,function(err, res) {
                if (err) throw err;
                console.log("修改"+res.result.nModified+"条数据");
                db.close();
            })
        });
    });
};
//删除一条数据
exports.deleteOneData = function (url,data,dbName,collectionName) {
    return new Promise(function (resolev,reject) {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.collection(collectionName).deleteOne(data,function(err, result) {
                if (err) throw err;
                resolev("document删除成功");
                db.close();
            })
        });
    })

};
//删除多条数据
exports.deleteManyData = function (url,data,dbName,collectionName) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).deleteMany(data,function(err, result) {
            if (err) throw err;
            console.log("document删除成功");
            db.close();
        })
    });
};

//排序    排序使用sort()方法,该方法接收一个参数,升序(1) 降序(-1)
//列      {type:1}   {type:-1}
exports.findData_2Sort = function (url,data,sortData,dbName,collectionName) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).find(data).sort(sortData).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
};

//删除集合
exports.dropData = function (url,dbName,collectionName) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).drop(function(err, result) {
            if (err) throw err;
            if(result){
                console.log(collectionName+"集合删除成功")
            }
            db.close();
        });
    });
};
