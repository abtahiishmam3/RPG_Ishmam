buttonList = ['green', 'red', 'yellow', 'blue', ]
genPattern = [];
userPattern = [];
noOfClick = 0;
gameOver = false;
level = 1;

function nextNum() {
  var nextNumber = Math.floor(Math.random() * 4);
  genPattern.push(buttonList[nextNumber]);
  $('#' + buttonList[nextNumber]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  console.log('genPattern=' + genPattern);
  // $('.' + buttonList[nextNumber]).removeClass('.glow').delay(1000);
}

function checkAnswer() {
  if (userPattern[noOfClick - 1] != genPattern[noOfClick - 1]) {
    $('h1').text('Game Over, press any key to restart');
    $('h2').text('Your Score is ' + level);
    return true;
  }
  return false;
}

function reset() {
  genPattern = [];
  userPattern = [];
  noOfClick = 0;
  gameOver = false;
  $('h1').text('Choose the correct pattern');
  console.log('Reset called');
  nextNum();
  $('h2').text('Level 1');
}



function main() {
  console.log('main called');
  reset();
  console.log('Main nextNum called');
  for (var i = 0; i < buttonList.length; i++) {
    var buttonName = buttonList[i];
    $('#' + buttonList[i]).click(function(event) {
      // console.log(this.id);
      if (gameOver == false) {
        noOfClick += 1;
        // nextNum();
        userPattern.push(this.id);
        console.log('userPattern = ' + userPattern);
        if (noOfClick < genPattern.length) {
          gameOver = checkAnswer();
          // nextNum();
        }
        else if (noOfClick == genPattern.length) {
          gameOver = checkAnswer();
          if(gameOver==false){
            level+=1;
            $('h2').text('Level ' + level);
            noOfClick = 0;
            userPattern = [];
            nextNum();
          }
        }
      }
    });
  }

  $(document).keypress(function() {
    if (gameOver) {
      reset();
    }
    // main();
  });
}


main();
