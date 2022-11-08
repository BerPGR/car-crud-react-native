import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJjAcNjzItzFDD9sAYpn7P44VYqxEfYOg",
  authDomain: "car-crud-c7f72.firebaseapp.com",
  projectId: "car-crud-c7f72",
  storageBucket: "car-crud-c7f72.appspot.com",
  messagingSenderId: "750124199064",
  appId: "1:750124199064:web:e69b641f0f02e73d0974ed"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase }