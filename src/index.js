import React from "react";
import ReactDom from "react-dom";
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDom.render(<App />, document.querySelector('#root') );