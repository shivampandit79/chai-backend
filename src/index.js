// require('dotenv').config({path: './db'})
import {app} from "./app.js"

import dotenv from "dotenv"


import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Database Connected Sucessfully Your code is awasome and your runing PORT is ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Database connection field Please Check Your Network backend")
})
















