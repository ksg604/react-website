import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import {useState} from 'react';

function App() {
  const displayComponent = (<div></div>);
  const [currentPage, setCurrentPage] = useState("home");
  const onNavigation = (page) => { 
    
    console.log(page);
    setCurrentPage(page) };

  const getCurrentPage = () => {
    switch (currentPage) { 
      case "home":
        return <Home/>
      case "project":
        return <div>Project</div>
      case "portfolio":
        return <div>Portfolio</div>
      }
    } 

  return (
    <div className="App">
      <Menu onNavigation={onNavigation} />
      <div className="Title">
        <h1>Kevin's Website</h1>
        {getCurrentPage()}
      </div>
    </div>
  );
}

export default App;
