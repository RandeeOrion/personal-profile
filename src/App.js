import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Bio from './Components/bio.js';
import Header from './Components/header.js';
import Projects from './Components/project.js';
import Contact from './Components/contact.js'
import '../src/styles/styles.sass'


function App() {
  return (
    <div className="App">
       < Header />
      <BrowserRouter>
        <Route exact path='/'>
          < Projects />
        </Route>
        <Route path='/bio' component={Bio} /> 
        <Route path='/contact' component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
