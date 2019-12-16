//此路由负责free主页面的数据拿取
const express = require('express');
const pool = require('../pool.js');
const router = express.Router();

router.get("/life", (req, res) => { 

  var sql = "select lid,title,path,count,userCount from  jkwl_free_life";
  pool.query(sql,(err, result) => { 
    if (err) throw err;
    res.send(result)
    //console.log(result)
  })
})


router.get("/dress", (req, res) => { 

  var sql = "select did,title,path,count,userCount from  jkwl_free_dress";
  pool.query(sql,(err, result) => { 
    if (err) throw err;
    res.send(result)
    //console.log(result)
  })
})


module.exports = router;