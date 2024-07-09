import express from "express"
import  Route  from "./route/user.route.js"
import path from "path"
import cookieParser from "cookie-parser";
import { checkforAthentictionCokkie } from "./middleware/auth.js";
import cors from "cors"
const app =express()
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use(express.static(path.resolve('./src/public')))
app.use("/api/users",Route)
app.use(cookieParser())
app.use(checkforAthentictionCokkie("token"))


export {app}