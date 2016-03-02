var seconds = 20;
var count=0;
var counter = 0;
var input = document.getElementById('input');
var q1 = "What is the population of Singapore to the nearest million?";
var q2 = "How many islands is Singapore made up of?";
var q3 = "How many Prime Ministers did Singapore have, including the current one?";
var q4 = "How many Presidents did Singapore have?";
var q5 = "How many MRT stations are operating in Singapore?";
var qnArray = [q1,q2,q3,q4,q5]
var ansArray = [5,63,3,7,109]
var newGame = new Game(qnArray, ansArray)
frog.hidden = false;
frog.className = "show";
snake.className = "show";

function Game(qn,ans){
  this.qn = qn;
  this.ans = ans;
  this.play = function() {
    // question.textContent = this.qn[counter];
    $('#question').text(this.qn[counter]);
  }
  this.checkAns = function() {
    response = parseInt(input.value);
    if (isNaN(response) ==false){
     if (response < this.ans[counter]){
       $('#hint').text('Thats not it, try going HIGHER?');
       $('#input').val('');
        }
     else if (response > this.ans[counter]){
       $('#hint').text('Thats not it, try going LOWER?');
       $('#input').val('');
        }
     else {
       count++;
       counter++;
       $('#input').val('');
       $('#input').focus();
       $('#hint').text('');
      //  $('#ans').text(this.ans[counter]);
       $('#score').text("You have " + count + "/5 questions correct!");
       var lily = "lily" + counter;
       $("#" + lily).attr('class', 'show')
       //document.getElementById(lily).className = "show";
       this.play();
        }
      }else(alert("Please enter a valid input!"));
    this.endGame = function () {
      frog.hidden=true;
      victoryfrog.hidden=false;
      $('#question').text('YOU SAVED FROGGY!!!');
      $('#victoryfrog').attr('class','show');
      clearInterval(intervalId);
      $('#time').html('');
      $('#start').show();
      counter = 0;
      count = 0;
    }
    if (counter===5){
      this.endGame();
    }
  }
};

$("#input").on("keydown", function (e) {
    if (e.keyCode === 13) {
        newGame.checkAns(e);
    }
});

//start button

var start = $('#start');
var intervalId;


start.on('click',function () {
  for (i=1; i<qnArray.length+1;i++){
    $('#lily' + [i]).attr('class', 'hide');
  }
  frog.hidden = false;
  frog.className = "show";
  snake.className = "show";
  victoryfrog.hidden=true;
  newGame.play()
  localStorage.clear();
  count=0;
  counter=0;
  $('#start').hide();
  $('#input').focus();
  $('#score').text(" ");
  intervalId = setInterval (function () {
      updateTime()
  }, 1000 );
})

  function updateTime() {
    seconds --;
    $('#time').html('Time remaining: ' + seconds +'s');
    if(seconds <= 0){
        clearInterval(intervalId);
        seconds = 20;
        $('#time').html('');
        $('#start').show();
        $('#question').text("TIME'\S UP !!! ");
      }
    }

    // function checkInput(x){
    // if ((x%1) != 0 || x!==" "){
    //     alert("Please don't try to be funny and enter valid input!");
    //     return false;
    //   }
    // }

  //   $('#start').on('click',function() {
  //  location.reload();
  //    });
