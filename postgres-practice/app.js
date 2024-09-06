const express = require("express");
const app = express();

app.get("/", (req, res) => 
    console.log("usernames will be logged here - wip"));

app.get("/new", (req,res,next) =>
    res.send);

app.post("/new", (req,res) => 
    console.log("username to be saved:", req.body.username));

const PORT = 3000;
app.listen(PORT, () => console.log(`My first express app- listening on port ${PORT}!`));