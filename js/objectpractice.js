var favMovies = [
  ["movie", 30, 2000],
  ["sdgf", 30, 2000],
  ["gfsf", 30, 2000],
  ["dsf", 30, 2000],
  ["we", 30, 2000],
  ["ss", 30, 2000],
];


function Movie(title, runningTime, year){
  this.title = title;
  this.runningTime = runningTime;
  this.year = year;
  this.checkedIn = false;
}

Movie.prototype = {
  checkIn: function(){
    this.checkIn = true;
  }
  checkOut: function(){
    this.checkIn = false;
  }
  status: function(){
    if(this.checkIn){
      return "true";
    }else{
      return "false";
    }
  }
}
var movieObjects = [];

for(var i = 0; i < favoriteMovies; i++){
  movieObjects.push(new Movie(favMovies[i][0], favMovies[i][1], favMovies[i][2]));
}
for (i=0; i<5; i++) {
  var checkInOut = prompt('Enter the name of a movie to check in or out.');
  if (checkInOut) {
    checkInOut = checkInOut.toLowerCase();
  }
  for (j=0; j<movieObjects.length; j++) {
    var movieObject = movieObjects[j];
​
    if (movieObject.title.toLowerCase() == checkInOut) {
      if (movieObject.checkedIn ) {
        movieObject.checkOut();
      } else {
        movieObject.checkIn();
      }
      var result = movieObject.status();
      alert(result);
      console.log(movieObject.title + ' | checked in: '+ movieObject.checkedIn);
    }
  }
}
