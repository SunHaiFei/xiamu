// 主页面数据获取
const express = require('express');

const pool = require('../pool.js');
const router = express.Router();

router.get("/new1", (req, res) => { 

  var sql = "select * from  jkwl_deep_new1";
  pool.query(sql,(err, result) => { 
    if (err) throw err;
    res.send(result)
    //console.log(result)
  })
})




module.exports = router;
