import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

var express = require("express");
var server = express();
var options = {
  index: "index.html",
};
server.use("/", express.static("/home/site/wwwroot", options));
server.listen(3000);


const root = document.getElementById('app');

ReactDOM.render(<App />, root);
