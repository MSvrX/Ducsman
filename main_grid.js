
window.onload = function() {
    if (localStorage.getItem('rgpd-accepte') === null) {
      document.getElementById('rgpd-popup').style.display = 'block';
    }
  }
  
  document.getElementById('accepter').addEventListener('click', function() {
    localStorage.setItem('rgpd-accepte', 'oui');
    document.getElementById('rgpd-popup').style.display = 'none';
  });
  




// -------------------creation des carte ------------------------
function newCard(name,image,prix,matière){
    return` <li class="profil-card">
        <div class="matière">${matière}
        </div>
    <div class="info-prix">
        ${prix}
    </div>
    <img src="${image}" alt="" class="profil-image">
    <div class="profil-info">
    <p class="profil-name">${name}</p>
    </div>
    </li>`
}





document.getElementById("gallery").innerHTML=newCard(`costume`,`IMG/blackcoat.jpg`,`1200 euro`,`coton,laine`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackSuit.jpg`,`1400 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueCoat.jpg`,`1200 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueShirt.jpg`,`1700 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/whiteSuit.jpg`,`1200 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackTrousers.jpg`,`1200 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/greyCoat.jpg`,`1200 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueShirt2.jpg`,`1200 euro`,`matière`);
document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackcoat.jpg`,`1200 euro`,`matière`);













