import React, {useState} from 'react';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen)

    return (
    <div className="menu-container">
        <button onClick={handleClick}>click me</button>
        {isOpen &&
            <div className="link-container"> 
               <a className="menu-link" href="https://www.google.ca">Projects</a>
               <a className="menu-link" href="www.google.ca">Portfolio</a>
               <a className="menu-link" href="www.google.ca">Home</a>
           </div>}
    </div>
    );
}
export default Menu;