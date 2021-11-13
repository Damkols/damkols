import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Work from '../components/Work/Work';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import styles from './desktop.module.scss';



const Desktop = () => {

  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.nav}>
          <Navbar />
        </div>
          <div className={styles.content}>
            <Switch>
              <Route exact path="/">
                <Work />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default Desktop