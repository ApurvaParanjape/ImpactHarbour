import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
// console.log('hello')
import volunteerRoutes from './routes/volunteer.js'
dotenv.config()
const app = express()
const PORT = 5000
// console.log(require('dotenv').config())
// app.listen(PORT, () => console.log("Server is running"));

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//routes
app.use('/volunteers',volunteerRoutes)

const MONGO_URL = process.env.MONGO_URL
mongoose.connect(
    MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    app.listen(PORT, ()=> console.log(`Server running at port ${PORT}`))
})
.catch((error) => console.log(`ERROR: ${error}`))