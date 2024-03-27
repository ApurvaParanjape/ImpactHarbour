import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
// console.log('hello')
import volunteerRoutes from './routes/volunteer.js'
import organizationRoutes from './routes/organization.js'
import postRoutes from './routes/posts.js'
dotenv.config()
const app = express()
const PORT = 5000
// console.log(require('dotenv').config())
// app.listen(PORT, () => console.log("Server is running"));

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//routes
// 1. volunteer registration and signin
app.use('/volunteers',volunteerRoutes)

//2. organization registration and signin
app.use('/organization', organizationRoutes)

//. post handling
app.use('/posts', postRoutes)

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