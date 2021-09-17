import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; // store our images
import 'firebase/compat/firestore'; //database

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyB28_y68C_Hxv0qzJT7v25TfmMXSeeY2Ak",
    authDomain: "react-photogallery-cd987.firebaseapp.com",
    projectId: "react-photogallery-cd987",
    storageBucket: "react-photogallery-cd987.appspot.com",
    messagingSenderId: "393840884403",
    appId: "1:393840884403:web:cacad6cc35ad88c1268ec6"
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  // Initialize firestore and the storage service
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  // const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
// export to use this services in other files
export { projectStorage, projectFirestore } ;
