import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/essential/footer';
import Explore from './components/explore/pages/explore';
import Detail_Project from './components/explore/pages/detail-project';
import About from './components/about/pages/about';
import Contact from './components/contact/pages/contact';
import Laboratory from './components/lab/pages/laboratory';


function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path='/' component={Explore} />

        <Switch>
          <Route exact path='/Detail-Projek' component={Detail_Project} />
          <Route exact path='/Detail-Projek/{$id}' component={Detail_Project} />
        </Switch>

        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/laboratory' component={Laboratory} />
        <Footer />
      </Router>
    </div>
  );
}


export default App;
