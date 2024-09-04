const http = require("http");
const url = require("url");
const fs = require("fs");

//reading a page404 file

const page404 = fs.readFileSync("404.html", "utf-8",(err,data)=>{
    if (err) throw err;
    return data;
})

http.createServer(function(req,res){
    const q = url.parse(req.url, true);
    let filename = "";
    if (q.pathname === "/"){
        filename = "." + "/index.html";
    } else {
        filename = "." + q.pathname;
    }
    
})

