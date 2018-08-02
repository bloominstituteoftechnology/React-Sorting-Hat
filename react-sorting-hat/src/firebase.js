import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDEiroSCb0w3ExmVeMp4Z7mpxkAQYJVfWo",
  authDomain: "react-sorting-hat.firebaseapp.com",
  databaseURL: "https://react-sorting-hat.firebaseio.com",
  projectId: "react-sorting-hat",
  storageBucket: "",
  messagingSenderId: "726914785910"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;