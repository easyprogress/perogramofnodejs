const express=require('express')
const jwt=require('jsonwebtoken')
const app=express();

app.get('/api',(req,res)=>{
    res.json({
        message:"welcome to the api"
    })
})


app.post('/api/post',verifyToken,(req,res)=>{
   
//     res.json({
//         message:"post created"
    
//     })

// })
jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});

app.post('/api/login',(req,res)=>{
    const user={
        id:1,
        user:"alex",
        email:"alex@.com"
    }


    jwt.sign({user},'secretkey',(err,token)=>{
        res.json({
            token
        })
    })
})
function verifyToken(req,res,next){
    const beareHeader=req.header['authorization']
    if(typeof beareHeader=='undefined')
    {
        const bearer=beareHeader.split(' ')
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
      } else {
        // Forbidden
        res.sendStatus(403);
      }

    
}

app.listen(9000,console.log('server is running'))