import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigasi from './views/components/essential/Navigasi.js';
import Explore from './views/pages/Explore';
import Konten_Projek from './views/pages/Konten_Projek';


function App() {
  return (
    <div className="App">
      <Router>

      <Navigasi />

      <Route exact path='/' component={ Explore } />
      
      <Switch>
        <Route exact path='/Detail-Projek' component={ Konten_Projek } />
        <Route exact path='/Detail-Projek/{$id}' component={ Konten_Projek } />
      </Switch>
      
      </Router>
    </div>
  );
}


export default App;
