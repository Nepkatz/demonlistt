import { db } from "./firebase.js";

import { 
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const levelsContainer = document.getElementById("levels");


const querySnapshot = await getDocs(collection(db,"levels"));


let levels = [];


querySnapshot.forEach((doc)=>{

levels.push({
id: doc.id,
...doc.data()
});

});


levels.sort((a,b)=>a.rank-b.rank);



levels.forEach(level=>{

levelsContainer.innerHTML += `

<div class="level-card">


<img class="thumbnail" src="${level.thumbnail || 'default.png'}">


<div>


<h2>
#${level.rank} ${level.name}
</h2>


<p>
Creator: ${level.creator}
</p>


<p>
Difficulty: ${level.difficulty}
</p>


</div>


</div>

<h2>#${level.rank} ${level.name}</h2>

<p>
Creator: ${level.creator}
</p>

<p>
Difficulty: ${level.difficulty}
</p>

</div>

`;

});


console.log("Loaded levels:", levels);