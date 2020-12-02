// node server.js

const http = require('http');
const fs = require('fs'); // File System functions
const path = require('path');

/*
 * .html => text/html
 * .jpeg => image/jpeg
 * .ico => image/x-icon
 * .css => text/css
 * .js => text/javascript
 */

function serveFiles(url, response) {
  // url one of: "/index.html", "/styles/main.css", "/scripts/app.js" 

  // TODO:
  // 1. Read file from ./public/ directory (readFile)
  // 2. Set Content-Type depending on file extension (setHeader)
  // 3. Write the content of the file (write)
  // 4. End the response (end)
}

const server = http.createServer((request, response) => {

  // if (request.url === '/index.html') {
  //   fs.readFile('public/index.html', (error, fileContent) => {
  //     response.setHeader('Content-Type', 'text/html'); // Response extension
  //     response.write(fileContent); // Response content
  //     response.end(); // Say to the server that response is ready to be submitted;
  //   });
  //   return;
  // } else if (request.url === '/favicon.ico') {
  //   fs.readFile('public/favicon.ico', (error, fileContent) => {
  //     response.setHeader('Content-Type', 'image/x-icon'); // Response extension
  //     response.write(fileContent); // Response content
  //     response.end(); // Say to the server that response is ready to be submitted;
  //   });
  //   return;
  // }else if (request.url === '/image.jpg') {
  //   fs.readFile('public/image.jpg', (error, fileContent) => {
  //     console.log(fileContent)
  //     response.setHeader('Content-Type', 'image/jpg'); // Response extension
  //     response.write(fileContent); // Response content
  //     response.end(); // Say to the server that response is ready to be submitted;
  //   });
  //   return;
  // }else if (request.url === '/text.css') {
  //   fs.readFile('public/text.css', (error, fileContent) => {
  //     console.log(fileContent)
  //     response.setHeader('Content-Type', 'text/css'); // Response extension
  //     response.write(fileContent); // Response content
  //     response.end(); // Say to the server that response is ready to be submitted;
  //   });
  //   return;
  // }

  // serveFiles(request.url, response);

  // response.end();

// create file path 
   let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url );
  
  //extention of file
   let extname = path.extname(filePath)

  // initial content type
     let contentType = 'index/html';

  //check extention and set content type
    switch (extname) {  
    case '.js':
    contentType = 'text/javascript';
    break;
    case '.html':
    contentType = 'text/html';
    break;
    case '.css':
    contentType = 'text/css';
    break;
    case '.jpg':
    contentType = 'image/jpg';
    break;
    case '.ico':
    contentType = 'image/x-icon';
    break;

 }

 // Read File
 fs.readFile(filePath, (err, content) => {
if(err) {
  if(err.code == 'ENOENT'){
    //Page not found
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
    response.writeHead(200, {'Content-Type': 'index/html'});
    response.end(content, 'utf8');
    } )
  }else{
    // Some server error
    response.writeHead(500);
    response.end(`Server Error: ${err.code}`);

  }
   }else{
    //Success
     response.writeHead(200, {'Content-Type': contentType});
     response.end(content, 'utf8');
}

 })


});


server.listen(8030, (error) => { 
  if (error) console.log(error);
  else console.log('Server is running on http://localhost:8030');
});



