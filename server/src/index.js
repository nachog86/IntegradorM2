const http = require('http');
const PORT = 3001;
// const DATA = require('./utils/data'); 
const getCharById = require('./controllers/getCharById');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if( req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop();
        // const character = DATA.find(character => {
        //     return character.id === +(id)});
        //     res.writeHead(200, {
        //         'Content-Type': 'application/json'                
        //     }); res.end(JSON.stringify(character));
        getCharById(res,+id);
    };
    
}).listen(PORT, "localhost")

