// BUSINESS LOGIC



// UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event) {
   const humanInput = $("#userInput").val();
   const output = humanInput;
   console.log(output);
  // parse user input parseInt($("input#input").val());

    event.preventDefault();
  });
});
