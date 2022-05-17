const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quentity:{
        type:String,
        required:true
    }
   
  
  
});

module.exports = mongoose.model('CartItem', CartSchema)