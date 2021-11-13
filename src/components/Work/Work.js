import { useState } from "react";
import './Work.scss';

const Work = () => {

    const [works, setWorks] = useState([
        {
            title: "Movies-App",
            tools: "React, CSS",
            description: "A movies website which displays ratings of a particular movie, and short description, built with React.",
            live: "https://damkols.github.io/movies-app",
            code: "https://github.com/Damkols/movies-app",
            id: 1
        },

        {
            title: "Crypto-App",
            tools: "React, CSS",
            description: "A Crypto website that displays basic information about Crypto-currencies, price, volume etc. Built with ReactJS.",
            live: "https://damkols.github.io/Coin-tracker",
            code: "https://github.com/Damkols/Coin-tracker",
            id: 2
        },

        {
            title: "Landing page",
            tools: "HTML, CSS, Javascript",
            description: "Concept Landing page for Pepsi. Built with HTML, CSS and JavaScript.",
            live: "https://damkols.github.io/Pepsi-landing-page",
            code: "https://github.com/Damkols/Pepsi-landing-page",
            id: 3
        },

        {
            title: "Resume",
            tools: "HTML and CSS",
            description: "A simple resume website",
            live: "https://damkols.github.io/HNG-resume",
            code: "https://github.com/Damkols/HNG-resume",
            id: 4
        },

        {
            title: "404 page",
            tools: "HTML and CSS",
            description: "A simple 404 page",
            live: "https://rwd404page.netlify.app/",
            code: "https://github.com/Damkols/Mobile-responsive-404-error-page",
            id: 5
        }
    ]);

    return (
        <div className="works">
            {works.map((work) => (
                <div className="work-card" key={work.id}>
                    <div className="card">
                        <h2>{work.title}</h2>
                        <h3>{work.tools}</h3>
                        <p>{work.description}</p>
                        <ul className="links">
                            <li><a href={work.live} className="link">live <span><i class="far fa-eye"></i></span></a></li>
                            <li><a href={work.code} className="link">code <span><i class="fas fa-code-branch"></i></span></a></li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Work;