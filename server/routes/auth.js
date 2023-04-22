import express from "express";
import  { signin, signup }  from "../controllers/auth.js";

const router = express.Router();


//create user
router.post("/signup",signup)
//sign in user
router.post("/signin",signin)
//google auth
router.post("/google",)

export default router;