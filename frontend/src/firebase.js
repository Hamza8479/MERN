import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAreH6jp36Mt3-PkEnruuo3VT3W03VPkvo",
  authDomain: "mern-5bb67.firebaseapp.com",
  projectId: "mern-5bb67",
  storageBucket: "mern-5bb67.appspot.com",
  messagingSenderId: "552252957997",
  appId: "1:552252957997:web:5abf6b846489d1cd075fa4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
