import userModel from "../model/user.js"
import bcrypt from "bcrypt"

export const  getAllUser = (req, res) => {
    userModel.find()
        .then((users) => {
            res.status(200).json({users});
        })
        .catch(err => {
            res.status(500).json({err});
        })
}
export const getOneUser = (req, res) => {
    const id = req.params.id
    userModel.findOne({_id:id})
        .then((user) => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({err});
        })
}
export const signIn = (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const newUser = new userModel({...req.body, password:hash })
            newUser.save()
                .then((userCreated) => {
                    res.status(201).json({message:"Inscription réussite", result:userCreated});
                })
                .catch(err => {
                    res.status(400).json({err})
                })
        })
        .catch(err => {
            res.status(500).json({ err })
        })


    
    
}

export const  login = (req, res) => {
    userModel.findOne({email:req.body.email})
        .then(user => {
            if(!user){
                return res.status(401).json({message:"email ou mot de passe incorrects"})
            }

            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({message:"email ou mot de passe incorrects"})
                    }

                    res.status(200).json({
                        userId: user._id,
                        token:"TOKEN"
                    })
                })
                .catch(err => {
                    res.status(500).json({err});
                })
        })
        .catch(err => {
            res.status(500).json({err})
        })
}