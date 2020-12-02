// node server.js

const http = require('http');
const fs = require('fs'); // File System functions

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

  if (request.url === '/index.html') {
    fs.readFile('public/index.html', (error, fileContent) => {
      response.setHeader('Content-Type', 'text/html'); // Response extension
      response.write(fileContent); // Response content
      response.end(); // Say to the server that response is ready to be submitted;
    });
    return;
  } else if (request.url === '/favicon.ico') {
    fs.readFile('public/favicon.ico', (error, fileContent) => {
      response.setHeader('Content-Type', 'image/x-icon'); // Response extension
      response.write(fileContent); // Response content
      response.end(); // Say to the server that response is ready to be submitted;
    });
    return;
  }else if (request.url === '/image.jpg') {
    fs.readFile('public/image.jpg', (error, fileContent) => {
      console.log(fileContent)
      response.setHeader('Content-Type', 'image/jpg'); // Response extension
      response.write(fileContent); // Response content
      response.end(); // Say to the server that response is ready to be submitted;
    });
    return;
  }else if (request.url === '/text.css') {
    fs.readFile('public/text.css', (error, fileContent) => {
      console.log(fileContent)
      response.setHeader('Content-Type', 'text/css'); // Response extension
      response.write(fileContent); // Response content
      response.end(); // Say to the server that response is ready to be submitted;
    });
    return;
  }

  serveFiles(request.url, response);

  response.end();
});


server.listen(8030, (error) => { 
  if (error) console.log(error);
  else console.log('Server is running on http://localhost:8030');
});



// create the path 
let filePath = path.join('public', req.url === '/' ? 'index.html' : req.url );

//extention of file
let extename = path.extname(filePath)

// initial content type
let contentType = 'text/html';

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