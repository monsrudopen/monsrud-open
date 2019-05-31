import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCTI24atphtzQB8xisno4bx3nnPMMYLqpA",
    authDomain: "monsrud-open.firebaseapp.com",
    databaseURL: "https://monsrud-open.firebaseio.com",
    projectId: "monsrud-open",
    storageBucket: "monsrud-open.appspot.com",
    messagingSenderId: "469467610404",
    appId: "1:469467610404:web:fef1c28d8065edc2"
  };
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
