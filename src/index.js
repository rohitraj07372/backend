
// require ('dotenv').config

import dotenv from 'dotenv'

import connectDB from "./db/index.js";

dotenv.configDotenv({ path: './env' })


connectDB();
.then(()=>{
app.listen(process.env.PORT || 8000, ()=>{
   console.log(`server is running at port ${process.env.PORT}`)
} )
})
.catch((err)=>{
Console.log("Error in DB connection", err);
})






/*

 ;( async ()=>{
try{
 mongoose.connect(`${porxess.env.MONGODB_URI}/${DB_NAME}`)
 app.on("error",(error)=>{
    console.log("error", error)
    throw error
 })
 app.listen(process.env.PORT, ()=>{
    console.log(`app is listining at port ${process.env.PORT}`)
 })
}
catch(err){
    console.log('Error ', err);
    throw err;
}
 })()

 */