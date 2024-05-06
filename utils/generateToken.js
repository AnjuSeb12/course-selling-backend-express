const jsonwebtoken=require("jsonwebtoken")
require("dotenv").config();

const secretKey=process.env.SE;

const generateToken=(email)=>{
    return jsonwebtoken.sign({data:email},secretKey,{expiresIn:"Id"});

};

module.exports=generateToken;