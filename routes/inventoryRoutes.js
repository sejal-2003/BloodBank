// require express
const express = require("express");
const {
    createInventoryController,
    getInventoryController 
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//ADD INVENTORY || POST
router.post('/create-inventory', authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddleware, getInventoryController)


//export
module.exports = router

