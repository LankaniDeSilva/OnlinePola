
const express = require('express');
const router = express.Router();
const multer = require("multer");
const User = require("../Models/Login");



router.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
            res.send({message:"Login Sucess",user:user})
           }else{
            res.send({message:"Wrong Credentials"})
           }
        }else{
            res.send("Not Registered User")
        }
    })
});

router.post("/register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password,Repassword} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User Already Exist"})
        }else {
            const user = new User({name,email,password,Repassword})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Registration Sucessfull"})
                }
            })
        }
    })
})


module.exports = router;