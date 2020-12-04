const Token = require("../models/token")


exports.token = (req,res) => {
    const token = new Token(req.body)
    token.save((err,user)=>{
        if(err){
            return res.status(400)
        }
        res.json({
            amount:token.amount,
            token:token.token,
            orderid:token.orderid,
        })
    })
}

exports.tokenback = (req,res) => {
 
    Token.find().exec((err,token) => {
        if(err){
            return res.status(400).json({
                error:"No Token"
            });
        }
        res.json(token)
    });
}

exports.removetoken = (req,res) => {

    Token.remove((err)=>{
        if(err){
            return res.status(400).json({
                err:"Failed to delete this token"
            });
        }
        res.json({
            message:"successfully deleted"
        });
    });
}