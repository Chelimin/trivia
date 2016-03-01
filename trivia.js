var count=0;
var qn = document.getElementById('qn');
var ans = document.getElementById('ans');
var score = document.getElementById('score');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');
var q1 = "What is the population of Singapore to the nearest million?";
var q2 = "How many islands is Singapore made up of?";
var q3 = "How many Prime Ministers did Singapore have, including the current one?";
var q4 = "How many Presidents did Singapore have?";
var q5 = "How many MRT stations are operating in Singapore?";

function qn1(){
qn.textContent = q1;
var input1 = parseInt(prompt(q1));
while (input1 !== 5){
  if(input1 < 5){
    input1 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input1>5){
    input1 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
count++
ans.textContent='5 million';
score.textContent = "You have " + count + "/5 questions correct!"
ans.className = "right";
lily1.className = "show";
}

function qn2(){
qn.textContent = q1;
var input2 = parseInt(prompt(q2));
while (input2 !== 63){
  if(input2 < 63){
    input2 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input2>63){
    input2 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
count++
ans.textContent='63 islands';
score.textContent = "You have " + count + "/5 questions correct!"
ans.className = "right";
lily2.className = "show";
}

function qn3(){
qn.textContent = q2;
var input3 = parseInt(prompt(q3));
while (input3 !== 3){
  if(input3 < 3){
    input3 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input3 > 3){
    input3 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
count++
ans.textContent='3 Prime Ministers';
score.textContent = "You have " + count + "/5 questions correct!"
ans.className = "right";
lily3.className = "show";
}

function qn4(){
qn.textContent = q3;
var input4 = parseInt(prompt(q4));
while (input4 !== 7){
  if(input4 < 7){
    input4 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input4>7){
    input4 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
count++
ans.textContent='7 Presidents';
score.textContent = "You have " + count + "/5 questions correct!"
ans.className = "right";
lily4.className = "show";
}

function qn5(){
qn.textContent = q4;
var input5 = parseInt(prompt(q5));
while (input5 !== 109){
  if(input5 < 109){
    input5 = parseInt(prompt('Thats not it, try going higher?'));
  } else if (input5>109){
    input5 = parseInt(prompt('Thats not it, try going lower?'));
  }
}
count++
ans.textContent='109 stations';
score.textContent = "You have " + count + "/5 questions correct!"
ans.className = "right";
lily5.className = "show";
}

frog.hidden = false;
frog.className = "show";
snake.className = "show";
qn1();
qn2();
qn3();
qn4();
qn5();
qn.textContent = q5;
if (count=5){
  snake.className="show";
  frog.hidden = true;
  victoryfrog.hidden = false;
  victoryfrog.className = "show";
}
