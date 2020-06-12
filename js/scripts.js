// BUSINESS LOGIC

function robotSpeak(humanInput) {
  for (let i = 0; i < humanInput.length(); i++);
}

// UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event) {
   const humanInput = $("#userInput").val();
   const output = humanInput;
   console.log(output);
  // parse user input parseInt($("input#input").val());

  $("#output").append(`<p>${output}</p>`);
    event.preventDefault();
  });
});
