var list = document.createElement("ul");
function Movie(title, runningTimeInMinutes, year, genre, desc){
    this.title = title;
    this.runningTimeInMinutes = runningTimeInMinutes;
    this.year = year;
    this.genre = genre;
    this.desc = desc;
}

function elementId(input){
  return document.getElementById(input).value;
}

function getName(input){
  var genreInputs = document.getElementsByName(input);
  var genre;
  for (var i = 0; i < genreInputs.length; i++) {
    var genreInput = genreInputs[i];
    if (genreInput.checked) {
        genre = genreInput.value;
      }
    }
    return genre;
}

function e(elementType, text, attributes, styles) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}


Movie.prototype.runningTimeInHours = function(){
  return this.runningTimeInMinutes/60;
}

Movie.prototype.preview = function(){
  if(this.desc.length > 50){
    return this.desc.slice(0, 49) + "...";
  }else{
    return this.desc;
  }
}

document.getElementById("movieForm").addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(getName("genre"));
  var movie = new Movie(elementId("movieTitle"), elementId("runTime"), elementId("release"), getName("genre"), elementId("description"));
  var listElement = e("li", (movie.title + " | " + movie.runningTimeInHours()+ " hours " + " | " + movie.year), {rel: movie.preview()}, "");
  list.appendChild(listElement);
  document.getElementById("movieForm").reset();
});

list.addEventListener("click", function(evt){
  alert(evt.target.attributes.rel.textContent);
});


document.body.appendChild(list);
