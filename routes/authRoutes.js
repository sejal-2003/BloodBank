//Login and Register details
const express = require("express");
const { 
    registerController,
    loginController, 
    currentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

//Router Object 
const router = express.Router();

//routes

//REGISTER || POST
router.post("/register",registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddleware, currentUserController);

//export router
module.exports = router;