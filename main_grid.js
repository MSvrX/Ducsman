
const card =document.querySelectorAll("gallery");





// -----------------POP UP COOKIES-------------------


// // Vérifier si les cookies ont déjà été acceptés
// if (!localStorage.getItem('cookiesAccepted')) {
//   //  Afficher la bannière de cookies
//   document.querySelector('.cookie-banner').style.display = 'block';

//   // Ajouter un écouteur d'événements au bouton Accepter
//   document.querySelector('#accept-cookies-btn').addEventListener('click', function() {
//     // Masquer la bannière de cookies
//     document.querySelector('.cookie-banner').style.display = 'none';

//     // Enregistrer le consentement de l'utilisateur dans le stockage local
//     localStorage.setItem('cookiesAccepted', true);
//   });
// }


// window.onload = function() {
//     if (localStorage.getItem('rgpd-accepte') === null) {
//       document.getElementById('rgpd-popup').style.display = 'block';
//     }
//   }
  
//   document.getElementById('accepter').addEventListener('click', function() {
//     localStorage.setItem('rgpd-accepte', 'oui');
//     document.getElementById('rgpd-popup').style.display = 'none';
//   });
  


  

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















