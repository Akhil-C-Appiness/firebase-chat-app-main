import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGyZLjuEzEGlkpoYIyJyPbrtY4DHzR4T8",
  authDomain: "appiness-chatapp.firebaseapp.com",
  projectId: "appiness-chatapp",
  storageBucket: "appiness-chatapp.appspot.com",
  messagingSenderId: "848102130974",
  appId: "1:848102130974:web:748806d562d5040710f50f",
  measurementId: "G-ZRW1KS3K4F"
})
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }