import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:"String",
        require:true
    },
    email:{
        type:"String",
        require:true
    },
    password:{
        type:"String",
        require:true
    }
})

const userModel = mongoose.model("user", userSchema);

export default userModel