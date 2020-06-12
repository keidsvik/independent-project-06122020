$(document).ready(function() {
  $('form#input').submit(function(event) {
    const humanInput = parseInt($("#input").val());
    const roboOutput = robogersSays(humanInput);
    //run robogersOutput function on humanInput

  // collect user input
  // parse user input
  // make function for user input
  // put user input into a string
  // 

    event.preventDefault();
  });
});

function robogersSays(number) {
  const numArray = number.toString().split("")
  //create a string out of the input by using .toString() and use .split("") to create an array out of the string by putting "" around each number
  if numArray 
}