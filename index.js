const fs = require('fs')
const http = require('http')
const url = require('url')

///////////////////////////////////////////////////////////////
// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const partName = req.url;

  if (partName === '/' || partName === '/home-page') {
    res.end("Welcome home page")
  } else if (partName === '/product') {
    res.end("Product page")
  } else if (partName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'message': "Page Not Found"
    })
    res.end('<h1>Page not found</h1>')
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('listening to request on port 8000');
})




///////////////////////////////////////////////////////////////
// FILE

// const textIn = fs.readFileSync('./txt/read-this.txt', 'utf-8');
// console.log(textIn);
// const textOut = `hello: ${textIn}. \n abcxyz`;
// fs.writeFileSync('./txt/tranhuy.txt', textOut)

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data);
//   fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data1) => {
//     console.log(data1);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data2) => {
//       console.log(data2);

//       fs.writeFile('./txt/final.txt', 'Huy thêm vô lần 1', (err) => {
//         console.log(fs.readFileSync('./txt/final.txt', 'utf-8') + " oke done");
//       })
//     })
//   })
// })
// console.log('hello');