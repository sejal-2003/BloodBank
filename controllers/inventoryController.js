const mongoose = require("mongoose");
const inventoryModel = require("../Models/inventoryModel");
const userModel = require("../Models/userModel");

//create inventory
const createInventoryController = async (req,res) => {
    try {
        const { email } = req.body;

        //Log request data
        console.log("Request Data:", req.body);

        //validation
        //Find User
        const user = await userModel.findOne({email});
        if (!user) {
          return res.status(404).json({
            success:false,
            message: "User Not Found",
            email: email,
          });
        }
         //if ( inventoryType === "in" && user.role !== "donar") {
          // throw new Error("Not a donar account");
         //}
         //if (inventoryType === "out" && user.role !== "hospital") {
           //throw new Error("Not a hospital");
         //}    
         //Save Record
        const inventory = new inventoryModel(req.body);
         await inventory.save();
         return res.status(201).send({
           success: true,
           message: "New Blood Record Added",
         }); 
    } catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error In Create Inventory API",
            error 
        })
    }
};

//GET ALL BLOOD RECORDS
const getInventoryController = async (req,res) => {
  try{
    //function call krenge await m  
    const inventory = await inventoryModel
    .find({
      organisation:req.body.userId,
    }).populate("donar")
      .populate("hospital")
      .sort({createdAt: -1})//so that last record will appear on top  
    return res.status(200).send({
      success:true,
      message:"get all records successfully",
      inventory,
    })
  }catch(error){
    console.log(error)
    return res.status(500).send({
      success:false,
      message:"Error in Get All Inventory",
      error
    })
  }
};
//export
module.exports = { createInventoryController, getInventoryController };