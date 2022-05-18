const express = require("express");
const Shipping = require('../Models/ShippingModel');
const router = express.Router();

router.post('/shipping/save', (req,res) =>{

    let delivery = new Shipping(req.body);

    delivery.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Delivery saved successfully"
        });
    });
});
