import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBt7VcVXZKD-_Wmx9UtsxMiI5c6vLRwNZc",
    authDomain: "firegram-ed26d.firebaseapp.com",
    databaseURL: "https://firegram-ed26d.firebaseio.com",
    projectId: "firegram-ed26d",
    storageBucket: "firegram-ed26d.appspot.com",
    messagingSenderId: "785174780650",
    appId: "1:785174780650:web:f8cda1026ad87bfdc39593",
    measurementId: "G-7M58TLPGFV"
  };

  firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;