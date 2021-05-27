import firebase from "firebase/app";

import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDGBI4L6iVraxErGgySKzDqVwFbgMvRvEE",
    authDomain: "segundoparcialparadigmas.firebaseapp.com",
    projectId: "segundoparcialparadigmas",
    storageBucket: "segundoparcialparadigmas.appspot.com",
    messagingSenderId: "729380766904",
    appId: "1:729380766904:web:39aab0c9c9d6c74d97a04d"
  };
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
