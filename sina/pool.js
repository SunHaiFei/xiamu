//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
  host: "w.rdc.sae.sina.com.cn",
  port: 3306,
  user: "l3kymyxzzo",
  password: "jjxlhmk35ik4yixk5hlwj2khy5k0044xmzjhk243",
  database: "app_xiamu",
  connectionLimit:15
  // host: '127.0.0.1',
  // user: 'root',
  // password: '',
  // database: 'jkwl',
  // connectionLimit: 15 
})

module.exports = pool;