/*var fruitColors = [];

var cherry = ['cherry', 'red'];
var banana = ['banana', 'yellow'];
var orange = ['orange', 'orange'];


fruitColors.push(cherry);
fruitColors.push(banana);
fruitColors.push(orange);

var fruitObject = {
  fruit1: {
    type: 'cherry',
    color: 'red',
    run: function(){
      console.log("ekke");
    }
  }
}

console.log(fruitColors);
console.log(fruitObject.fruit1.run);
fruitObject.fruit1.run();
*/


var greg = {
    firstName: "Greg",
    lastName: "Goforth",
    age: 35,
    "favorite-food": "pizza",
    speak: function speak(words) {
        var message = words + " " + this.firstName + " " + this.lastName + " has spoken";
        console.log(message);
    }
};


greg.speak.call({
    firstName: "foo",
    lastName: "bar"
}, "This call and apply stuff is fun!");
