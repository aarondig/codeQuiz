$(function() {
  var startgame = document.querySelector(".btn");
  var question = document.querySelector(".cover-heading");
  var hintText = document.querySelector(".lead")
  var timeEl = document.querySelector(".masthead-brand");
  var score = document.querySelector(".nav");

  var one = document.getElementById("one");    
  var two = document.getElementById("two"); 
  var three = document.getElementById("three");   
  var four = document.getElementById("four");

  var allbuttons = document.getElementById("questionForm");
  allbuttons.style.display = "none";


  score = 0;


  i = 0;

  var questions = [{
    question: "When was the first photographic snapshot taken?",
    choices: {
      a: "1776",
      b: "1914",
      c: "1826",
      d: "2020"},
    textanswer: ["i need sleep"],
    },
    {
      question: ["help"],
      choices: {
        a: "goodbye",
        b: "my",
        c: "name",
        d: "is"},
      textanswer: { c: "help"}
    },
    {
      question: ["How many"],
      choices: {
        a: "hello",
        b: "my",
        c: "name",
        d: "is"},
      textanswer: ["i need sleep"],
      },
      {
        question: ["dear god plz let me sleep"],
        choices: {
          a: "goodbye",
          b: "my",
          c: "name",
          d: "is"},
        textanswer: ["i need sleep"],
      },
    ];

    var answerkey = [three, two, three, four];


  var secondsLeft = 100;
        
  
  startgame.addEventListener("click", function(){

    //Button Functions

    startgame.remove();
    allbuttons.style.display = "contents";


      //QUESTIONS

      // var choice = document.querySelectorAll("#one, #two, #three, #four");
      // console.log(choice);
      // choice[0].textContent = "1";
      // choice[1].textContent = "world";
      // choice[2].textContent = ":)"
      // choice[3].textContent = ":)"

      // var points = 0;
      
   setTime();
   ask();


  });
0
  function ask(){
    
      question.textContent = questions[i]["question"];
      var answer = ans[i];
      one.textContent = questions[i]["choices"]["a"];
      two.textContent = questions[i]["choices"]["b"];
      three.textContent = questions[i]["choices"]["c"];
      four.textContent = questions[i]["choices"]["d"];

      
      console.log(answer);

      
      one.addEventListener("click", function(event) {
     
        if (event.target.matches(answer)) {
          
          score.textContent(score++);
          alert("Correct!");
          i++;
          ask();
        } else {
          alert("Incorrect, the correct answer was " + textanswer);
          i++;
          ask();
        }
      });

      
      two.addEventListener("click", function(event) {
     
        if (event.target.matches(answer)) {
          
          score.textContent(score++);
          alert("Correct!");
          i++;
          ask();
        } else {
          alert("Incorrect, the correct answer was " + textanswer);
          i++;
          ask();
        }
      });
      
      three.addEventListener("click", function(event) {
     
        if (event.target.matches(answer)) {
          
          score.textContent(score++);
          alert("Correct!");
          i++;
          ask();
        } else {
          alert("Incorrect, the correct answer was " + textanswer);
          i++;
          ask();
        }
      });
      
      four.addEventListener("click", function(event) {
     
        if (event.target.matches(answer)) {
          
          score.textContent(score++);
          alert("Correct!");
          i++;
          ask();
        } else {
          alert("Incorrect, the correct answer was " + textanswer);
          i++;
          ask();
        }
      });
      // if (i == questions.length){
      // counter == 0

      // }
      
      
    }


    function setTime() {
      var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft + " seconds";

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        





      }

    }, 1000);
  }
 
});

