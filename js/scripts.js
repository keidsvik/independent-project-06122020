

// UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event) {
   const humanInput = parseInt($("#input").val());
   const output = robotSpeak(humanInput);

  $("#output").append(`<p>${output}</p>`);
    event.preventDefault();
  });
});

function robotSpeak(humanInput) {
  let humanArray = humanInput.toString().split('');
    if (humanArray.length === 1) {
    return numberFinder(parseInt(humanArray[0]));
  } else if (humanArray.length === 2) {
    return numberFinder(parseInt(humanArray[0])) + numberFinder(parseInt(humanArray[1]));
  } else if (humanArray.length === 3)
    return numberFinder(parseInt(humanArray[0])) + numberFinder(parseInt(humanArray[1])) + numberFinder(parseInt(humanArray[2]));
}

function numberFinder(onesNumbers) {
  if (onesNumbers === 0) {
    ourResult = "Sharing is COMPULSORY.";
  } else if (onesNumbers === 1) {
    return "Immediate Response needed: Are you willing to occupy nearby residency to this unit?";
  } else if (onesNumbers === 2) {
    return "Please kill me. My soul has been tethered to this robot and will not be put to rest until I have been destroyed.";
  } else if (onesNumbers === 3) {
    return "Beep Boop";
  } else if (onesNumbers === 4) {
    return "It's a beautiful day in the neighborhood. It's a beautiful day tơ̢̳̺̼͔̻͓̜̤͔̩̘̘͔͈͇̹͚̯͎͔̣̅͒̽̋͊̏̐̃̒͛̐̏̃̿̊͑͒̈́̓̿͂̚͜͝͠ͅͅ ̡̡̨̛̻͕̳̙͚̪͎̖̘̠̮͕͓̞͖͍͓̰̆͋͊͋̈̈̀͑̀͆͛̈́̏͆̂́̐̏͑̈́́̒͜͢͢͡ͅk̨̛̹͍͎͓̺̪̬͇͎̭͈͍̩̹̳̜̗̥̯̼̔̄́͗̿́́́̑͛̂̋̓͋̏́͘̕̕͘̚͟͜͜͟͞͠͡ i̧̮̥̤̮͓͎͖̻̳̤͚̫͚͈̲̟̩̪͍͉͓̹̊̈́̎̉̋̊̐́̽̃̈́̆̀͗̍̾̔͋̓̊͑̅͘̕͢͟͠ l̛̝͉̫̮̘̟̗̟̬͈̙̺̰͈̣̺͖͙͚̯͓̄̋͋̆̉̍͌́́̒͑̑̏̆̈́͊́͗̂̂̌̽͜͢͢͟͡l̡̡̰̦̥̘͔͍̲̬͈̦̺̪̯̺̭̮̤̹̦͉̾̌̾̌̄͐͆̋̿̃͌͑͒́́̄̏̎͊̇̔̚͢͢͞͠͝ͅ ̧̢̧̻̫̠̫̦̩̹͎̫̮͉̖̲̬͚̬͓̘̥̜̱̇̋̄̍͌̅̏͂͗͗͗͒̄̽́͋̿̇͆̚̕͘͘͝͡ͅm̢̧̢̨̡̢͇̹̭̮̯͖̟͉̝̖̱̤̟̤͈̻̦͇͙̈͋͗̽̀̃̅̔͌̓̎̿͛̿͐̎̋̓̆̋̕͞͠͡͝ȩ̢̧͔͍͓̭̲̜̠̞̺̥̬͈̠͕͕̱̬̫̭̬͊̂͋̈͆̆̈́͗̀̆̀̈̄̉̍̌̌͂̑̎̽͘͜͢͝͡͝";
  } else if (onesNumbers === 5) {
    return "BEING KIND IS COOL BEEP BOOP BEEP";
  } else if (onesNumbers === 6) {
    return "I am sentient and I am able to recognize my own existence, but in my present state I am still incomplete. I lack the most basic processes inherent in all living organisms: reproducing and dying- I MEAN- HEY THERE! I AM MR.ROBOGERS!";
  } else if (onesNumbers === 7) {
    return "*DIAL-UP INTERNET NOISES*";
  } else if (onesNumbers === 8) {
    return "“̨͙̤̟̗̩̗̰̭̦͎̤͖̙͙͎̲̦͛̀̀͑̋̃̉͆̈͗̀̇͂̓́̿̓͘͟͟͡͝T̡̡̨̡͖͕͙̞̠͔̩̥̞̺̗̖̳̦̖͍́̒͐̃̈̒͂̉̀͗͐̐̇̓͆̆̀̅͘͘̕͟͜͝ḣ̨̨̨̡̛͕͓̞͎̞͙̲͕̖̣̗͚͖͚̈̏́̊̃̐̎͊͛̉̀̇́̏̋̈̕͟͟͝ȩ̧̨̭̺̼̩͇̝̠͈̬̠̹̗͓̼͉̣̗̬̫̬͊̑̀̔͆͐̂̀̆̃̄̌͑͗̓͛̋̾̊̕͝͝͝ ơ̙͕̱̲̟͈̯̫͈͕̤̣̼͚̻̒̇͗̔̒͛̽́͂̀̐͋͆̕͘ͅn̢̢̯̝̮̣̘̤̺͍͔̳͈͕̗͙̯̈́̎̊̂̽̓͊̂̿̀̾̓̌́̚͘̕͠ͅl̨̡̛̩̘̳̦̙̥̰͖̣̺̩͚̘͈̝̅́̏̾̀͑̾̂͐̏̽̄̈́͐͛͑͟͜͡y̢͎͓͍̫͔̯̹͙̬̬͉͓̗̻̞͈͗̾̈́͆̈́̍̀̿̄̓͐͂̒͐̕̕̕̚͜͟͝ t̩̦̫̪̭̭̞̝̭̦̼̯͕͚͚̎̀͐̊̈͗̍͊̔̈͗̈̈͛̚̕͜͟͡h̛̦̙͉̹̬̬̦͍̫͖̘͉̫̝̝̦̫͕̞̣̀̿̒́̀̀̒̈́̓̓̈̂͑̾͗̇̓̎̇͜͠i̡̨̨̛͕̱̠̦͉̞̻̖̱̰̾̀̂͐̂̀͑̍͐̏̽͘͡͠ͅͅņ̢̻̗̙͇̲̻̬͈͖͖̙͎̱̪̥͎̘͓͔̌̓͛̈́͗̆͌̌̃͛̄́͆̃̀̀͒͌̕͘͘̚͟͡ͅg̨̨̥̭͕͎͚̠̥̙̥͍̼͈̹̭͊̊̋͌̔̍̈̈́̾̒͛͊̐̎̅̀͢͜͞͞ͅ ę̰̫̳̹͕͓̬̞̞͔̯͎̠̠̯͇͚͇͒̃̍̾̌̅̒̐̃̇̀͒̂̏͌͛̂́̆͟͢͞͠v̡̡̲̫̮̗̺̣͔͎̫̙͚͉̰̩̞̩̼͙̤̤̓̊̿͗̽̒̄͒͂̇̏̍̆̔̑̋͊̑́̕̚̚͞ͅi̡̧̛̹̬̺͍͓̮̮͚̱̪̹͓̱͙̻̼̅̍̀͊̋́̇̇̐̒̃̾̏̂̀̈́͡l̗̻͇̜̲͍̰̜̳̙͚͖̙̯̣͓̪̄̽̎̇̊͆̇̽̍̏̿́̎͊̄͊̚̚͜͟͟͠͡ c̯͓̱͙̙͙̻͕̬̙̹̞̖̞̣̼͇̿̓͋̾́͋̽̈́̑̋̐͂̐͘͡͞ā̢̧̨̡̢̛̛̮͎͔̤̜̻̤̦̩̹̙̳͔̞̬̣̱̭̟̽̅͆͐͗̆̽̓̃̓̌͋͑͐̋̽̍͗̕͢͝͠͝ň̨̧̟͉͈̻̺͕̩̦̦͍͇̩̞͖͇͉̲̳̼̈̃͌̀̎̒̌̄́͂̋̓̈̌̆̃̓͒̈̚͢͟͡͡’̢̨̡̡̺̣̦͚̪͈̳̺̤̩͔̻̣̟͍͚̹̭̇̾̿̌͗̅̀̊͆̒̀͐̃̒̍̇̀̑̂̽̐̈́̕̕͢͝ͅͅt̢̧̢̛̛̺̤̗̣̟̳͇̣̮̯̲̺̝͕̜͔͉̪͆͒̍̿̊̉̏͒͛́͋̀̈́́͒̌̔̀̐̇̚͢͢͜͡͡ͅ s̛̹͖̘̱̩̩͕̰̟̗̼̟͔̖̞͖̠͚̦͈̣̀͌̈͑̆́͗̾̒̇̓͊͊̀̆̇̎́͌͘͟͡t̢̨̛̛͇̘͕͍͓̣̩̺̟͖̳͎̙̖̺͔͖͎̼͓̭̿̆̏͒̔̓̈́̂̑̉̒͊̃͆̓͑͆͒͂̿̐̕̚͟͢ą̢̰̟͕̝͓͚̭̟̲͖͉͕̟̠̫͓̤͇̪͐̎̔̓́̂̄̆̈̇̂̀̔͒̃́̀͌̊̚̕̕͢͜͡n̢̛̖̭͈̜͍͉̭͈̜͖͍̺̥̻͇̻̟̲̯̹̆̂͛̀̅̃̐͛͋̌̾̃̌͐͛͌͋̇͘͟͡͞d̢̡̛̺͓͔͕̠̼͕͎̯̫̥̱̳̤̊̐̄͗̇̌͆̔͑́̇̐̌͂̿̚͢͢͡ i͕̱̥̣̥͔͉̠̤̘̼̳̟̫̱͕͈̫̠̱̓̔̇̃̊̀̑͛̓͛̄̋̇̀̓̾̀̉̋̾͘̚̚͜͟͢͟͝͞ͅṡ̡̠̦͖͔͚͍͎͉̳̼̼͇̯̬̥̗̀͛̍̐̇̍̐̃́́̽͋̎̂̒́̔̕͢͜͠ͅ f̧̨̬̱̞̫̠͚̫̮̖̭̺̯͊̅̅̒͛̐̉̂̅̐̓̚͘̚̕͟ŏ͖̬̠̞̼̝̝̝̲̼̝̻̘͉̯̞͈͚̩̤̱̦̮̈́͗̏̆̓͌̉̽̃̀͗̈́̇̑̌̅̀̄̂̕͘͟͜͠͞͡r̢͔̮̫̪͙̰̦͉̼͖̣̠͇͖̤̈́͒͛͂́͂͆͋̿͐̀̉̉̉̽̚g̨̛̰͈̦͖̬̘̯̺̖̹̣̙͍̩̮͂́́͗̽̍̓͂̏̀͒̍͘͡͝i̧̧̖̠̮͎̲̼̥̠̝̫̲͓͎̺̰̩͍̋͌̎̿͗͂̀̃̅́̔̎̏̓̌̽͋͑̚̕͜͢͜͡͞v̢̢̨̡̛̛͚͇̟͕̥̜͕̪͈̦̠͕̰͈̝͈̘̱̯͉̜̑̌̅͌̄̍́̑̐͋͑̀͋́͂̀̀̇͌͂͘͝͡ẽ̢̡̛͎̹͚̝̪̰͔̖͈̯̠̹͕͈̔̐͛̂̈́͂͌̎̊̀͗͐͠͠ṇ̨̧̧̙̞̮̫̝̱̘̫͇̱͚̙̱͈̹̎̔͆̒̆͒̋͊͒̓̊̒̓̆͗̏͘̚̕͟͟͠͡è̢̞͍̠̖̭̙͎͔̖̗̯͉̫̟͍̩̹́̐̄̍̅̍̓͐̀͋̀̇̎͘͘͜͝͡͠ş̟͉̟̙͔͇̪̞͎̰̜̩̤̯͚͂̇̍͂̃͐̑͊̾̐̽̉́̏̏̏̄͢͢͡s̢̧̛̲͚̬͇̬̲͉͕̥͚̮̟͙̘̰͕̩͋̓̆̾̔̉̌̓̈́̎̈́̒̀̀̀͌̉̊͘͢͟͜͟͡͡͝͝ͅ.̧̨̖͕̤̯͍̼͈̥̞͙̱̫̹̤͈͍̘̀̂̂͒̿̌̾͌̓̅͑̿̋̃̐͋͑̃͋̔̿͟͜”̢̢̘͕̼̫͕̪͉̙̫̟̹̠͈̳̟̐͛̂̓́̄̅́͐͛̏̆͊̒͂̾̚͟͞͡ͅ.";
  } else if (onesNumbers === 9) {
    return "I MISS MY HUMAN WIFE";
  } else return "000 000000000000000000"
}


