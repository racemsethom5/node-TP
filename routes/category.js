const express = require('express') ;
const router = express.Router () ;


router.get('/hello',(req,res)=>{
    res.send({id:1,name:"racem"})
    }
    )



module.exports = router;








