// 

import connectDB from "./Db/db.js"
import { app } from "./app.js";


connectDB()
.then(()=>{
    app.listen( 8000,()=>{
        console.log(`sever is running at port:8000`);
    })
})
.catch((err)=>{
    console.log("mongoo db connection failed!!!",err);
    console.log(' rs');
})