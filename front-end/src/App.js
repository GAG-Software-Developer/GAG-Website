import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './views/components/essential/Footer';
import Explore from './views/pages/Explore';
import Konten_Projek from './views/pages/Konten_Projek';
import About from './views/pages/About';
import Tutorial from './views/pages/Tutorial';
import Technology from './views/pages/Technology';


function App() {
  return (
    <div className="App">
        <Router>

        <Route exact path='/' component={ Explore } />
        
        <Switch>
          <Route exact path='/Detail-Projek' component={ Konten_Projek } />
          <Route exact path='/Detail-Projek/{$id}' component={ Konten_Projek } />
        </Switch>

        <Route exact path='/about' component={ About } />
        <Route exact path='/tutorial' component={ Tutorial } />
        <Route exact path='/technology' component={ Technology } />
        <Footer/>
        </Router>
    </div>
  );
}


export default App;
