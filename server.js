
const  express=require("express");

const app=express();
require('dotenv').config();
const db=require("./db.js");
const Person=require("./models/person.js");
const Menu=require("./models/menu.js");

const bodyparser=require("body-parser");
app.use(bodyparser.json()); //store object into req.body
const PORT=process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send("hello");
})
const PersonRoutes=require("./routes/personRoutes.js");
app.use("/person",PersonRoutes);
const menuRoutes=require("./routes/menuRoutes.js");

app.use("/menu",menuRoutes);
app.listen(PORT,()=>{
    console.log("server is running");
});



















// const jsonstringi = '{"name":"abhish","age":18,"city":"delhi"}';
// const jsonobject = JSON.parse(jsonstringi);
// console.log(jsonobject);

// const notes=require("./notes.js");
// var _=require("lodash");
// const age=notes.age;

// console.log(age);
// var result=notes.addnumber(age+10,20);
// console.log(result);  
// var data=["ram",1,2,3,1,1,12,3,4,44,"hri",'age'];
// var filter=_.uniq(data);
// console.log(filter);
//_.isString(1);check for string
// let fs=require("fs");
// let os=require("os");

// let user=os.userInfo();

// console.log(user);

// fs.appendFile("gretting.txt","hello"+user.username+'\n',()=>{
//     console.log("file created");
// })





//  function callback(){
//     console.log("callback function");
//  }

//  let add=function(a,b,callback){
//     let sum=a+b;
//     console.log("sum is",sum);
//     callback();
//  }

//  add(4,1,function(){
//     console.log("callback function");
//  });
// add(4,1,()=>{
//     console.log("callback function");
// })
