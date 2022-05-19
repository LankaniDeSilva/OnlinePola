const express = require("express");
const router = express.Router();

const Pay = require("../Models/Pay");



router.post("/payment", (req,res) =>{

    let newPay = new Pay(req.body);

    newPay.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Payment successful"
        });
    });
}); 

module.exports = router;