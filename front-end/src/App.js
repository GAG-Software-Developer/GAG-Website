import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigasi from './views/components/essential/Navigasi.js';
import Explore from './views/pages/Explore';
import DetailProjek from './views/components/projek/DetailProjek';


function App() {
  return (
    <div className="App">
      <Router>

      <Navigasi />

      <Route exact path='/' component={ Explore } />
      
      <Switch>
        <Route exact path='/Detail-Projek' component={ DetailProjek } />
        <Route exact path='/Detail-Projek/{$id}' component={ DetailProjek } />
      </Switch>
      
      </Router>
    </div>
  );
}


export default App;
