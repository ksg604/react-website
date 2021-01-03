import React from 'react';
import {useState} from 'react';

import Menu from './Menu';
import About from './About';


function Home() {

    const [currentPage, setCurrentPage] = useState("home");
    const onNavigation = (page) => { 
      console.log(page);
      setCurrentPage(page);
    };
  
    const getCurrentPage = () => {
      switch (currentPage) { 
        case "about":
          return <About/>
        case "projects":
          return <div>Projects</div>
        case "portfolio":
          return <div>Portfolio</div>
      }
    } 

    return (<div className="home"><Menu onNavigation={onNavigation} />
    <div className="Title">
      <h1>Kevin's Website</h1>
      {getCurrentPage()}
    </div></div>);
}

export default Home;