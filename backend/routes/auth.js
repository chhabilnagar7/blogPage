import express from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const router = express.Router();

// for signup
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check  user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ name, email, password: hashPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({ message: "User created successfully", token });

    } catch (err) {
        res.status(500).json({ error: err.message || "Error" });
    }
});

// for login
router.post('/login',async(req,res)=>{
    const{email,password} = req.body;

    try{
        // check user exist or not 
        const user = await User.findOne({email})
        if(!user) 
            return res.status(404).json({message:"User not registerd! Please Signup"})

        // check if password match
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect)
            return res.status(400).json({message:"Incorrect password"})

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"30d"})

        res.status(200).json({user:{token,id:user._id,name:user.name,email:user.email}})

    }catch(err){
        res.status(500).json({error:err.message})
    }
})

// for logout 
router.post('/logout', async (req,res)=>{
    try{
        res.status(200).json({message:"Logout successfully"})
    }catch(err){

        res.status(200).json({message:"Error"})
    }
})

export default router