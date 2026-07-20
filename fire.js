import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const firebaseConfig = {

apiKey: "AIzaSyD7J60NdxpjiFgiT84Li7D8l3O8cSYaZww",
authDomain: "gd-demonlist.firebaseapp.com",
projectId: "gd-demonlist",
storageBucket: "gd-demonlist.firebasestorage.app",
messagingSenderId: "50043234100",
appId: "1:50043234100:web:fa5518b3dc3798f83f6761"

};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


console.log("Firebase connected!");