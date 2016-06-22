
var list = document.createElement("ul");


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
