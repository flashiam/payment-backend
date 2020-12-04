
const mongoose = require("mongoose")
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// My Routes
const tokenRoutes = require("./routes/token")


// Db
mongoose.connect("mongodb://localhost:27017/token",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB Connected")
})

// middlerware
app.use(bodyParser.json())

// Myroutes
app.use("/razorpay", tokenRoutes);


app.listen(5000,() => {
    console.log("Server is running on port 5000")
})