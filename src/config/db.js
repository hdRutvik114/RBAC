import mongoose from "mongoose";

export default  async  function connectiondb(cb){
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Mongo connected");
    if(cb) cb()
    }catch(err){        
          console.log(err);
          console.error(err);
          process.exit(1);
    }
}