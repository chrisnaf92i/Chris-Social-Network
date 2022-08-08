import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId:{
        type:"String",
        required:true,
    },
    content:{
        type:"String",
        required:true
    },
    day:{
        type:"Number",
        require:true
    },
    month:{
        type:"Number",
        required:true
    },
    year:{
        type:"Number",
        required:true
    },
    hour:{
        type:"Number",
        required:true
    },
    minute:{
        type:"Number",
        required:true
    }
});

export const postModel = mongoose.model("post", postSchema);