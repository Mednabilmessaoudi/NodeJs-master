// Creating Server
const http = require('http');

const server = http.createServer(function(request,response){
    response.write('<h1>we are starting our first server</h1>');
    response.end();
})

server.listen(5000,error =>{
    error? console.log(error):console.log('Server is running.. http://localhost:5000');;
})

