import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7CPu-72nz1dS2UUQyIdx8l2sAZCiKYnw",
  authDomain: "disneyplus-clone-1db18.firebaseapp.com",
  projectId: "disneyplus-clone-1db18",
  storageBucket: "disneyplus-clone-1db18.appspot.com",
  messagingSenderId: "500570220579",
  appId: "1:500570220579:web:b0347e57c07284e7862996",
  measurementId: "G-6LJ7MQEDS6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
