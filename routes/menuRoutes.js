const express=require("express");
const router=express.Router();
const Menu=require("../models/menu.js");



router.get("/",async(req,res)=>{
    try{
    const data=await Menu.find();
    console.log("data fetched successfully");
    res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
   
})
//Post route to add a menu
router.post("/",async(req,res)=>{
    try{
    const data=req.body; //assuming re body contains the menu data
    //create a new insatnce of the menu model
    const newmenu=new Menu(data);
    //save the new menu to the database
    const savemenu=await newmenu.save();
    console.log("menu saved successfully");
    res.status(200).json(savemenu);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
   
})
//parametrised routes for tastes menu
router.get("/:taste",async(req,res)=>{
    try{
         const taste=req.params.taste;
        if(taste=="sweet"||taste=="spicy"||taste=="sour"){
            const data=await Menu.find({taste:taste});
            console.log("data fetched successfully");
            res.status(200).json(data);
        }
        else{
            res.status(400).json({
                message: "Invalid taste"
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }

})


module.exports=router