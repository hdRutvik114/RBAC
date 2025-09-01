import user from "../model/schema.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
   try {

      const { username, password, role } = req.body;
      const hashedpassword = await bcrypt.hash(password, 10);

      const user1 = await user.create({ username, password: hashedpassword, role });

      res.status(200).json({ message: "New user got inserted " });
   } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
   }

}



export const login = async (req, res) => {
   const { username, password } = req.body;
   console.log(username);
   try {
      const user2 = await user.findOne({ username });
      if (!user2) {
         return res.status(404).json({ message: `User with user name  ${username} not found` });
      }

      const isMatch = await bcrypt.compare(password, user2.password);
      if (!isMatch) {
         return res.status(400).json({message:"invalid credential"});
      }

      const token = jwt.sign(
         { id: user2._id, role: user2.role },
          process.env.JWT_SECRET,
           { expiresIn:"1h" }//expiresIn
         );
         res.status(200).json(token);


   } catch (error) {
      console.log(error);
      res
         .status(500)

         .json({ message: "Something went wrong" });
   }

}