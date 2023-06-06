import mongoose from "mongoose";

   //     await mongoose.connect(process.env.MONGO) 
   //  } catch (error) {  
   //     throw new Error ('connection failed')  
   //  }
   const connectDB = async () => mongoose.connect("mongodb+srv://lama:lama123@cluster0.qop7g9u.mongodb.net/next_test?retryWrites=true&w=majority")

export default connectDB;