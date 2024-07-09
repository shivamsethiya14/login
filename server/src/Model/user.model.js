import mongoose, { Schema,Mongoose } from "mongoose";
import {createHmac,randomBytes} from "node:crypto"
import { createTokenForuser } from "../utils/auth.js";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:String,
        required:true
    },
    salt:{
        type:String
    },
    proflieImageUrl:{
            type:String,
        default:"/Images/defaultImage.jpeg"
    },
    password:{
        type:String,
        required:true,
        default:"NORMAL"
    }
},{timestamps:true})
userSchema.pre('save',function(next){
    const user=this;
    if(!user.isModified('password')) return;

    const salt =randomBytes(16).toString();
    const hashedPassword=createHmac('sha256',salt).update(user.password).digest("hex");

    this.salt=salt;
    this.password=hashedPassword;
    next();
})
userSchema.static('matchPasswordAndGentatetoken', async function(email,password){
    const user= await User.findOne({email})
    // console.log(user);
    if(!user) throw new Error('user not Found')

    const salt=user.salt;
    const hashedPassword=user.password;

    const userProvidedPassword=createHmac('sha256',salt).update(password).digest("hex");
    
    if(hashedPassword!==userProvidedPassword)   throw new Error('Incorrect Password');

    const token =createTokenForuser(user);

    return token;
})


export const User=mongoose.model("User",userSchema);