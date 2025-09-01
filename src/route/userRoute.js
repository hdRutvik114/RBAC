import express from "express"
import verifytoken from "../middleware/authmiddleware.js";
import verifyrole from "../middleware/rolebasedmiddleware.js";
import user from "../model/schema.js";
const router=express.Router();




router.get("/admin",verifytoken,verifyrole("admin"), (req,res)=>{
    res.send("Hello iam admin")
})

router.get("/manager",verifytoken,verifyrole("manager","admin"),(req,res)=>{
    res.send("Hello iam manager");
})

router.get("/user",verifytoken,verifyrole("manager","user","admin"),(req,res)=>{
    res.send("Hello iam user");
})

export default router;