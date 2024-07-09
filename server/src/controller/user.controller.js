import { User } from "../Model/user.model.js";

const loginController=async (req,res)=>{
    const {email,password}=req.body;
    // console.log(req.body);
    try {
      
    // console.log(email,password);
    const token=await User.matchPasswordAndGentatetoken(email,password);
    // console.log("token",token);

    return res.status(200).cookie("token",token).json({message:"user logdin sucessfully",token})
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"email and password are incorect "})
    
    }
}

const singinController=async (req,res)=>{
   try {
     const {name,email,password,dob}=req.body;
     console.log(req.body);
     if (!name || !email || !dob || !password) {
        return res.status(400).json({ error: "All fields are required." });
      }
     const user=await User.create({
         name,
         email,
         password,
         dob
     })
     console.log(user);
     res.status(200).json({message:"user created sucesfully"})
   } catch (error) {
    console.log(error);
   }
}
const allusercontroller=async (req,res)=>{
    try {
        const alluser=await User.find({})
        res.status(200).json({alluser})
    } catch (error) {
        console.log(error);
    }
}
export {loginController,singinController,allusercontroller}