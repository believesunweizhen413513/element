var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  updateOne,
  remove
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('element');
  res.json(data);
});

// 
router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('restaurants');
  res.json(data);
});

// 查看更多请求数据进行渲染
router.get('/more', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('more');
  res.json(data);
});

// 详情页渲染请求数据
router.get('/detail', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let sum = req.query.num;
  sum = parseInt(sum)
  let data = await find('restaurants', { distance: sum });
  res.json(data);
});

router.get('/ordeing', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('Ordering');
  res.json(data);
});

// 注册
router.post('/register', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let sum = req.body;
  let data = await find('register', { username: sum.username });
  let tel = await find('register', { tel: sum.tel });
  console.log(data);

  if (sum.username || sum.tel || sum.password || sum.repassword) {
    if (data.length || tel.length) {
      res.send('4')
    }
    else {
      var reg = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
      var isok = reg.test(sum.username);
      if (isok) {
        var reg = /^\S{6,20}$/;
        var isok = reg.test(sum.password);
        if (isok) {
          var reg = /^1[3-9]\d{9}$/;
          var isok = reg.test(sum.tel);
          if (isok) {
            if (sum.password == sum.repassword) {
              await insert('register', [{ username: sum.username, password: sum.password, repassword: sum.repassword, tel: sum.tel }])
              res.send('200')
            } else {
              res.send('3')
            }
          } else {
            res.send('2')
          }
        } else {
          res.send('2')
        }
      } else {
        res.send('2')
      }
    }
  } else {
    res.send('1')
  }
  res.json(data);
});
// /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/

// 登录
router.post('/Login', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let { username, password } = req.body;
  console.log(req.body)
  if (username) {
    await find('register', {$or:[{username},{tel: username}]}).then(function (data) {
      if (data.length >= 1) {
        if (data[0].password == password) {
          res.send('022222')
        } else {
          res.send('2')
        }
      } else {
        res.send('2')
      }
    })
  }
});
module.exports = router;