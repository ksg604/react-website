import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

function Paragraph() {
  return(<p>fuck dog</p>)
}

function App() {
  const paragraph = <p>hello</p>
  return (
    <div className="App">
      <Menu/>
      <div className="Title">
        <h1>Kevin's Website</h1>
      </div>
    </div>
  );
}

export default App;
