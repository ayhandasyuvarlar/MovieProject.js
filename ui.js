function UI() {

}

UI.prototype.addFilmToUI = function (newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.explanation}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Movie removeimage.png</a></td>
  </tr>`

}
UI.prototype.clearInput = function (element1, element2, element3, element4, element5, element6) {
    element1.value = ""
    element2.value = ""
    element3.value = ""
    element4.value = ""
    element5.value = ""
    element6.value = ""
}
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body")
    // Alert div to create
    const div = document.createElement("div")
    div.className = `alert  alert-${type}`
    div.textContent = message
    div.style.marginTop = "10px"
    cardBody.appendChild(div)

    setTimeout(function () {
        div.remove();
    }, 1000)
}
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
        filmList.innerHTML += `
        <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}<td>
    <td>${film.director}<td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Movie remove</a></td>
  </tr>

     `
    })
}
UI.prototype.clearAllFilmsFromUI = function(){
    const filmsList = document.getElementById("films")
    while(filmsList.firstElementChild !== null){
            filmsList.firstElementChild.remove();
    }
    
}
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}