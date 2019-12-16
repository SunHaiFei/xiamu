const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.listen(5050);
console.log(`启动服务`);

// 引入路由模块
const pic = require('./router/getPic');
const free = require('./router/free');
const details = require("./router/free_details");
const deep = require('./router/deep');
// const deepDetails = require('./router/deep_details');

// app.use(cors({
//   //允许跨域的客户端地址
//   origin: ['http://localhost:8080', "http://127.0.0.1:8080"],
//   credentials: true
// }))

app.use(express.static("public"))
// 使用中间件
app.use(bodyParser.urlencoded({ extended: false }))


//挂载路由
app.use("/Home", pic);
app.use("/free", free);
app.use("/details", details);
app.use("/deep",deep);
// app.use("/deepDetails", deep_details);




