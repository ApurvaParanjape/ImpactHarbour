import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import Organization from '../models/Organization.js'

export const signUp = async(req,res)=> {
    const {name, email, password, confirmPassword, address, city, description} = req.body;

    try {
        const existingOrg = await Organization.findOne({email})

        if(existingOrg) return res.status(403).json({message: "Aldready exists", existingOrg})

        if(password !== confirmPassword) return res.status(400).json({message: "password does not match"})

        const passwordHash = await bcrypt.hash(password, 12);

        const result = await Organization.create({ name, email, password: passwordHash,address, city,currentPosts: 0, description});

        const token = jwt.sign({email: result.email, id: result._id},process.env.JWT_SECRET, {expiresIn: "2h"})
        
        res.status(200).json({message: "user created successfully", result, token})

    } catch (error) {
        res.status(500).json({message: 'error in backend/controllers/organization.js', error});
    }
}

export const signIn = async(req,res) =>{
    const {name, email, password} = req.body

    try {

        const existingOrg = await Organization.findOne({email})

        if(!existingOrg) return res.status(404).json({message: "No such organization exists"})
        
        const passwordMatch = await bcrypt.compare(password, existingOrg.password) 

        if(!passwordMatch) return res.status(400).json({message: "invalid password"})

        const token = jwt.sign({email: existingOrg.email, id: existingOrg._id},process.env.JWT_SECRET, {expiresIn: "2h"})

        res.status(200).json({ result: existingOrg, token});
    } catch (error) {
        res.status(500).json({message: "error in controllers/organization/signup", error: error})
    }
}