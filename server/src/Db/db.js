import mongoose  from "mongoose";

    const connectDB=async ()=>{
        const conncectionInstance= await mongoose.connect("mongodb://localhost:27017/login")
        console.log(`\n mongoodb conected!! DB HOST:${conncectionInstance.connection.host}`);
    }
    export default connectDB;