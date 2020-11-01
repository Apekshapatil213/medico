import firebase from "firebase";

const config = {
  // copy and paste your firebase credential here
  apiKey: "AIzaSyAIHDLtXTAHQt0eT6sauKB7ud3VhZV3cmU",
    authDomain: "medico-d2516.firebaseapp.com",
    databaseURL: "https://medico-d2516.firebaseio.com/",
    projectId: "medico-d2516",
    storageBucket: "medico-d2516.appspot.com",
    messagingSenderId: "874898613425",
    appId: "1:874898613425:web:44d572596dbc1c45806e90",
    measurementId: "G-L58RHMPDEN"
};

const db = firebase.initializeApp(config).firestore();

export   {db} ;