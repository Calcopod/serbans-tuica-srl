import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCVWlsr7wMYFILaiuE8HMpmtwlOFBdSgEU",
  authDomain: "crwn-db-dc2f7.firebaseapp.com",
  projectId: "crwn-db-dc2f7",
  storageBucket: "crwn-db-dc2f7.appspot.com",
  messagingSenderId: "624445337088",
  appId: "1:624445337088:web:0473ff3939175ab964b2e5",
  measurementId: "G-3DXJ25P87J"
}

firebase.initializeApp( config )

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup( provider )
export default firebase