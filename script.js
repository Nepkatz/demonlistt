import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const levelsContainer = document.getElementById("levels");


const snapshot = await getDocs(collection(db, "levels"));


let levels = [];


snapshot.forEach((doc) => {

    levels.push({
        id: doc.id,
        ...doc.data()
    });

});


levels.sort((a,b)=>a.rank-b.rank);



levels.forEach(level => {

    levelsContainer.innerHTML += `

    <div class="level-card">

        <div class="rank">
            #${level.rank}
        </div>


        <div>

        <h2>
            ${level.name}
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


console.log("Firebase levels loaded:", levels);
