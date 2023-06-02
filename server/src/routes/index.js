const router = requiere('express').Router();
const getCharById = require('./controllers/getCharById');
const login = require('./controllers/login');
const {postFav, deleteFav} = require('./controllers/handleFavorites');

router.get('/character');
router.get('/')