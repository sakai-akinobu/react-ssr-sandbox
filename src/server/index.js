import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send({});
});

const PORT = 3000;
server.listen(PORT);
