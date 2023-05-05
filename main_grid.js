const loader = document.querySelector('.loader'); //variable loading
const card =document.querySelectorAll("gallery");




// ------------loader----------------
window.addEventListener('load',() =>{
  loader.classList.add('fondu-out')
})
//-----------------------------------


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
function newCard(name, image, prix, matière) {
  return ` <li class="profil-card">
    <a href="article.html">
    <p class="matière">${matière}
    </p>
    <img src="${image}" alt="" class="profil-image">
    <div class="profil-info">
    <p class="profil-name">${name} ${prix}</p>
    </a>
    </div>
    </li>`;
}


fetch('article.json')
  .then(response => response.json())
  .then(data => {
    let galleryHTML = '';
    for(let item in data) {
      let cardHTML = newCard(data[item].name, data[item].image, data[item].prix, data[item].matière);
      galleryHTML += cardHTML;
    }
    document.getElementById('gallery').innerHTML = galleryHTML;
  })


// document.getElementById("gallery").innerHTML=newCard(`costume`,`IMG/blackcoat.jpg`,`1200 euro`,`coton,laine`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackSuit.jpg`,`1400 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueCoat.jpg`,`1200 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueShirt.jpg`,`1700 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/whiteSuit.jpg`,`1200 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackTrousers.jpg`,`1200 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/greyCoat.jpg`,`1200 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blueShirt2.jpg`,`1200 euro`,`matière`);
// document.getElementById("gallery").innerHTML+=newCard(`costume`,`IMG/blackcoat.jpg`,`1200 euro`,`matière`);













