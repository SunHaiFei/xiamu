// 此路由负责free各个详情页

const express = require('express');
const pool = require('../pool.js');
const router = express.Router();

router.get("/life", (req, res) => {
  var { lid } = req.query;
  console.log(lid);
  var sql = "select jkwl_free_life.path,jkwl_free_life.title,free_life_details.detail from jkwl_free_life,free_life_details where jkwl_free_life.lid=free_life_details.lid and jkwl_free_life.lid=?";
  pool.query(sql, [lid], (err, result) => {
    if (err) throw err;
    res.send(result)
    //console.log(result)
  })
})




router.get("/dress", (req, res) => {
  var { lid } = req.query;
  console.log(lid);
  var sql = "select jkwl_free_dress.path,jkwl_free_dress.title,free_dress_details.detail from jkwl_free_dress,free_dress_details where jkwl_free_dress.did=free_dress_details.lid and jkwl_free_dress.did=?";
  pool.query(sql, [lid], (err, result) => {
    if (err) throw err;
    res.send(result)
    //console.log(result)
  })
})


module.exports = router;