const express = require("express");
const app = express();

app.get("/", (req, res) => 
    console.log("usernames will be logged here - wip"));

app.get("/new", (req,res) =>
    res.send(`
    <html>
      <head><title>Username Form</title></head>
      <body>
        <h1>Enter Username</h1>
        <form action="/submit" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `));

app.post("/new", (req,res) => 
    console.log("username to be saved:", req.body.username));

const PORT = 3000;
app.listen(PORT, () => console.log(`My first express app- listening on port ${PORT}!`));