var a = document.createElement("a");
a.textContent = "I'm a link to google";
document.body.appendChild(a);
a.href = "https://www.yahoo.com";
console.log(a);

setTimeout(function(){
  document.body.removeChild(a);
}, 2000);
