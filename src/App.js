import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Bio from './Components/bio.js';
import Header from './Components/header.js';
import Projects from './Components/project'


function App() {
  return (
    <div className="App">
      < Header />
      <BrowserRouter>
        <Route exact path='/'>
        
        </Route>
        <Route path='/bio' component={Bio} />
        <Route path='/portfolio' component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
