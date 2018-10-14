import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from '../components/Html';
import App from '../components/App';

const initialData = {
  counter: 10,
};

const server = express();

server.get('/', (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <Html initialData={initialData}>
      <App {...initialData} />
    </Html>
  ).pipe(res);
});

server.use(express.static('public'));

const PORT = 3000;
server.listen(PORT);
