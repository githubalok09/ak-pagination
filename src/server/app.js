const http = require('http');
const axios = require('axios');
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 5000;

app.get('/api/get', function(req, res) {
  //let query = req.query.queryStr;
  let url = `https://jsonplaceholder.typicode.com/photos`;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Vary", "Origin");
  axios({
      method:'get',
      url,
      // auth: {
      //     username: 'the_username',
      //     password: 'the_password'
      // }
  })
  .then(function (response) {
      res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
  });
});


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});