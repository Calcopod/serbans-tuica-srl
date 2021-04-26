import React from 'react';
import HomePage from '../Pages/Homepage/homepage.jsx';

import { Switch, Route } from 'react-router-dom'
import ShopPage from '../Pages/Shop/shop.jsx';
import Header from '../Components/header/header.jsx';
import SignInAndUpPage from '../Pages/sign-in-up/sign-in-up.component.jsx';

import { auth, createUserProfileDoc} from '../firebase/firebase.utils'

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // This will run everytime auth state changes:
    // Open subscription:
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if( userAuth ) {
        const userRef = await createUserProfileDoc( userAuth )

        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    // Close the subscription when you leave app
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
}

export default App;
