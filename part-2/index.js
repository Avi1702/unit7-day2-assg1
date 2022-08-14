
const http=require("http")

const fs=require("fs")

const server=http.createServer((req,res)=>{

    if(req.url==="/"){
        // res.end("localhost 3000 naamak server create hogaya bhoii!")
        const data=fs.readFileSync("directory.html")
        // console.log(data,"utf8")
        res.write(data)
        res.end()
    }
  else if(req.url==="/public"){
    // res.end("<h1>you are on public page</h1>")
    const data=fs.readFileSync("public.html")
    res.write(data)
    res.end()
  }
  else if(req.url==="/src"){
    // res.end("<h1>you are on public page</h1>")
    const data=fs.readFileSync("src.js")
    res.write(data)
    res.end()
  }
  else if(req.url==="/data"){
    // res.end("<h1>you are on public page</h1>")
    const data=fs.readFileSync("data.html")
    res.write(data)
    res.end()
  }
  else if(req.url==="/public/other"){
    res.end("<h1>You are watching content of other directory which is in the public directory</h1>")
  }
  else{
    res.writeHead(404,{"Content-type":"html"})
    res.end("<h1>OOps! something went wrong</h1>")
  }
 
})


server.listen(3000,()=>{console.log("localhost")})