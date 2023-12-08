const express = require("express")
const { testController } = require("../controllers/testController")

//router object
//store routing functionality
const router = express.Router();

//routes
//creating router
//testController is a callback function 
router.get('/', testController)

//export
module.exports = router ;