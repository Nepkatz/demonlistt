import {db} from "./firebase.js";

import {

collection,
getDocs

}

from

"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



const container=document.getElementById("levels");



const snapshot=
await getDocs(collection(db,"levels"));



let levels=[];



snapshot.forEach(doc=>{

levels.push(doc.data());

});



levels.sort((a,b)=>a.rank-b.rank);



levels.forEach(level=>{


container.innerHTML += `

<div class="level" onclick="openLevel('${level.id}')">


<div class="rank">

#${level.rank}

</div>


<div class="level-info">


<img 
class="thumbnail"
src="${level.thumbnail}"
alt="${level.name} thumbnail">


<div class="level-name">

${level.name}

</div>


</div>


<div>

${level.creator}

</div>



<div class="difficulty">

${level.difficulty}

</div>


</div>

`;

});
window.openLevel = function(id){

window.location.href =
"level.html?id=" + id;

}