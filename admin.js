import {db,auth}
from "./firebase.js";


import {

collection,
addDoc

}

from

"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";



onAuthStateChanged(auth,(user)=>{


if(!user){

window.location.href="login.html";

}


});



document
.getElementById("add")
.onclick=async()=>{


await addDoc(

collection(db,"levels"),

{

name:
document.getElementById("name").value,


creator:
document.getElementById("creator").value,


difficulty:
document.getElementById("difficulty").value,


rank:
Number(document.getElementById("rank").value)

}

);


alert("Level added!");

};