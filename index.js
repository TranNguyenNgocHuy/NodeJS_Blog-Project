const fs = require('fs')
const http = require('http')
const url = require('url')
const slugify = require('slugify')

const replateTemplate = require('./module/replaceTemplate')

const templateHomePage = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const templateProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')
const templateCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname} = url.parse(req.url, true);

  // Home page
  if (pathname === '/' || pathname === '/home-page') {
    const cardsHtml = dataObj.map(element => replateTemplate(templateCard, element)).join('');
    const homePageHtml = templateHomePage.replace('{%PRODUCT_CARD%}', cardsHtml);

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(homePageHtml)

  // Product page  
  } else if (pathname === '/product') {
    const product = dataObj[query.id];
    const productPageHtml = replateTemplate(templateProduct, product)

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(productPageHtml)

  //API  
  } else if (pathname === '/api') {
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