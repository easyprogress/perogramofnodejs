/* middleware with route */
const express=require('express')
const router=express.Router()
const app=express();

const checkurl=function(req,res,next){
    console.log("current",req.url)
    next();
}


app.get('/home',checkurl, function(req,res){
    res.send("hello from home")
})


app.get('/hj',function(req,res){
    res.send("helo from node js")
})
app.use('/',router)        // for this we used only what we want to call
app.listen(4500)