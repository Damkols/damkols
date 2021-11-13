import { Link } from 'react-router-dom';
import img from '../assets/img.png';
import './home.scss';

const Home = () => {
    return (
        <div className="content">
            <div className="home">
                <div className="userImg"><img src={img}  alt="" /></div>
                <h1>Hello, I'm Kolapo Damola.</h1>
                <p>I am a Frontend Engineer with a passion for designing clean, accessible and intuitive web applications, and I have an eye for design with a user-driven approach to development.</p>
                
                <Link to="/work">
                    <a>
                        <div className="explore">
                            <p>Explore</p>
                            <span><i class="fas fa-caret-right"></i></span>
                        </div>
                    </a>
                </Link>
            </div>

            <footer>
                    <div className="socials">
                            <a href="https://github.com/Damkols"><i class="fab fa-github-square"></i></a>
                            <a href="https://twitter.com/kolsCodes"><i class="fab fa-twitter"></i></a>
                            <a href=""><i class="fab fa-linkedin"></i></a>
                    </div>

                    <p>inspired by <Link to="https://kadet.dev/"><a>Collins Enebeli</a></Link></p>
                </footer>
        </div>
    );
}
 
export default Home;