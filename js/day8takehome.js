var favoriteMovies = [
  ['donnie darko', 60, 2000],
  ['up', 60, 2000],
  ['brazil', 60, 2000],
  ['edwawrd scizzorhands', 60, 2000],
  ['the lord of the rings', 60, 2000],
  ['roman holiday', 60, 2000],
  ['young frankenstein', 60, 2000],
  ['STAR WARS', 60, 2000],
  ['eternal sunshine of the spotless mind', 60, 2000],
  ['the majestic', 60, 2000]
];

function movieObjectCreator(title, runningTime, year){
  return{
    title: title,
    runningTime: runningTime,
    year: year
  }
}

var objectArray = [];

for(var val in favoriteMovies){
  var movie = favoriteMovies[val];
  objectArray.push(movieObjectCreator.apply({}, movie));
}

var list = document.createElement("ul");
list.setAttribute("id", "movies");

for(var movie in favoriteMovies){
  var element = document.createElement("li");
  element.textContent = objectArray[movie].title;
  list.appendChild(element);
}
document.body.appendChild(list);
