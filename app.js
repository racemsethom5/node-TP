const express = require('express') 
 //create instance of express server 
 const auth = require('./routes/auth')
const post = require('./routes/post')
 const app = express()
 const category = require('./routes/category') 

 
 app.use('/category', category) 
 app.use('/auth',auth)
app.use('/post',post)

app.get('/',(req,res)=>{
    //res.send("Hello world")
    //res.json({id:1, name:"sachin"})
    res.sendFile(__dirname+'/index.html')
})
 

 app.listen(5000, () =>{
     console.log("first server is running on port 5000") })
