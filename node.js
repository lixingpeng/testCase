import http from "http"
 
 
const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.write("hello the world")
    res.end()
 
})
 
server.listen(9001)