const button =
document.getElementById("themeButton");


let theme =
localStorage.getItem("theme");


if(theme==="dark"){

document.body.classList.add("dark");

button.textContent="☀️";

}



button.onclick=()=>{


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){


localStorage.setItem("theme","dark");

button.textContent="☀️";


}

else{


localStorage.setItem("theme","light");

button.textContent="🌙";


}


};