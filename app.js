import { db } from "./firebase.js";


import {

collection,

getDocs

}

from

"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



const container =
document.getElementById("levels");



const snapshot =
await getDocs(collection(db,"levels"));



let levels=[];



snapshot.forEach((doc)=>{


levels.push({

id:doc.id,

...doc.data()

});


});



levels.sort((a,b)=>a.rank-b.rank);



levels.forEach(level=>{


container.innerHTML += `


<div class="level-card">


<div class="rank">

#${level.rank}

</div>



<img class="thumbnail"

src="${level.thumbnail || 'https://via.placeholder.com/220x120'}">


<div>


<h2>

${level.name}

</h2>



<p>
Creator: ${level.creator}
</p>



<p class="difficulty">

${level.difficulty}

</p>


</div>


</div>


`;



});