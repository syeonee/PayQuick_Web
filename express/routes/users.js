var express = require('express');
var db = require('../db');
var router = express.Router();

router.post('/login', function (req, res) {
  const user = {
    'own_id': req.body.user.userid,
    'own_pw': req.body.user.password
  };
  var sql = 'SELECT * FROM owners WHERE own_id = ?';

     db.get().query(sql, user.own_id, function (err, result) {
	var resultCode = false;
        var message = '에러가 발생했습니다';

        if (err) {
            console.log(err);
        } else {
            if (result.length === 0) {
                resultCode = false;
                message = '존재하지 않는 계정입니다.';
            } else if (user.own_pw !== result[0].own_pw) {
                resultCode = false;
                message = '비밀번호가 일치하지 않습니다.';
            } else {
                resultCode = true;
                message = result[0].own_name + '님 환영합니다!';
                console.log(req.body);
            }
        }

        res.json({
            'success': resultCode,
            'message': message,
        });
    })
});

router.get('/info/:id', function (req, res) {
  var id = req.params.id;
  var sql = 'SELECT * FROM owners WHERE own_id = ?';

     db.get().query(sql, id, function (err, result) {

        if (err) {
            console.log(err);
        } else {
	    res.json({
            	'userId': result[0].own_id,
		'userName': result[0].own_name,
		'userPhone': result[0].own_phone,
		'shopName': result[0].biz_name,
		'shopNum': result[0].biz_number 
            });
        }
    })
});

router.get('/', function (req, res) {
     var sql = 'SELECT * FROM customers';

     db.get().query(sql, function (err, result) {
        if (err) {
	    throw err;
        }
	res.send(result);
        
    })
});

module.exports = router;
