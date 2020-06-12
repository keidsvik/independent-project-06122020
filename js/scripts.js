

// UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event) {
   const humanInput = $("#input").val();
   //let humanInputArray = humanInput.toString().split('')
   //indexOfHumanInputString = humanInputString.indexOf();
   const output = robotSpeak(humanInput);
   console.log(output);
  // parse user input parseInt($("input#input").val());

  $("#output").append(`<p>${output}</p>`);
    event.preventDefault();
  });
});

function robotSpeak(number) {
  let humanArray = number.toString().split('');
    if (humanArray === 1) {
    return "AGHHHH";
  }
}





