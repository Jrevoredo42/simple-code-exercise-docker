const express = require('express')

let server = express()
const PORT = 3000

server.get('/', (req, res) => {
    res.end('ola mundo!')
})
server.listen(PORT, () =>{
    console.log("Server is listening on port 3000")
})