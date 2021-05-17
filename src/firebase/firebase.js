import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAfGkwjEY92QMZvF1PH1cPoRq-OD3T0t_s",
  authDomain: "image-gallary-e3bd4.firebaseapp.com",
  projectId: "image-gallary-e3bd4",
  storageBucket: "image-gallary-e3bd4.appspot.com",
  messagingSenderId: "471832492588",
  appId: "1:471832492588:web:48528d6a831aa3f32aef89",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectStorage, timestamp };
