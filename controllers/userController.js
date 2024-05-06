const bcrypt=require('bcrypt');
const generateToken=require("../utils/generateToken");
const User = require('../models/userModel');


const signup= async (req,res)=>{
    console.log(req.body)
    const {firstName,lastName,password,email}=req.body;
    const userExist=await User.find({email});
    if(userExist){
        return res.send("user already exist")
    }

    const saltRounds=10;
    const hashPassword= await bcrypt.hash(password,saltRounds);

    const newUser = new User({
        email,
        firstName,
        lastName,
        hashPassword
    });
   
    const newUserCreated= await newUser.save();
    console.log(newUserCreated)
    if(!newUser){
        return res.send("user not created")
    }
    const token=generateToken(email);
    
    res.send("token")




};
const signin=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email})
        console.log(user)
        if(!user){
            return res.send("user not exist");

        }
        const matchPassword= await bcrypt.compare(password,user.hashPassword)
        if(!matchPassword){
            return res.send("invalid")
        }

        const token=generateToken(email)
        res.send(token)
    } catch (error) {
        console.log(error)
        
    }
}
module.exports={
    signin,
    signup
}
