import {auth} from "./firebase.js";


import {
signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";



document
.getElementById("login")
.onclick=async()=>{


let email=
document.getElementById("email").value;


let password=
document.getElementById("password").value;



try{


await signInWithEmailAndPassword(
auth,
email,
password
);


window.location.href="admin.html";


}

catch(e){

alert(e.message);

}


};