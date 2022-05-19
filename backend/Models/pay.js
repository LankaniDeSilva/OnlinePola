const mongoose = require('mongoose');

const paySchema = new mongoose.Schema({
    
    cardnumber:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    cvc:{
        type:String,
        required:true
    },
    holder:{
        type:String,
        required:true
    }
  
  
});

module.exports = mongoose.model('Pay', paySchema)