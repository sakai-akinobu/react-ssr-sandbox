import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

const app = document.getElementById('app');
const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.hydrate(<App {...initialData} />, app);
