//引用express
const express = require("express")
//创建一个路由对象
const router = express.Router() //restful api
const orderModel = require('../models/shopsInf')

//创建一个restful 地址
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
})

//创建一个restful 地址
// router.get("/home",(req,res)=>{
//     //res.end() write
//     //res.send() sendFile()
//     //res.json() res.jsonp()
//     res.jsonp({
//         msg:"hello restfual api"
//     })
// })

router.get("/home",(req,res)=>{
    res.json(orderModel.getOrders())
})

router.get("/family",(req,res)=>{
    //res.end() write
    //res.send() sendFile()
    //res.json() res.jsonp()
    res.jsonp({
        msg:"hello product api"
    })
})

module.exports = router;
