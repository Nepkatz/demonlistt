const button=document.getElementById("theme");


button.onclick=()=>{


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

button.innerText="Light";

}

else{

button.innerText="Dark";

}


};