// const axios = require('axios');
// const getCharById = (res,id) => {axios.get(`https://rickandmortyapi.com/api/character/${id}`)
// .then((response) => {
//   const { data } = response;
//   const { name, gender, species, origin, image, status } = data;
//   const character = { id, name, gender, species, origin, image, status };
//         res.writeHead(200, {
//             'Content-Type': 'application/json'
//         })
//         res.end(JSON.stringify(character));
//     }).catch((error) => {
//         res.writeHead(500, {
//             'Content-Type': 'text/plain'
            
//         })
//         res.end(error.message);
//     })
// };
// module.exports = getCharById;


const url = "https://rickandmortyapi.com/api/character/";
const getCharById = (res, id) => {
    const {id} = req.params;
    axios(url + id)
    .then(({data}) => {
        const {name, gender, species, origin, image, status} = data;
        const character = {id, name, gender, species, origin, image, status};
        return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Character not found");
    })
    .catch((error) => {
        res.status(500).send(error.message);
    })
}
   
module.exports = getCharById