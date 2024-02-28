require("dotenv").config(); 
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
// console.log(require('dotenv').config())
// app.listen(PORT, () => console.log("Server is running"));
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(
    MONGO_URL, 
    {
        useNewUrlParser: true,
        // useUnifiedTopology: true
    }
).then(()=>{
    app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`))
})
.catch((error) => console.log(`ERROR: ${error}`))