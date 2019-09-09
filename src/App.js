import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';

let x = 10;
function App(){
    return(
      <div className="App">
      Hello{x};
      <Content/>
      </div>
    );
  }

export default App;
