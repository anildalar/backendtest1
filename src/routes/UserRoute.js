const express = require('express');

const router = express.Router();

router.post('/',(req,res)=>{
    res.status(200).json({
        //data:req.body.fname,
        msg:"Default Routef"
    });
});
router.post('/signup',(req,res)=>{
    res.status(201).json({
        data:req.body.fname,
        msg:"User Created Successfully"
    });
});


module.exports = router;
