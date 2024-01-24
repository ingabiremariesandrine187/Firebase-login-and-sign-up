
const firebaseConfig = {
    apiKey: "AIzaSyBePLa0nc-YmXB3HSHGdJRPMHADrSY-HqI",
    authDomain: "codety-hub-firebase-demo.firebaseapp.com",
    projectId: "codety-hub-firebase-demo",
    storageBucket: "codety-hub-firebase-demo.appspot.com",
    messagingSenderId: "473130429309",
    appId: "1:473130429309:web:6968dc0790697663003a14",
    measurementId: "G-6B5X2P0W4G"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

