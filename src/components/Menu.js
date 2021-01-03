import React, {useState} from 'react';

function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    console.log(props.onNavigation);

    return (
    <div className="menu-container">
        <button onClick={handleClick}>click me</button>
        {isOpen &&
            <div className="link-container"> 
                <a className="menu-link" onClick={() => props.onNavigation("about")}>About Me</a>
                <a className="menu-link" onClick={() => props.onNavigation("projects")}>Projects</a>
                <a className="menu-link" onClick={() => props.onNavigation("portfolio")}>Portfolio</a>
           </div>
        }
    </div>
    );
}
export default Menu;