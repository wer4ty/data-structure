var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
 
var url = require('url'); // url parsing
var fs = require('fs'); // file system

var file;
var serverStarted = false;

var server = app.listen(9000, () => {
  console.log('Connection on')
});



const io = require('socket.io').listen(server)
io.on('connection', (client) => {
    console.log("Socket connection is ON!");
});


function checkFile() {
fs.stat("list.js", (error, stats) => {
	      if (!serverStarted) { 
	      	  	mTime = stats.mtime;
	      	  	serverStarted = true;
	      }
	       
		  if (mTime.getTime() != stats.mtime.getTime()) {
		    	mTime = stats.mtime;
		    	io.emit('update', { refresh: true });   	
		  }      
	}); 
}

setInterval(checkFile, 1000);


function fullUrl(req) {
  return url.format({
    //protocol: req.protocol,
    //host: req.get('host'),
    pathname: req.originalUrl
  });
}


// viewed at http://localhost:9000
app.get('/*', function(req, res) {
    let url_in =  fullUrl(req);
    file = path.join(__dirname + '/'+url_in);
      
      res.sendFile(file); // back ansver to client
});


