import dotenv from "dotenv";
import connectDB from "./config/db";
import app from "./app";
dotenv.config({path : './.env'})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`${process.env.PORT}`)
    })
}).catch((error) => {
console.log(`server connection field : ${error}`)
})