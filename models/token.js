const mongoose = require("mongoose");

var tokenSchema = new mongoose.Schema({
    amount:
    {
        type:String,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    orderid:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Token",tokenSchema)