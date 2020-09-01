var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/:id', function (req, res) {
  var id = req.params.id;
  var sql = `SELECT p.pay_number, date_format(p.pay_time,'%Y-%m-%d %H:%i:%s')as pay_time, p.cus_id, s.goods_name, s.price FROM payinfo p, sold s WHERE s.code_id = p.code_id AND p.own_id= ?`;

     db.get().query(sql, id, function (err, result) {
	var payInfos=[];

	if (err) {
            console.log(err);
        } else {
	    for(var i = 0; i < result.length; i++){
		payInfos.push({
		    payNum: result[i].pay_number,
		    payDate: result[i].pay_time,
		    prodName: result[i].goods_name,
		    prodPrice: result[i].price,
		    cusId: result[i].cus_id
		});
      	    }
	    res.send(payInfos);
	}

    })
});

module.exports = router;
