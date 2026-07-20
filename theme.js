const button =
document.getElementById("themeToggle");


if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

button.textContent="☀️";

}



button.onclick=function(){


document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){


localStorage.setItem("theme","dark");

button.textContent="☀️";


}else{


localStorage.setItem("theme","light");

button.textContent="🌙";


}


};


const button = document.getElementById("themeToggle");

if(button){

    if(localStorage.getItem("theme")==="dark"){

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

}