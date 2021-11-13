import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/img.png';

const Navbar = () => {

    return (
        <div className="side-nav">
            <div className="nav-header">
                <h1>Hello, I'm <br/> Kolapo Damola.</h1>
                <p>I am a Frontend Engineer with a passion for designing clean, accessible and intuitive web applications, and I have an eye for design with a user-driven approach to development</p>
            </div>

            <nav className="d-nav">
                <ul>
                    <li>
                        <Link to="/">
                            <a>
                                <span>00</span>  
                                <div className="btn-nav-line"></div>
                                <span>Work</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            <a> 
                                <span>01</span>
                                <div className="btn-nav-line"></div>
                                <span>Resume</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <a> 
                                <span>02</span> 
                                <div className="btn-nav-line"></div>
                                <span>Contact</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="user">
                <div className="user-img"><img src={logo} alt="" /></div>
                <ul>
                    <li>
                        <p><i class="fab fa-github"></i></p>
                        <a href="https://github.com/Damkols">Github</a>
                        <p><i class="fas fa-external-link-alt"></i></p>
                    </li>
                    <li>
                        <p><i class="fab fa-twitter"></i></p>
                        <a href="https://twitter.com/kolsCodes">Twitter</a>
                        <p><i class="fas fa-external-link-alt"></i></p>
                    </li>
                </ul>
            </div>

            <div className="inspire">
            <span>inspired by <Link to="https://kadet.dev/"><a>Collins Enebeli</a></Link></span>
            </div>
        </div>
    );
}
 
export default Navbar;