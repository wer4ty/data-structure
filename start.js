var express = require('express');
var app = express();
var path = require('path');
 
var url = require('url'); // url parsing
var fs = require('fs'); // file system

var file, mTime;
var serverStarted = false;


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
      
      fs.stat("list.js", (error, stats) => {
      console.log('checked');
	      	  if (!serverStarted) { 
	      	  	mTime = stats.mtime;
	      	  	serverStarted = true;
	      	}
	       
		  if (mTime.getTime() != stats.mtime.getTime()) {
		    	mTime = stats.mtime; 
		    	//res.redirect('http://google.com');
		    	console.log(`${mTime} != ${stats.mtime}`);
		}
		
		res.sendFile(file); // back ansver to client
	}); 
      
});

app.listen(9000);
