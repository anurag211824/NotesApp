import express from "express"
import { signUp,signin,signout } from "../controller/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router=express.Router();

router.post("/signup",signUp)
router.post("/signin",signin)
router.get("/signout",verifyToken,signout)


export default router