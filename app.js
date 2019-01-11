// consts for setting up server instance
//DONT USE VAR
const express = require ('express'); // can also use 'let' instead. its like var but it follows order and can be changed unlike const
const app = express();
const http = require("http");
const server = http.createServer(app);

// default port is 80 -- default for http is 443
const LISTEN_PORT = 8080;

// use middleware -- server goes through this befor it is served

//telling the server to assume the public folder where all the html/js files are
app.use(express.static(__dirname + '/public'));

// create a route for accessing this page
app.get('/', function(req, res){
    res.sendFile(__diname+ 'public/index.html');
});

// now start the server
server.listen(LISTEN_PORT);
console.log('Listening to port' + LISTEN_PORT);
