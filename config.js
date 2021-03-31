import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB822f33utVebaIhpC-t_pG2p7cBt9X8J4",
    authDomain: "news-app-cc972.firebaseapp.com",
    databaseURL: "https://news-app-cc972.firebaseio.com",
    projectId: "news-app-cc972",
    storageBucket: "news-app-cc972.appspot.com",
    messagingSenderId: "286997282851",
    appId: "1:286997282851:web:b3866658fe2bef4f533196",
    measurementId: "G-N9BWWTS3QY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()