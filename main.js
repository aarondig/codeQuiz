$(function() {
  var startgame = document.querySelector(".btn");
  var playagain = document.getElementById("playagain");
  var questionText = document.querySelector(".cover-heading");
  var hintText = document.querySelector(".lead");
  var timeEl = document.querySelector(".masthead-brand");
  var score = document.querySelector(".score");

  var one = document.getElementById("one");    
  var two = document.getElementById("two"); 
  var three = document.getElementById("three");   
  var four = document.getElementById("four");

  var allbuttons = document.getElementById("questionForm");
  allbuttons.style.display = "none";
  
  scorenum = 0;
  i = 0;

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
      question: "Who took the first color photograph",
        a: "1929",
        b: "1889",
        c: "1946",
        d: "1984",
      answer: "James Maxwell"
      },
      {
        question: "When was the first color photograph taken?",
          a: "1861",
          b: "1826",
          c: "1912",
          d: "1946",
        answer: "1861",
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
          done: "Go Home"
          },
    ];


  var secondsLeft = 100;
  // var answerdelay = 1;  
  // var answerdelay2 = 1;     
  
  pregame();
  
  function pregame(){ 
    startgame.style.display = "contents";
    playagain.style.display = "none";
    questionText.textContent = "History of Photography";
    hintText.textContent = "Test your knowladge!";
    
  startgame.addEventListener("click", function(){
    
    startgame.style.display = "none";
    allbuttons.style.display = "contents";
    scorenum = 0;
    i = 0;
    hintText.textContent = "";
    setTime();
    ask();

  });
  }
  function ask(){

      
      if (questions.length == i){
      endgame();
      console.log(i);
      return;
      }
      questionText.textContent = questions[i].question;
      one.textContent = questions[i].a;
      two.textContent = questions[i].b;
      three.textContent = questions[i].c;
      four.textContent = questions[i].d;
      
      one.addEventListener("click", function() {
        
        if (one.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          alert("Correct!");
          
        } 
        
        else {
          // alert("Incorrect, the correct answer was " + questions[i].answer);
          console.log(questions[i].answer);
          secondsLeft - 10;
        }
        // delay();
        i++;
        ask();
        return;
      });

      
      two.addEventListener("click", function() {
        
        if (two.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          alert("Correct!");
          
        } 
        
        else {
          console.log(questions[i].answer);
          secondsLeft - 10;
        }
        // delay();
        i++;
        ask();
        return;
      });
      
      three.addEventListener("click", function() {
        if (three.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          alert("Correct!");
         
        } 
        
        else {
          console.log(questions[i].answer);
          secondsLeft - 10;
        }
        // delay();
        i++;
        ask();
        return;
      });
      
      four.addEventListener("click", function() {
     
        if (four.textContent === questions[i].answer) {
          console.log(questions[i].answer);
          scorenum++;
          alert("Correct!");
        } 
        
        else {
          console.log(questions[i].answer);
          secondsLeft - 10;
        }
        // delay();
        i++;
        ask();
        return;
      });
      
    //   function delay() {
    //     setInterval(function() {
    //         answerdelay--;
    //         if (answerdelay === 0){
    //           hintText.textContent = questions[i].answer;
    //           delay2();
    //         }

    //     },1000);
    //   }



    //   function delay2() {
    //   setInterval(function() {
    //       answerdelay2--;

    //       if (answerdelay2 === 0){
    //         i++;
    //         ask();
    //         hintText.textContent = "";
    //       }
          
    //   },1000);
    // }

      score.textContent = scorenum;
      

    }
    
    function endgame(){
      
      allbuttons.style.display = "none";
      questionText.textContent = "Game Over";
      hintText.textContent = "You scored " + scorenum + " out of 4 correct!";
      playagain.style.display = "contents";
      
      playagain.addEventListener("click", function(){
        pregame();
      });
      clearInterval(timerInterval);
    }


    function setTime() {
      var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft + " seconds";

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endgame();
      }
      

    }, 1000);
  }
});

