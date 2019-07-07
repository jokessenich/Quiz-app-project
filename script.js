"use strict"

var questionNumber = 0;
var score = 0;
const STORE = [{
  question: "In what city does Seinfeld take place?",
  answer1: "Cleveland",
  answer2: "San Francisco",
  answer3: "New York",
  answer4: "Boston",
  correct: "Third Answer",
    image: `"https://imgix.ranker.com/user_node_img/50067/1001322566/original/the-big-salad-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="painting of Tom's Restaurant in New York City"`
},
{question: "What is Kramer's first name?",
  answer1: "Cosmo",
  answer2: "Schlomo",
  answer3: "Bozo",
  answer4: "Cosby",
  correct: "First Answer",
  image: `"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/seinfeld-kramer-art-iguanna-espinosa.jpg" alt="painting of kramer"`
  },
  {question: "What is the name of the coffee shop that Jerry regularly goes to?",
  answer1: "Joe's",
  answer2: "Ned's",
  answer3: "Monk's",
  answer4: "Greg's",
  correct: "Third Answer",
  image: `"https://imgix.ranker.com/user_node_img/50067/1001322560/original/seinhawks-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22" alt="painting of the diner renamed monk's with seinfeld characters inside"`
  },
  {question: "What is Elaine's on and off boyfriend's FIRST name?",
  answer1: "Jay",
  answer2: "Don",
  answer3: "David",
  answer4: "Greg",
  correct: "Third Answer",
  image: `"https://imgix.ranker.com/user_node_img/50067/1001322562/original/ask-the-eight-ball-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22" alt="painting of David Puddy with 8 ball jacket on"`
  },
  {question: "What street Jerry's apartment on in New York?",
  answer1: "West 121st St",
  answer2: "West 81st St",
  answer3: "West 89th St",
  answer4: "West 109th St",
  correct: "Second Answer",
  image: `"https://archive.nerdist.com/wp-content/uploads/2015/10/Seinfeld-apartment-drawing.png" alt="painting of the Seinfeld apartment"`
  },
  {question: "How does Kramerica’s “bladder system” project end?",
  answer1: "It never gets off the ground and isn’t mentioned again",
  answer2: "The back of a garbage truck gets coated in oil and the garbage becomes Kramer’s responsibility",
  answer3: "Rubber balls of oil end up at the shipping port but then they all rupture",
  answer4: "A rubber ball of oil is pushed out a window and hits Jerry’s girlfriend on the street",
  correct: "Fourth Answer",
  image: `"https://res.cloudinary.com/teepublic/image/private/s--6vMHI7eF--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1457208192/production/designs/439199_1.jpg" alt="graphic design for Kramerica"`
  },
  {question: "Where does Mr. Peterman go when Elaine gets to run the catalogue for a while?",
  answer1: "Thailand",
  answer2: "Bangladesh",
  answer3: "Cambodia",
  answer4: "Myanmar",
  correct: "Fourth Answer",
  image: `"https://cdn.shopify.com/s/files/1/0863/0220/files/elaine.jpg?11197808051268213222" alt="Painting of Elaine at Peterman's desk smoking a cigar"`
  },
  {question: "What did George say to the whale in the episode he claimed to be a marine biologist?",
  answer1: "Simmer down!",
  answer2: "Ahoy!",
  answer3: "Woah There!",
  answer4: "Easy big fella!",
  correct: "Fourth Answer",
  image:`"https://imgix.ranker.com/user_node_img/50067/1001322529/original/marine-biologist-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="painting of George riding a whale"`
  },
  {question: "In the 'fire' episode where georgia pushes people over to get out, what is the clown's name?",
  answer1: "Elmo the Clown",
  answer2: "Cosmo the Clown",
  answer3: "Bozo the Clown",
  answer4: "Eric the Clown",
  correct: "Fourth Answer",
  image: `"https://imgix.ranker.com/user_node_img/50067/1001322639/original/the-fire-photo-u1?w=650&q=60&fm=pjpg&fit=crop&crop=faces%22" alt="painting of George pushing people out of the way"`
  },  
  {question: "What is Jerry's ACTUAL waist size",
  answer1: "31",
  answer2: "32",
  answer3: "33",
  answer4: "34",
  correct: "Second Answer",
  image: `"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8MwR9cehiXHtcNEnAdqVL1eX0xOufsO3yIbEMYx9Gi6Y2hEC" alt="painting of Jerry with the puffy shirt on"`
  },
  ]

function removeStartPage(){
  $('.start-page').addClass('hidden');
}

function updateQuestionNum(){
  $('.question-num').html(`${questionNumber+1} / 10`);
}

function updateScore(){
  $('.currentscore').html(`${score} / ${questionNumber}`)
}

function addQuestion(num){
  let question = STORE[num].question;
  let ans1 = STORE[num].answer1;
  let ans2 = STORE[num].answer2;
  let ans3 = STORE[num].answer3;
  let ans4 = STORE[num].answer4;
  $('.question-page').html(`<p class = "question">${question}</p>
    <div class = "answers">
      <label class = "first answer">
        <input type="radio" value="First Answer" name="ans" required>
        <span>${ans1}</span>
      </label>
      <label class = "second answer">
        <input type="radio" value="Second Answer" name="ans">
        <span>${ans2}</span>
      </label>
      <label class = "third answer">
        <input type="radio" value="Third Answer" name="ans">
        <span>${ans3}</span>
      </label>
      <label class = "fourth answer">
        <input type="radio" value="Fourth Answer" name="ans">
        <span>${ans4}</span>
      </label>
    </div>
      
        <button id = "answer-submit" type="submit">Submit</button>`);
}
function handleStartPage(){
  $('.start-page').on('click', '#take-quiz', function(event){
    console.log("starting the quiz");
    removeStartPage();
    updateQuestionNum();
    updateScore();
    addQuestion(questionNumber);
    $('html, body').animate({scrollTop:0}, 'slow');

  })
//render QuizApp
}



function rightAnswerPage(){
  $('.answer-page').html(`<div class = "right-or-wrong">You got it right!!!!<br><br><img class="images" src=${STORE[questionNumber].image} width=300px height=200></div>
        <button id = "next-question">NEXT</button>`);


}

function handleAnswerPage(){
  $('.answer-page').on('click','#next-question', function(){
    $('.answer-page').empty();
    if (questionNumber === 10){
      updateScore();
      $('html, body').animate({scrollTop:0}, 'slow');

      handleFinishPage();}
    else {
         updateQuestionNum();
         updateScore();
        $('html, body').animate({scrollTop:0}, 'slow');
         addQuestion(questionNumber);}
  })
}

function rightAnswer(){
  $('.question-page').empty();
  score++;
  rightAnswerPage();
  questionNumber++;
  
}

function wrongAnswerPage(rightAnswer){
  $('.answer-page').html(`<div class = "right-or-wrong">You got it wrong. <br><br>The correct answer was: ${rightAnswer} <br><br><img class="images" src=${STORE[questionNumber].image} width=300px height=200></div>
        <button id = "next-question">NEXT</button>`);

}

function wrongAnswer(answerNum){
  $('.question-page').empty();
  let rightIndex = 5;
  let rightAnswer = '';
  if (answerNum === 'First Answer'){ rightIndex = 'answer1';}
  else if (answerNum === 'Second Answer') {rightIndex = 'answer2';}
  else if (answerNum === 'Third Answer') {rightIndex = 'answer3';}
  else if (answerNum === 'Fourth Answer') {rightIndex = 'answer4';}
  rightAnswer = STORE[questionNumber][rightIndex];
  wrongAnswerPage(rightAnswer);
  questionNumber++;


}

function handleQuestionPage(){
  $('.question-page').submit(function(e){
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, 'slow');
    let userAnswer = $("input:checked").val();
    if (userAnswer === STORE[questionNumber].correct){
      rightAnswer();
    }
    else wrongAnswer(STORE[questionNumber].correct);
  })
}

function handleFinishPage(){
  if (score < 6){
  $('.result-page').html(`<p>Your score was ${score} / 10. <br><br>That's a shame.<br><br><img class="images" src="https://i.etsystatic.com/6709817/r/il/21e3ca/1577147516/il_794xN.1577147516_3fbd.jpg" alt="George on the floor with his pants down in Jerry's apartment" width=400px height=auto></p>
      <button id = "take-again">Take the test again?!</button>`)
  $('#take-again').click(function(event){
    $('.result-page').empty();
    questionNumber = 0;
    score = 0;
    $('html, body').animate({scrollTop:0}, 'slow');

    $('.start-page').removeClass('hidden');
  })}
  else{  $('.result-page').html(`<p>Your score was ${score} / 10! <br><br>Giiiiiiiddyup!<br><br><img class="images" src="https://cdn.funcheap.com/wp-content/uploads/2017/11/seinfeldart.jpg" alt="Kramer looking excited" width=400px height=auto></p>
      <button id = "take-again">Take the test again?!</button>`)
  $('#take-again').click(function(event){
    $('.result-page').empty();
    questionNumber = 0;
    score = 0;
    $('.start-page').removeClass('hidden');
  })}
}


function handleQuizApp(){
handleStartPage();
handleQuestionPage();
handleAnswerPage();
}
$(handleQuizApp);


