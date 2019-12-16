const express = require('express');
const pool = require('../pool.js');
const router = express.Router();

router.get("/getPic", (req, res) => { 

  var sql = "select path from  jkwl_banner";
  pool.query(sql,(err, result) => { 
    if (err) throw err;
    res.send(result)
    //console.log(result)
  })
})


router.get("/hotComm", (req, res) => { 

  var sql = "select * from  jkwl_hot_comm";
  pool.query(sql,(err, result) => { 
    if (err) throw err;
    res.send(result)
   // console.log(result)
  })
})


module.exports = router;