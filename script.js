// Fonction pour récupérer les données de l'API
function fetchJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      // Manipulation des données reçues
      const joke = data.value;

      // Affichage de la blague dans le DOM
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.textContent = joke;
    })
    .catch(error => {
      console.log('Une erreur s\'est produite :', error);
    });
}
// Ajout d'un gestionnaire d'événement pour le bouton de récupération des blagues
const fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchJoke);
