import { postModel } from "../model/post.js"

export const createPost = (req, res) => {
    const date = new Date()
    const newPostData = {...req.body, day:date.getDate(), month:date.getMonth(), year:date.getFullYear(), hour:date.getHours(), minute:date.getMinutes()};
    const newPost = new postModel(newPostData);

    newPost.save()
        .then(result => {
            res.status(201).json({message:"publication réussie", result:result});
        })
        .catch(err => {
            res.status(500).json({err});
        })
}

export const getAllPost = (req, res) => {
    postModel.find()
        .then(postList => {
            res.status(200).json(postList)
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

export const deleteOnePost = (req, res) => {
    const id = req.params.id
    postModel.findOneAndDelete({_id:id})
        .then(() => {
            res.status(200).json({message:"Suppression réussie"})
        })
        .catch(err => {
            res.status(400).json(err)
        })
}