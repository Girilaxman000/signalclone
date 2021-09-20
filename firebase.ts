import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBxbl3cY0GBjTRAMb2KkVLX9u2PwI1fGcM',
  authDomain: 'y-build.firebaseapp.com',
  projectId: 'y-build',
  storageBucket: 'y-build.appspot.com',
  messagingSenderId: '240444414888',
  appId: '1:240444414888:web:1b84cb3344a8eda15c5b9d',
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
