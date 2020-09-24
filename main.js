$(function() {
  var startgame = document.querySelector(".btn");
  var questionText = document.querySelector(".cover-heading");
  var hintText = document.querySelector(".lead")
  var timeEl = document.querySelector(".masthead-brand");
  var score = document.querySelector(".score");

  var one = document.getElementById("one");    
  var two = document.getElementById("two"); 
  var three = document.getElementById("three");   
  var four = document.getElementById("four");

  var allbuttons = document.getElementById("questionForm");
  allbuttons.style.display = "none";


  scorenum = 0;


  

  var questions = [{
    question: "When was the first photographic snapshot taken?",
      a: "1776",
      b: "1914",
      c: "1826",
      d: "2020",
    answer: "1826"
    },
    {
      question: "Who took the first color photograph?",
        a: "Henry Ford",
        b: "James Maxwell",
        c: "Thomas Jefferson",
        d: "Tom Cruise",
      answer: "James Maxwell"
    },
    {
      question: "When was the term 'megapixel' first used?",
        a: "1929",
        b: "1889",
        c: "1946",
        d: "1984",
      answer: "1984"
      },
      {
        question: "When was the first color photograph taken?",
          a: "1861",
          b: "1826",
          c: "1912",
          d: "1946",
        answer: "1861"
      },
      {
        question: "When was the term 'megapixel' first used?",
          a: "1929",
          b: "1889",
          c: "1946",
          d: "1984",
        answer: "1984"
        },
    ];


  var secondsLeft = 100;
        
  

  i = 0;

  startgame.addEventListener("click", function(){

    //Button Functions

    startgame.remove();
    allbuttons.style.display = "contents";

   setTime();
   ask();


  });

  function ask(){
    
      questionText.textContent = questions[i].question;
      one.textContent = questions[i].a;
      two.textContent = questions[i].b;
      three.textContent = questions[i].c;
      four.textContent = questions[i].d;
      
      
      one.addEventListener("click", function() {
        
        if (one.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          // alert("Correct!");
        } 
        
        else {
          // alert("Incorrect, the correct answer was " + questions[i].answer);
          console.log(questions[i].answer);
        }
        i++;
        ask();
        return;
      });

      
      two.addEventListener("click", function() {
        
        if (two.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          
        } 
        
        else {
          console.log(questions[i].answer);
        }
        i++;
        ask();
        return;
      });
      
      three.addEventListener("click", function() {
        if (three.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
         
        } 
        
        else {
          console.log(questions[i].answer);
        }
        i++;
        ask();
        return;
      });
      
      four.addEventListener("click", function() {
     
        if (four.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          
        } 
        
        else {
          console.log(questions[i].answer);
        }
        i++;
        ask();
        return;
      });
      // if (i == questions.length){
      // counter == 0

      // }
      
      score.textContent = scorenum;

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

