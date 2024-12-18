import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ragistration
const ragisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name || email || password) {
      return res.json({ sucess: false, massage: "Missing DEtails" });
    }

    // password hash
    const hashpassword = await bcrypt.hash(password, process.env.PASSWORD_HASH);

    const userData = {
      name,
      email,
      password: hashpassword,
    };

    const newUSer = new userModel(userData);
    const user = await newUSer.save();

    const token = jwt.sign({ id: user_id }, process.env.JWTSECRET);

    res.json({
      sucess: true,
      token,
      user: {
        name: user.name,
      },
    });
  } catch (Error) {
    console.log(Error);
  }
};
// ens ragistration


// login user
const loginUSer = async (req,res) => {
 try{
  const {email, password} = req.body
  const user = await userModel.findOne({email})

  if(!user){
   res.json("User DOes Not Exit!!")
  }

  const isMatch = await bcrypt.compare(password,user.password)

  if(isMatch){
   const token = jwt.sign({ id: user_id }, process.env.JWTSECRET);
   res.json({
    sucess : true,token,user : {name : user.name}
   })
  }
 }catch(err){
  console.log(err);
 }
} 
// end login user
