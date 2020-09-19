import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import FirstApp from "./FirstApp";
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={0} />, divRoot);
// ReactDOM.render(<FirstApp greeting="Hola, soy Turiano" />, divRoot);

