import {db} from "./firebase.js";

import {

collection,
getDocs

}

from

"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";



const container=document.getElementById("levels");



const data=await getDocs(
collection(db,"levels")
);



data.forEach(doc=>{


let level=doc.data();



container.innerHTML+=`

<div class="level">


<div class="rank">

#${level.rank}

</div>


<div class="level-name">

${level.name}

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