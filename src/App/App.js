import React from 'react';
import HomePage from '../Pages/Homepage/homepage.jsx';

import { Switch, Route } from 'react-router-dom'

import './App.css';

const HatsPage = () => (
  <h1>Hat page</h1>
)

function App() {
  return (
    <div>
     <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/hats" >
        <HatsPage />
      </Route>
     </Switch>
    </div>
  );
}

export default App;
