import express from "express";
import { getAllUser, getOneUser, login, signIn } from "../controller/auth.js";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import { createPost, deleteOnePost, getAllPost } from "../controller/post.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/api", (req, res) => {
    res.send("bienvenu sur l'api de christopher nafrere");
})

//création du système d'utilisateur
router.get("/api/user", getAllUser);
router.get("/api/user/:id", getOneUser);
router.post("/api/signin", signIn);
router.post("/api/login", login);

// système de création de post
router.post("/api/post", createPost);
router.get("/api/post", getAllPost);
router.delete("/api/post/:id", deleteOnePost);

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/build/index.html"));
})

export default router;