import React from 'react';
import HomePage from '../Pages/Homepage/homepage.jsx';

import { Switch, Route } from 'react-router-dom'

import './App.css';
import ShopPage from '../Pages/Shop/shop.jsx';
import Header from '../Components/header/header.jsx';

function App() {
  return (
    <div>
      <Header />
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
