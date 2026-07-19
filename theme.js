const button=document.getElementById("theme");


button.onclick=()=>{


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

button.innerText="Light";

}

else{

button.innerText="Dark";

}

const button =
document.getElementById("themeToggle");

const saved =
localStorage.getItem("theme");

if(saved==="dark"){

    document.body.classList.add("dark");

    button.textContent="☀️";

}

button.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        button.textContent="☀️";

    }else{

        localStorage.setItem("theme","light");

        button.textContent="🌙";

    }

};


};