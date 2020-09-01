var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT DATE_FORMAT(p.pay_time,'%Y-%m-%d') AS 'date',sum(s.price) AS 'total' FROM payinfo p,sold s WHERE s.code_id = p.code_id AND p.own_id= ? GROUP BY DATE_FORMAT(p.pay_time,'%Y-%m-%d');"

     db.get().query(sql, id, function (err, result) {
        var totalInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                totalInfos.push({
                    date: result[i].date,
                    total: result[i].total,
                });
            }
            res.send(totalInfos);
        }

    })
});

module.exports = router;
