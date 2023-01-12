// import chalk from '/node_modules/chalk';
const chalk = require('chalk');
var readlinesync = require('readline-sync');
var userName = readlinesync.question("What is your name? ");
console.log("Welcom " + userName);
console.log("---------------------");
var score = 0;

console.log("Leasson 1")
var lessonOneQueOne = {
  question: "Where does a river originate?\n a: lake\n b: sea\n c: mountain\n",
  answer: "c"
}
var lessonOneQueTwo = {
  question: "Which vehicle can move in a river?\n a: boat\n b: bike\n c: car\n",
  answer: "a"
}
var lessonOneQueThree = {
  question: "Water of which is drinkable?\n a: sea\n b: river\n c: lake\n",
  answer: "b"
}
var lessonOneQueFour = {
  question: "What change the color of water?\n a: oil\n b: sugar\n c: milk\n",
  answer: "c"
}
var lessonOneQueFive = {
  question: "What does not mixe with water?\n a: oil\n b: sugar\n c: salt\n",
  answer: "a"
}
var lessonOneArray = [lessonOneQueOne, lessonOneQueTwo, lessonOneQueThree, lessonOneQueFour, lessonOneQueFive];

for (i = 0; i < lessonOneArray.length; i++) {
  var currentArray = lessonOneArray[i];
  QnA(currentArray);
  function QnA(currentArray) {
    var userOutput = readlinesync.question(currentArray.question);
    if (userOutput === currentArray.answer) {
      console.log(chalk.green("You are right " + chalk.bold(userName)));
      score++;
      console.log("your score is " + score);
      console.log("\n");
    }
    else {
      console.log(chalk.white.bgRed("You are wrong " + userName));
      console.log("\n");
    }
  }
}

var highScore = 5;

if (score == highScore) {
  console.log(chalk.bgBlue.bold("Your Final Score is " +score+ " and this is HIGHEST SCORE"));
}
else {
  console.log(chalk.bgBlue.bold("Your Final Score is " +score));
}


