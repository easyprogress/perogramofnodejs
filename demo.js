/* router of node js*/
const express=require('express')
const router=express();

const checkurl=function(req,res,next){
    console.log("current",req.url)
    next();
}
router.use(checkurl)

router.get('/home',function(req,res){
    res.send("hello from home")
})


router.get('/hj',function(req,res){
    res.send("helo from node js")
}).listen(8000)