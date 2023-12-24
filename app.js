const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDB = "mongodb://localhost:27017/SanviMedicalStore";

mongoose.connect(mongoDB, (err)=> {
   if(err) console.log(`Unable to connect to the server : ${err}`)
   else console.log("MongoDB is Connected");
})

app.listen(5000,()=>{
   console.log("Server is running on port : 5000")
})