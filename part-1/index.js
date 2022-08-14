
const http=require("http")

const fs=require("fs")

const server=http.createServer((req,res)=>{

    if(req.url==="/"){
       
        res.end("<h1>Directories</h1><ul><li>Data</li><li>Src</li><li>public</li></ul>")
    }
  else if(req.url==="/public"){
   
    res.end("<h1>This is the Public directory</h1>")
  }
  else if(req.url==="/public/other"){
    res.end("<h1>You are watching content of other directory which is in the public directory</h1>")
  }
  else{
    res.writeHead(404,{"Content-type":"html"})
    res.end("<h1>OOps! something went wrong</h1>")
  }
 
})


server.listen(8000,()=>{console.log("localhost")})