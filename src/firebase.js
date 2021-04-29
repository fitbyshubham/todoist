import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCI4q2oF0xT2vjLNIWvvSvP9NHdDriZ7KQ",
    authDomain: "todoist-e1f49.firebaseapp.com",
    projectId: "todoist-e1f49",
    storageBucket: "todoist-e1f49.appspot.com",
    messagingSenderId: "995351799356",
    appId: "1:995351799356:web:a8a6441090b03b59958539"
})

export {firebaseConfig as firebase}