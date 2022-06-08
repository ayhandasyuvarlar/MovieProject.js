const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const subjectElement = document.querySelector("#subject");
const textareaElement = document.querySelector("#explanation");
const dateElement = document.querySelector("#date");
const clear = document.getElementById("clear-films")
const cardbody = document.querySelectorAll(".card-body")[1]
const ui = new UI()

const storage = new Storage()

eventListeners()


function eventListeners() {
    form.addEventListener("submit", addFilm)
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    clear.addEventListener("click", clearAllFilms)
    cardbody.addEventListener("click", deleteFilm)
}

function addFilm(e) {
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value
    const subject = subjectElement.value
    const textarea = textareaElement.value
    const date = dateElement.value
    if (title === "" || director === "" || url === "" || date === "" || subject === "" || textarea === "") {
        ui.displayMessages("Fill in all fields", "danger")
    }
    else {
        //New Film
        const newFilm = new Film(title, director, url, textarea, date, subject)

        storage.addFilmToStorage(newFilm)  //storage to add film
        ui.addFilmToUI(newFilm); // Frontend film add
        ui.displayMessages("Movie succes added", "success")
    }
    ui.clearInput(titleElement, urlElement, directorElement, dateElement, subjectElement, textareaElement);


    e.preventDefault();
}
function clearAllFilms() {
    if(confirm("Are you sure to delete all movies??")){
      ui.clearAllFilmsFromUI();
      storage.clearAllFilmsFromStorage();
    }
  }
  function deleteFilm(e){
      if(e.target.id === "delete-film" ){
          ui.deleteFilmFromUI(e.target)
          storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      }
  }