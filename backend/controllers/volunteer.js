import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import Volunteer from '../models/Volunteer.js'

export const signUp = async(req,res) =>{
    const {name, email, password, confirmPassword, age, city, aadharCard, image, phone} = req.body;

    try {

        const existingVolunteer = await Volunteer.findOne({email})

        if(existingVolunteer) return res.status(403).json({message: "Aldready exists"})

        if(password !== confirmPassword) return res.status(400).json({message: "password does not match"})

        const passwordHash = await bcrypt.hash(password, 12);

        const result = await Volunteer.create({ name, email, password: passwordHash, age, city, aadharCard, image, phone});

        const token = jwt.sign({email: result.email, id: result._id},process.env.JWT_SECRET, {expiresIn: "2h"})
        
        res.status(200).json({message: "user created successfully", result})
    } catch (error) {
        res.status(500).json({message: "error in controllers/volunteer/signup", error: error})
    }
}


export const signIn = async(req,res) =>{
    const {email, password} = req.body

    try {

        const existingVolunteer = await Volunteer.findOne({email})

        if(!existingVolunteer) return res.status(404).json({message: "No such volunteer exists"})
        
        const passwordMatch = await bcrypt.compare(password, existingVolunteer.password) 

        if(!passwordMatch) return res.status(400).json({message: "invalid password"})

        const token = jwt.sign({email: existingVolunteer.email, id: existingVolunteer._id},process.env.JWT_SECRET, {expiresIn: "2h"})

        res.status(200).json({ result: existingVolunteer, token});
    } catch (error) {
        res.status(500).json({message: "error in controllers/volunteer/signup", error: error})
    }
}