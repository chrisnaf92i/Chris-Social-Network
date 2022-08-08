import express from "express";
import router from "./router/router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

mongoose.connect(process.env.MONGOOSE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("Connexion à mongodb réussie"))
    .catch(() => console.log("Connexion à mongodb échoué"));
app.use(express.json());

app.use(express.static("view/build"));

app.use(router);

app.listen(port, () => console.log(`Lancement du serveur sur le port ${port}`));