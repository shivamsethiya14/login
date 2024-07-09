import { Router } from "express";
import { loginController,singinController,allusercontroller } from "../controller/user.controller.js";
const Route=Router();
Route.post("/sigin",singinController)
Route.post("/login",loginController)
Route.get("/",allusercontroller)
export default Route