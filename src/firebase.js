import firebase from 'firebase';

import "firebase/auth";//auth
import "firebase/database";//database can link sql,mongodb
import "firebase/storage";//storage //images, videos, photos,pdf,fonts

const firebaseConfig = {
    apiKey: "AIzaSyClZgt-bLKfUNxji9XX_ZWaE3F6O-fzPEY",
    authDomain: "hotstar-6ba9f.firebaseapp.com",
    databaseURL: "https://hotstar-6ba9f.firebaseio.com",
    projectId: "hotstar-6ba9f",
    storageBucket: "hotstar-6ba9f.appspot.com",
    messagingSenderId: "518325418363",
    appId: "1:518325418363:web:b441b598008078781aa5de"
  };

  //initialize firebase and react application
  firebase.initializeApp(firebaseConfig)
   export default firebase;