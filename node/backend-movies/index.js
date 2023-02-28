const express = require('express'); 
const server = express()
const PORT = process.env.PORT;
const router = require("./src/api/libros/libros.routes");

require('dotenv').config();

router.get('/', (req, res) => {
    res.send('Go to <a>http://</a>');
  });

router.get('/movies', (req, res) => {
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
    res.send(movies);
  });

server.use('/', router);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
  });