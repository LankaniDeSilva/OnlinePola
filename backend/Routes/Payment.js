const express = require("express");
const Payment = require('../Models/Payment');
const Razorpay = require('razorpay');
const { products } = require("./data");

const app = express.Router();

const key_id = 'rzp_test_wl2vRUpHzsbfRB';
const key_secret = 'JJMjAD4Z9YgyaRSHfQQngFQP';


const instance = new Razorpay({
    key_id,
    key_secret
})

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
    res.status(200).json(products);
});

app.get("/order/:productId", (req, res) => {
        const { productId } =req.params;
       const product = Payment.find(product => product.id == productId);
       const amount = Payment.price * 100 * 70;
       const currency = 'LKR';
       const receipt = 'receipt';
       const notes = {desc: product.description}
       instance.orders.create({amount, currency, receipt, notes}, (error, order) => {
           if(error){
               return res.status(500).json(error);
           }
           return res.status(200).json(order)
       });


});

app.post(`/verify/razorpay-signature`, (req, res)=>{
    
    console.log(JSON.stringify(req.body));
    const crypto = require('crypto');
    const hash = crypto.createHmac('SHA256', "minoli"
    .update(JSON.stringify(req.body)))
    .digest('hex');
    console.log(hash);
    console.log(req.headers["x-razorpay-signature"]);
    if(hash === req.headers["x-razorpay-signature"]){
        //save payment information in dtabase for future reference
    }else{
        //declined the payment
    }
    res.status(200);
})

module.exports = app;