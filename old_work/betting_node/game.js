var wallet;
var betInput;
var guess;
var message;

$(function() {
    // Set wallet
    walletInit();

    // Assign betInput and guess, call betting();
    $('#finilize').on('click', function() {
      var lastBet = betInput;
      var lastGuess = guess;
      betting();
      betInput = 0;
      guess = 0;
      $('#wallet').html(['<h1>','Wallet:', wallet, '</h1>','<h1>', 'Last Guess:', lastGuess,'</h1>', '<h1>', 'Last Bet:', lastBet, '</h1>'].join(' '));
      $(this).closest('form').find("input[type=text], textarea").val("");
      $('#message').html(['<h2>',message,'</h2>'].join(' '));
    });

    // Resets wallet.
    $('#restart').on('click', function() {
      walletInit();
      location.reload();
    });

    $('#plus5').on('click', function () {
      if (isNaN(betInput)) {
        betInput = 5;
      }
      else {
        betInput += 5;
      }
    });

    $('#plus10').on('click', function () {
      if (isNaN(betInput)) {
        betInput = 10;
      }
      else {
        betInput += 10;
      }
    });

    $('#plus20').on('click', function () {
      if (isNaN(betInput)) {
        betInput = 20;
      }
      else {
        betInput += 20;
      }
    });

    $('#num1').on('click', function () {
      guess = 1;
    });

    $('#num2').on('click', function () {
      guess = 2;
    });

    $('#num3').on('click', function () {
      guess = 3;
    });

    $('#num4').on('click', function () {
      guess = 4;
    });

    $('#num5').on('click', function () {
      guess = 5;
    });

    $('#num6').on('click', function () {
      guess = 6;
    });

    $('#num7').on('click', function () {
      guess = 7;
    });

    $('#num8').on('click', function () {
      guess = 8;
    });

    $('#num9').on('click', function () {
      guess = 9;
    });

    $('#num10').on('click', function () {
      guess = 10;
    });

});


// Displays rules if true
function rules(choice) {

  if (choice === true) {
    confirm('As you know you start with $100. You will get the chance to bet on what you think a random generated number is(1-100). If you guess right, we match your bet and you win some dough. If your one off you dont loose your bet!!! Anything else.....we took your cash, were truly sorry....');
    betting();
  } else if (choice === false) {
    confirm(['Alright', name, 'you start with $100 good luck!'].join(' '));
    betting();
  }
}

// Initializes bet, and calls appropriate methods.
function betting(){
  if (wallet > 0){
    checkBet();
    var rdmNum = getRandomNum();
    compare(rdmNum, betInput);
  }
  else {
    confirm('Sorry you dont have enough funds, to play would you like to restart?');
    walletInit();
  }
}

// Generates a random number, very random.
function getRandomNum() {
  var idx = Math.floor(Math.random() * 3);
  var arr = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1 ];
  return arr[idx];

}

//Compare the random number to user input.
function compare(rdmNum) {
  if (rdmNum == guess) {
    walletAdd();
    message = ['Winner, Winner, chicken dinner! reward:', betInput].join(' ');
  }
  else if (rdmNum == guess + 1 || rdmNum == betInput - 1 ) {
    message = 'Close but no cigar';
  }
  else {
    walletSubstract();
    message = 'Not even close.';
  }
}

// Initializes wallet amount
function walletInit() {
  wallet = 100;
}

// Subtracts passed in amount from wallet
function walletSubstract() {
  wallet -= betInput;
}

// Adds passed in amount to wallet
function walletAdd() {
  wallet += (betInput * 1);
}


// Ensures user has enough to bet.
function checkBet() {
  if (betInput > wallet) {
    alert('Sorry you dont have enough funds, please decrease bet.');
  }
}
