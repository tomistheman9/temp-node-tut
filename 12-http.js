const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests based on URL
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    // Handle other cases (e.g., send a 404 status code)
    res.statusCode = 404;
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back home</a>
    `);
  }
});

server.listen(5000);

// // I messed up somewhere in the code so I let Gemini write this better code above that does the same thing for me!
// const http = require('http');
// const { connected } = require('process')

// const server = http.createServer((req,res)=>{
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   }
//   if (req.url === '/about') {
//     res.end('Here is our short history')
//   }
//   res.end(`
//     <h1>Oops!</h1>
// <p>We can't seem to find the page you are looking for</p>
// <a href="/">back home</a>
//   `)
//   console.log(req)
//   res.write('Welcome to our home page')
//   res.end()

// })

// server.listen(5000)