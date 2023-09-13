const http = require('http');
const PORT = 3000;
const cheerio = require("cheerio");
const axios = require("axios");


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

axios.get("https://arstechnica.com/gadgets/").then(urlResponse =>{
    const $ = cheerio.load(urlResponse.data);
   
 $('li.article').each((i, element)=>{
    const link = $(element).find("a.overlay").attr("href");

console.log(link);

});
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
