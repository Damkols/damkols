import React from 'react'
import NavbarM from '../components2/NavbarM/NavbarM';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Work from '../components/Work/Work';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import Home from '../components2/Home/Home';
import styles from './mobile.module.scss';

const Mobile = () => {
    return (
        <div className={styles.App}>
            <Router>
                <div className={styles.nav}>
                    <NavbarM />
                </div>
                <Switch>
                    <div className={styles.content}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/work">
                            <Work />
                        </Route>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default Mobile
