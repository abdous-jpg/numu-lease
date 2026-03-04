const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/numulease")
.then(() => console.log("MongoDB connecté"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("API NUMU LEASE fonctionne");
});

app.listen(5000, () => {
    console.log("Serveur lancé sur port 5000");
});

const Property = require("./models/Property");

app.post("/properties", async (req, res) => {
    const property = new Property(req.body);
    await property.save();
    res.json(property);
});

app.get("/properties", async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});