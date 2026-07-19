import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const container = document.getElementById("levels");


const snapshot = await getDocs(collection(db, "levels"));


snapshot.forEach((doc) => {

    const level = doc.data();


    container.innerHTML += `

    <div class="level-card">


        ${level.thumbnail ? 
        `<img class="thumbnail" src="${level.thumbnail}">`
        :
        ""}


        <div class="level-info">


            <h2>
            #${level.rank} ${level.name}
            </h2>


            <p>
            Creator: ${level.creator}
            </p>


            <p>
            Difficulty: ${level.difficulty}
            </p>


            <p>
            Version: ${level.version || "1.1"}
            </p>


        </div>


    </div>

    `;

});