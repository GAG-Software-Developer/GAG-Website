import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/navigasi.css';
import Footer from './components/essential/footer';
import Explore from './components/explore/pages/explore';
import Detail_Project from './components/explore/pages/detail-project';
import About from './components/about/pages/about';
import Contact from './components/contact/pages/contact';
import Laboratory from './components/lab/pages/laboratory';
import Detail_Tutorial from './components/lab/pages/detail-tutorial';


function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path='/' component={Explore} />

        <Switch>
          <Route exact path='/Detail-Projek/:id_project' component={Detail_Project} />
        </Switch>
        <Switch>
          <Route exact path='/Detail-Tutorial/:id_tutorial' component={Detail_Tutorial} />
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
