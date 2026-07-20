import { db } from "./fire.js";

import {


collection,
getDocs

}

from 

"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



const container =
document.getElementById("levels");



let allLevels=[];



const snapshot =
await getDocs(collection(db,"levels"));



snapshot.forEach((doc)=>{


allLevels.push({

id:doc.id,

...doc.data()

});


});



allLevels.sort((a,b)=>a.rank-b.rank);



function displayLevels(levels){


container.innerHTML="";



levels.forEach(level => {

container.innerHTML += `

<div class="level">

    <div class="rank">
        #${level.rank}
    </div>

    <div class="thumbnail-container">

        <img
            class="thumbnail"
            src="${level.thumbnail || 'images/placeholder.png'}"
            alt="${level.name}">

    </div>

    <div class="level-info">

        <div class="level-name">

            ${level.name}

        </div>

        <div class="creator">

            by ${level.creator}

        </div>

        <div class="difficulty">

            ${level.difficulty}

        </div>

    </div>

</div>

`;

});


<div class="level"
onclick="openLevel('${level.id}')">


<div class="rank">

#${level.rank}

</div>



<div class="level-name">

${level.name}

</div>



<div class="creator">

${level.creator}

</div>



<div class="difficulty">

${level.difficulty}

</div>



</div>


`;


});


}



displayLevels(allLevels);




document.getElementById("search").oninput=function(){


let value=this.value.toLowerCase();



displayLevels(

allLevels.filter(level=>

level.name.toLowerCase().includes(value)

)

);


};





window.openLevel=function(id){

window.location.href="level.html?id="+id;

}

<img class="thumbnail"
src="${level.thumbnail}"
alt="${level.name}">

console.log("Documents found:", snapshot.size);