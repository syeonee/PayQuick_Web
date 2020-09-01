var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/:id', function (req, res) {
  var id = req.params.id;
  var sql = 'SELECT id, goods_name, size, color, price FROM stock WHERE own_id= ?';

     db.get().query(sql, id, function (err, result) {
        var stockInfos=[];

        if (err) {
            console.log(err);
        } else {
            for(var i = 0; i < result.length; i++){
                stockInfos.push({
                    stockId: result[i].id,
                    prodName: result[i].goods_name,
                    prodSize: result[i].size,
		    prodColor: result[i].color,
                    prodPrice: result[i].price,
                });
            }
            res.send(stockInfos);
        }

    })
});

module.exports = router;
