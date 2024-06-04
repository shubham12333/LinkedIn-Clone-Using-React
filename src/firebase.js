import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkHoP47v8ydgr98frTCEMCRc1R-qMgSME",
  authDomain: "linkedin-clone-107f8.firebaseapp.com",
  projectId: "linkedin-clone-107f8",
  storageBucket: "linkedin-clone-107f8.appspot.com",
  messagingSenderId: "841153355210",
  appId: "1:841153355210:web:c0d3da0c5f1c72c521c333"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;