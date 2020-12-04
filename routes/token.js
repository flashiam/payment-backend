var express = require("express");
var router = express.Router();
const { token, tokenback, removetoken } = require("../controller/token")

router.post("/walletpayment",token)

router.get("/walletpayback",tokenback)

router.delete("/walletremove",removetoken)

module.exports = router;