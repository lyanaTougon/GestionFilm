// Récupérer les films depuis localStorage ou initialiser
let films = JSON.parse(localStorage.getItem("films")) || [];

// Fonction pour afficher les films dans le tableau
function displayFilms() {
    const tbody = document.querySelector("#filmsTable tbody");
    tbody.innerHTML = "";

    films.forEach((film, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${film.titre}</td>
            <td>${film.genre.join(", ")}</td>
            <td>
                <button onclick="editFilm(${index})">Modifier</button>
                <button onclick="deleteFilm(${index})">Supprimer</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Ajouter ou modifier un film
const form = document.getElementById("adminForm");
let editIndex = -1;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const titre = document.getElementById("filmTitle").value.trim();
    const genres = document.getElementById("filmGenre").value.split(",").map(g => g.trim());

    if(editIndex >= 0) {
        films[editIndex] = { titre, genre: genres };
        editIndex = -1;
    } else {
        films.push({ titre, genre: genres });
    }

    localStorage.setItem("films", JSON.stringify(films));
    form.reset();
    displayFilms();
});

// Supprimer un film
function deleteFilm(index) {
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
    displayFilms();
}

// Modifier un film
function editFilm(index) {
    document.getElementById("filmTitle").value = films[index].titre;
    document.getElementById("filmGenre").value = films[index].genre.join(", ");
    editIndex = index;
}

// Affichage initial
displayFilms();
