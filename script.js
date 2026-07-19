import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const levelsRef = collection(db, "levels");

const snapshot = await getDocs(levelsRef);


let levels = [];


snapshot.forEach((doc)=>{

levels.push({
id: doc.id,
...doc.data()
});

});



let container = document.getElementById("levels");


levels.sort((a,b)=>a.rank-b.rank);



levels.forEach(level=>{


container.innerHTML += `

<div class="level-card">

<div class="rank">
#${level.rank}
</div>


<img src="${level.thumbnail || "images/default.png"}">


<div>

<h2>

<a href="level.html?id=${level.id}">

${level.name}

</a>

</h2>


<p>
Creator: ${level.creator}
</p>


<p>
Difficulty: ${level.difficulty}
</p>


</div>

</div>

`;

});

let container=document.getElementById("levels");


if(container){


levels.forEach(level=>{


container.innerHTML += `


<div class="level-card">


<div class="rank">
#${level.rank}
</div>


<img src="${level.thumbnail}">


<div>


<h2>

<a href="level.html?id=${level.id}">

${level.name}

</a>

</h2>


<p>
Creator: ${level.creator}
</p>


<p>
Difficulty: ${level.difficulty}
</p>


</div>


</div>


`;


});


}




let params=new URLSearchParams(location.search);

let id=params.get("id");


let page=document.getElementById("level-page");


if(page){


let level=levels.find(x=>x.id==id);



page.innerHTML=`


<img class="big-image" src="${level.thumbnail}">


<h1>
${level.name}
</h1>


<div class="information">


<p>
Rank: #${level.rank}
</p>


<p>
Creator: ${level.creator}
</p>


<p>
Difficulty: ${level.difficulty}
</p>


<p>
Game Version: ${level.version}
</p>


</div>



<h2>
Description
</h2>


<p>
${level.description}
</p>


<h2>
Records
</h2>


<div class="records">

No records submitted yet.

</div>


`;


}



});