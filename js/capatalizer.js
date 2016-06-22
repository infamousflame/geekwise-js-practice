var favoriteMovies = ["gone girl", "silence of the lambs", "interstellar", "the martian", "saw", "predestination", "zootopia", "toy story", "up", "star wars", "watchman"];
var capatalizedMovie = [];
function capatalize(input){
  if(isNaN()){
    var split = input.split(" ");
    for(var i = 0; i < split.length; i++){
      if((split[i] == "of" || split[i] == "the") && i != 0){
        capatalizedMovie.push(split[i]);
      }else{
        capatalizedMovie.push(split[i][0].toUpperCase() + split[i].slice(1));
      }
    }
    return capatalizedMovie.join(" ");
  }else{
    return "Wrong input type";
  }
}

function capMovie(input){
  for(var i = 0; i < input.length; i++){
    console.log(capatalize(input[i]));
  }
}

capMovie(favoriteMovies);
/*
var stuff = "dank memes amiright";
var splitStuff = stuff.split(" ");
console.log(splitStuff);
var thing = [];
for(var i = 0; i < splitStuff.length; i++){
  console.log(splitStuff[i][0].toUpperCase() + splitStuff[i].slice(1));
  thing.push(splitStuff[i][0].toUpperCase() + splitStuff[i].slice(1));
  console.log(thing.join(" "));
}
*/
