import express from "express";
import dotenv from "dotenv"
import connectiondb from "./src/config/db.js"
import router from "./src/route/authRoutes.js";
import userroute from "./src/route/userRoute.js"
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.use("/api/auth", router);
app.use("/api/check",userroute);
// Start server
connectiondb(   
  ()=>  
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:PORT`);
    })

);