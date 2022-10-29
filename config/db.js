import mongoose from "mongoose";

const connectDB = async () => {
   const conn = await mongoose.connect(
   "mongodb+srv://prod:iVJdOu75J4ASsv3f@clust.naobuwa.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  console.log("Host----", conn.connection.host);
};

export default connectDB;
