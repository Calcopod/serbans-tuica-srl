import React from 'react';
import HomePage from '../Pages/Homepage/homepage.jsx';

import { Switch, Route } from 'react-router-dom'

import './App.css';
import ShopPage from '../Pages/Shop/shop.jsx';
import Header from '../Components/header/header.jsx';
import SignInAndUpPage from '../Pages/sign-in-up/sign-in-up.component.jsx';

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
        <Route path="/signin">
          <SignInAndUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
