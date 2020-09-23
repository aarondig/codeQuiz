$(function() {
  var startgame = document.querySelector(".btn");
  var question = document.querySelector(".cover-heading");
  var hintText = document.querySelector(".lead")
  var timeEl = document.querySelector(".masthead-brand");

  var one = document.getElementById("one");    
  var two = document.getElementById("two"); 
  var three = document.getElementById("three");   
  var four = document.getElementById("four");

  var allbuttons = document.getElementById("questionForm");
  allbuttons.style.display = "none";



  
  i = 0;

  var questions = [{
    question: "How many",
    choices: {
      a: "hello",
      b: "my",
      c: "name",
      d: "is"},
    answer: ["i need sleep"],
    },
    {
      question: ["help"],
      choices: {
        a: "goodbye",
        b: "my",
        c: "name",
        d: "is"},
      answer: ["help"],
    },
    {
      question: ["How many"],
      choices: {
        a: "hello",
        b: "my",
        c: "name",
        d: "is"},
      answer: ["i need sleep"],
      },
      {
        question: ["dear god plz let me sleep"],
        choices: {
          a: "goodbye",
          b: "my",
          c: "name",
          d: "is"},
        answer: ["i need sleep"],
      },
    ];


  var secondsLeft = 100;
        
  
  startgame.addEventListener("click", function(){

    //Button Functions

    startgame.remove();
    allbuttons.style.display = "contents";
    
    var buttons = document.getElementById("one");

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

  function ask(){
      question.textContent = questions[i]["question"];
      
      one.textContent = questions[i]["choices"]["a"];
      two.textContent = questions[i]["choices"]["b"];
      three.textContent = questions[i]["choices"]["c"];
      four.textContent = questions[i]["choices"]["d"];

      

      var questionForm = document.querySelector("#questionForm");
      questionForm.addEventListener("click", function(event) {
        if (event.target.matches("button")) {
          
          i++;
          hintText.textContent = questions[i]["answer"];
          
          ask();

        };
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

