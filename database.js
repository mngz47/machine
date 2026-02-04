

class Database{

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
 
  
 constructor() {

   
 }
  const userId = 0;

 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJ_Ehur1uiN0XVM0aQcKZ70LFK6xzWkyA",
    authDomain: "pamelslots.firebaseapp.com",
    projectId: "pamelslots",
    storageBucket: "pamelslots.appspot.com",
    messagingSenderId: "861024268617",
    appId: "1:861024268617:web:682322ac0ebfa79ec1aa98",
    measurementId: "G-H64HPSP4HS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

   // Initialize Realtime Database and get a reference to the service
   const database = getDatabase(app);

 function writeUserData(userId, name, country, email, g_type) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    name: name,
    email: email,
    country : country,
    gtype : g_type
  });
}
}

  export default (new Database);    
