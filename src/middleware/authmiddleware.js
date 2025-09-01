

import jwt from "jsonwebtoken";
const verifytoken =(req,res,next)=>{
     
    let token;
    
    let authHeader = req.headers.authorization;
    console.log(authHeader);
    if(authHeader&&authHeader.startsWith("Bearer")){
        console.log("First index:"+authHeader.split(" ")[1]+"   "+"second"+authHeader.split(" ")[0]+"   "+" SPlit"+   authHeader.split(" "))
        token=authHeader.split(" ")[1]
        console.log("Token :",token);
    
     if(!token){
        return res.status(401).json({message:"No token AUthorization error"});
     }
   try {
     const decode=  jwt.verify(token,process.env.JWT_SECRET)
     req.user=decode;
     console.log("The decode user",req.user);
     next();
   } catch (error) {
       res.status(400).json({message:"Token is is not valid"});
   }}else{
     return res.status(401).json({message:"No token AUthorization error not token "});
   }

}
export default verifytoken;