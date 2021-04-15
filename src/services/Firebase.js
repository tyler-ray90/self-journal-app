import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBypBz1WOkg07BELjk1G5tqbSmx59IKBHQ",
    authDomain: "self-journal-4cf51.firebaseapp.com",
    projectId: "self-journal-4cf51",
    storageBucket: "self-journal-4cf51.appspot.com",
    messagingSenderId: "6203566724",
    appId: "1:6203566724:web:300346505224a9fe1e30d1"
};


firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function login() {
    auth.signInWithPopup(provider);
}

function logout() {
    auth.signOut();
}

export {
    auth,
    login,
    logout,
}