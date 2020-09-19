var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/daysale/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT DATE_FORMAT(p.pay_time,'%Y-%m-%d') AS 'date',sum(s.price) AS 'total' FROM payinfo p,sold s WHERE s.code_id = p.code_id AND p.own_id= ? GROUP BY DATE_FORMAT(p.pay_time,'%Y-%m-%d') order by date desc limit 2;"

     db.get().query(sql, id, function (err, result) {
        var daysaleInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                daysaleInfos.push(
		    result[i].total
                );
            }
            res.send(daysaleInfos);
        }

    })
});

router.get('/monthsale/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT DATE_FORMAT(p.pay_time,'%Y-%m') AS 'date',sum(s.price) AS 'total' FROM payinfo p,sold s WHERE s.code_id = p.code_id AND p.own_id= ? GROUP BY DATE_FORMAT(p.pay_time,'%Y-%m') order by date desc limit 2;"

     db.get().query(sql, id, function (err, result) {
        var monthsaleInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                monthsaleInfos.push(
                    result[i].total
                );
            }
            res.send(monthsaleInfos);
        }

    })
});

router.get('/daycount/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT DATE_FORMAT(p.pay_time,'%Y-%m-%d') AS 'date',count(s.price) AS 'total' FROM payinfo p,sold s WHERE s.code_id = p.code_id AND p.own_id= ? GROUP BY DATE_FORMAT(p.pay_time,'%Y-%m-%d') order by date desc limit 2;"

     db.get().query(sql, id, function (err, result) {
        var daycountInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                daycountInfos.push(
                    result[i].total
                );
            }
            res.send(daycountInfos);
        }

    })
});

router.get('/sale/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT DATE_FORMAT(p.pay_time,'%Y-%m-%d') AS 'date',sum(s.price) AS 'total' FROM payinfo p,sold s WHERE s.code_id = p.code_id AND p.own_id= ? GROUP BY DATE_FORMAT(p.pay_time,'%Y-%m-%d') limit 7;"

     db.get().query(sql, id, function (err, result) {
        var totalInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                totalInfos.push(
                    result[i].total
                );
            }
            res.send(totalInfos);
        }

    })
});

router.get('/count/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT DATE_FORMAT(p.pay_time,'%Y-%m-%d') AS 'date',count(s.price) AS 'total' FROM payinfo p,sold s WHERE s.code_id = p.code_id AND p.own_id= ? GROUP BY DATE_FORMAT(p.pay_time,'%Y-%m-%d') limit 7;"

     db.get().query(sql, id, function (err, result) {
        var totalInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                totalInfos.push(
                    result[i].total
                );
            }
            res.send(totalInfos);
        }

    })
});

module.exports = router;
