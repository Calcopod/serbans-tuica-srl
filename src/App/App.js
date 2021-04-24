import React from 'react';
import HomePage from '../Pages/Homepage/homepage.jsx';

import { Switch, Route } from 'react-router-dom'

import './App.css';
import ShopPage from '../Pages/Shop/shop.jsx';

function App() {
  return (
    <div>
     <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/shop" >
        <ShopPage />
      </Route>
     </Switch>
    </div>
  );
}

export default App;
