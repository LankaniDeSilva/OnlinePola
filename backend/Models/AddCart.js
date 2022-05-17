const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({

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
    },
    image:{
        type:String,
        required:true
    }
  
  
});

module.exports = mongoose.model('Cart', ImageSchema)