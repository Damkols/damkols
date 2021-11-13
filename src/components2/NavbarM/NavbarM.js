import React from 'react';
import { Link } from 'react-router-dom';
import './navbarm.scss';
import { useState} from 'react';

const Navbar2 = () => {

    const [toggleActive, setToggleActive] = useState(false);

    const handleClick = () => {
        setToggleActive(!toggleActive);
    }


    return (
        <div className="navigation">
                <div className="nav-logo">
                    <Link to="/" className="logo">damkols.</Link>
                </div>

                <div className={`links-mobile ${toggleActive ? "active" : ""}`}>
                    <Link to="/" className="items-mobile" onClick={handleClick}>Home</Link>
                    <Link to="/work" className="items-mobile" onClick={handleClick}>Work</Link>
                    <Link to="/resume" className="items-mobile" onClick={handleClick}>Resume</Link>
                    <Link to="/contact" className="items-mobile" onClick={handleClick}>Contact</Link>
                </div>
                

                {!toggleActive && <div onClick={handleClick} className="btn-mobile">
                    <div className="btn-mobile-line"></div>
                    <div className="btn-mobile-line sm-line"></div>
                </div>}

                {toggleActive && <div onClick={handleClick} className="btn-mobile-2">
                    <div className="btn-mobile-line-2 sm-line1"></div>
                    <div className="btn-mobile-line-2 sm-line2"></div>
                </div>}
        </div>
    )
}

export default Navbar2
