import React from 'react';
// import PortfolioContainer from './components/PortfolioContainer';
// import Logo from './pages/images/profileimg.jpg'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavTabs from './components/NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


// const styles = {
//   container : {
//     backgroundimage: `url(${Logo})`,
//     backgroundPosition: 'center',
//     width: '100vw',
//     height: '100vh',
//   }
// }

function App() {
  return (
    <Router>
    <>
      <NavTabs />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
    </Router>
  )}

export default App;
