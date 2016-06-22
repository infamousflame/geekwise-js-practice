
// function log(){
//   console.log("Hello");
// }
// function alertThing(){
//   alert("hello");
// }
// function logInput(a){
//   console.log(a);
// }
// function alertInput(b){
//   alert(b);
// }
// log();
// alertThing();
// logInput("same");
// alertInput("same");
//
//
// // //recieved error
// // function myFirstFunction(){
// //     mySecondFunction();
// // }
// //
// // function mySecondFunction(){
// //     myFirstFunction();
// // }
// //
// // myFirstFunction();
//
// var array = ["a", "b", "c", 1, 2, 3];
//
// alert(array[array.length - 1]);
//  
// function myFunction(){
//   var x = 10;
// }
//
// var x = 6;
// var y = x.toString();

function logArray(myArray, i){
  if(i < myArray.length){
    console.log(myArray[i]);
    i++;
    setTimeout(function(){
      logArray(myArray, i)
    }, 500);
  }
}

var myArray = ["Apple", "Pear", "Peach", "Grape"];
logArray(myArray, 0);
