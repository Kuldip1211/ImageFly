import mongoose from "mongoose";
const ConnectDb = async () => {
  mongoose.connection.on("connect", () => {
    console.log("Connect");
  });
  await mongoose.connect(process.env.MONGODB_URL).then(()=>{
   console.log("Connected database")
  });
};
export default ConnectDb;
