function writeln(text=""){
  document.write(text + "<br>" + "<br>");
}

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

 
  var firstLetter = names[i].charAt(0).toLowerCase();

 
  if (firstLetter === 'j') {
    writeln("Hello" + "" + names[i]);
  } else {
   writeln('Goodbye' + "" + names[i]);
  }
}

})();
