var start = parseInt(prompt("Enter a starting number for a loop"));
var stop = parseInt(prompt("Enter a stopping point for the loop"));

if(isNaN(start) || isNaN(stop)){
  document.getElementById("nan").innerHTML = "One of the entries was not a number";
}

if(!isNaN(start) && !isNaN(stop)){
  if(start > stop){
    document.getElementById("startz").innerHTML = "Start must be less than stop";
  }else{
    for(var i = start; i < stop; i++){
      if(i % 2 == 0){
        var btn = document.createElement("p");        // Create a <button> element
        var t = document.createTextNode((i + 1) + ": odd");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);
      }else{
        var btn = document.createElement("p");        // Create a <button> element
        var t = document.createTextNode((i + 1) + ": even");       // Create a text node
        btn.appendChild(t);                                // Append the text to <button>
        document.body.appendChild(btn);
      }
    }
  }
}
