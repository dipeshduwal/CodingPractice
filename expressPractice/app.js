//import express then call it to initialize the app variable
const express = require("express");
const app = express();

//this action tells the browser to send a GET request to the / path of whatever server is listening at port 3000 on our localhost 

app.get("/", (req, res) => res.send("Hello, world!")); //route

const PORT = 3000; //default port choice
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));
