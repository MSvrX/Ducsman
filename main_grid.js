




// -------------------creation des carte ------------------------
function newCard(name,image,prix){
    return` <li class="profil-card">
    <div class="info-prix">
        ${prix}
    </div>
    <img src="${image}" alt="" class="profil-image">
    <div class="profil-info">
    <p class="profil-name">${name}</p>
    </div>
    </li>`
}





document.getElementById("gallery").innerHTML=newCard(`costume`,`IMG/blackcoat.jpg`,`1200 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackSuit.jpg`,`1400 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueCoat.jpg`,`1200 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueShirt.jpg`,`1700 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/whiteSuit.jpg`,`1200 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackTrousers.jpg`,`1200 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/greyCoat.jpg`,`1200 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueShirt2.jpg`,`1200 euro`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackcoat.jpg`,`1200 euro`);













