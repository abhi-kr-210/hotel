const express=require("express");
const router=express.Router();
const Person=require("../models/person.js");


router.get("/",async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched successfully");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
})
//Post route to add a person
router.post("/",async(req,res)=>{
    try{
    const data=req.body; //assuming re body contains the person data
    //create a new insatnce of the person model
    const newperson=new Person(data);
    //save the new person to the database
    const saveperson=await newperson.save();
    console.log("Person saved successfully");
    res.status(200).json(saveperson);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
})


//parametrised API Call
router.get("/:worktype",async(req,res)=>{
    try{
         const worktype=req.params.worktype;
        if(worktype=="chef"||worktype=="waiter"||worktype=="manager"){
            const data=await Person.find({work:worktype});
            console.log("data fetched successfully");
            res.status(200).json(data);
        }
        else{
            res.status(400).json({
                message: "Invalid work type"
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

//update person
router.put("/:id",async(req,res)=>{
    try{
        const personid=req.params.id;
        const data=req.body;
        const response=await Person.findByIdAndUpdate(personid,data,{
            new:true,   //return the updated document
            runValidators:true //run mongoose validaton

        })

        if(!response){
            res.status(404).json({
                message: "Invalid person id"    
            });
        }
        else{
            console.log("person updated successfully");
            res.status(200).json(response);
        }
   

    }catch(err){
        console.log(err);
       return  res.status(500).json({
            message: "Internal server error"
        });
    }
})

//delete opreation
router.delete("/:id",async(re,res)=>{
    try{
        const id=re.params.id;
        const response=await Person.findByIdAndDelete(id);
        if(!response){
           return  res.status(404).json({
                message: "Invalid person id"
            });
        }
        else{
            console.log("person deleted successfully");
            res.status(200).json(response);
        }

    }
    catch{
        console.log(err);
        res.status(500).json({message:"internal server error"});
    }
})
//testing of the project
module.exports=router