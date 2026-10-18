const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const publicFiles = {'/':'index.html','/index.html':'index.html','/style.css':'style.css','/game.js':'game.js'};
http.createServer((req,res)=>{const file=publicFiles[new URL(req.url,'http://localhost').pathname]; if(!file){res.writeHead(404);return res.end('Not found');} res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html');fs.createReadStream(path.join(__dirname,file)).pipe(res);}).listen(process.env.PORT || 3000,'0.0.0.0',()=>console.log('Pocket Paws running on port '+(process.env.PORT || 3000)));
