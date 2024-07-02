const mongoose=require('mongoose')

//Define the mongodb connection url
const mongoURL="mongodb://localhost:27017/hostels" //you can repace it with your own mongodb name

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//get the default connection
//mongoose maimtains a default connection onject representing the mongodb connection
const db=mongoose.connection
//define event listners for the database connection
db.on('connected',()=>{
    console.log(" connected to mongodb server successfully")
})
db.on('error',(err)=>{
    console.log("failed to connect to mongodb server",err)
})
db.on('disconnected',()=>{
    console.log("disconnected from mongodb server")
})


module.exports=db
