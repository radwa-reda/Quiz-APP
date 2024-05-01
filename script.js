
var time =document.getElementById("timer");
let markedQuestions = [];
var time = setInterval(myTimer, 1000);
let sec=130;
function myTimer() {
  let minutes, seconds;
  minutes= parseInt(sec/60);
  seconds= parseInt(sec % 60);
    document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        window.location.replace('time_out.html');
    }
}
class Question {
  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}
class Answer {
  constructor(answer, isCorrect) {
    this.answer = answer;
    this.isCorrect = isCorrect;
  }
}
var question1 = new Question("The full form of CSS is?", [
  new Answer("Cascading Style Sheets", true),
  new Answer("color and style sheets", false),
  new Answer("coloured special sheets", false),
  new Answer("None of the above", false),
]);
var question2 = new Question(
  "How can we change the background color of an element?",
  [
    new Answer("color", false),
    new Answer("background-color", true),
    new Answer("Both A and B", false),
    new Answer("None of the above", false),
  ]
);

var question3 = new Question(
  "How can we change the text color of an element?",
  [
    new Answer("background-color", false),
    new Answer("Color", true),
    new Answer("Both A and B", false),
    new Answer("None of the above", false),
  ]
);

var question4 = new Question("In how many ways can CSS be written in?", [
  new Answer("1", false),
  new Answer("2", false),
  new Answer("3", true),
  new Answer("4", false),
]);

var question5 = new Question(
  "What type of CSS is generally recommended for designing large web pages?",
  [
    new Answer("External", true),
    new Answer("Internal", false),
    new Answer("Inline", false),
    new Answer("None of the above", false),
  ]
);
var questions = [question1, question2, question3, question4, question5];
let arr = [];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let currentQuestionIndex = 0;
const shuffle = shuffleArray(questions);

function displayQuiz() {
  const quizContainer = document.getElementById("quiz");
  currentQuestionIndex = 0;

  function showQuestion(i = 0) {
    checkButtons();
    const currentQuestion = shuffle[i];
    const questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestion.question;
    const answerElements = document.querySelectorAll(".answer");
    answerElements.forEach((answerElement, index) => {
      answerElement.nextElementSibling.textContent =
        currentQuestion.answers[index].answer;
      answerElement.value = currentQuestion.answers[index].answer;
      checkSelected(i);
    });
  }

  function checkButtons() {
    if (currentQuestionIndex == shuffle.length - 1) {
      document.getElementById("next").disabled = true;
      document.getElementById("previous").disabled = false;
    } else if (currentQuestionIndex == 0) {
      document.getElementById("next").disabled = false;
      document.getElementById("previous").disabled = true;
    } else {
      document.getElementById("next").disabled = false;
      document.getElementById("previous").disabled = false;
    }
  }

  function showNextQuestion() {
    currentQuestionIndex++;
    const number = document.getElementById("number");
    number.textContent = currentQuestionIndex + 1;
    if (currentQuestionIndex === shuffle.length - 1) {
      document.getElementById("next").disabled = true;
    }
    showQuestion(currentQuestionIndex);
    checkSelected(currentQuestionIndex);
     
  }
  
  function showPreviousQuestion() {
    currentQuestionIndex--;
    if (currentQuestionIndex == 0) {
      document.getElementById("previous").setAttribute("disabled", true);
    } else {
      document.getElementById("previous").setAttribute("disabled", false);
    }
    const number = document.getElementById("number");
    number.textContent = currentQuestionIndex + 1;
    showQuestion(currentQuestionIndex);
    checkSelected(currentQuestionIndex);
 
  }
 
  function showQuizMark() {
    if (!markedQuestions.includes(currentQuestionIndex)) {
      const divOfMark = document.createElement("div");
      const questionNumber = +currentQuestionIndex + 1;
      divOfMark.innerHTML = `Question ${questionNumber} <span class="delete-mark" data-index="${currentQuestionIndex}">&#x274C;</span>`;
      const quizMark = document.getElementsByClassName("quiz-mark")[0];
      quizMark.append(divOfMark);
      divOfMark.id = currentQuestionIndex;
      divOfMark.classList.add(`divOfMark_${currentQuestionIndex}`);
      divOfMark.style.cursor = "pointer";
      divOfMark.style.padding = "10px";
      divOfMark.style.border = "1px solid #ccc";
      divOfMark.style.margin = "10px";
      divOfMark.style.backgroundColor = "#f0f0f0";
      divOfMark.style.color = "#346eed";
  
      markedQuestions.push(currentQuestionIndex);
  
      divOfMark.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-mark")) {
          const indexToDelete = e.target.getAttribute("data-index");
          removeMarkedQuestion(indexToDelete);
        } else {
          showQuestion(e.target.id);
          currentQuestionIndex = e.target.id;
          document.getElementById("number").innerHTML =
            +currentQuestionIndex + 1;
        }
      });
    }
  }
  
  
  function removeMarkedQuestion(currentQuestionIndex) {
    const indexToRemove = markedQuestions.indexOf(currentQuestionIndex);
    if (indexToRemove !== -1) {
      markedQuestions.splice(indexToRemove, 1);
    }
  
    const quizMark = document.getElementsByClassName("quiz-mark")[0];
    const markedQuestion = quizMark.querySelector(`.divOfMark_${currentQuestionIndex}`);

    console.log("markedQuestion",markedQuestion)
    if (markedQuestion) {
      quizMark.removeChild(markedQuestion);
    }
  }
  

  document.getElementById("next").addEventListener("click", showNextQuestion);
  document
    .getElementById("previous")
    .addEventListener("click", showPreviousQuestion);
  showQuestion();
  document.getElementById("mark").addEventListener("click", showQuizMark);
}

let score = 0;
let selectedAnswers = [];
document.querySelectorAll(".answer").forEach((ele) => {
  ele.addEventListener("click", function () {
    selectedAnswers[currentQuestionIndex] = ele.value;
  });
});

function calculateResults() {
  for (let i = 0; i < shuffle.length; i++) {
    const correctAnswer = shuffle[i].answers.find(
      (answer) => answer.isCorrect
    ).answer;
    const selectedAnswer = selectedAnswers[i];

    if (selectedAnswer === correctAnswer) {
      score++;
    }
  }
}

function checkSelected(i) {
  document.querySelectorAll(".answer").forEach((ele) => {
    if (ele.value == selectedAnswers[i]) {
      ele.checked = true;
    } else {
      ele.checked = false;
    }
  });
}

function submitExam() {
  let unansweredQuestions = [];

  for (let i = 0; i < markedQuestions.length; i++) {
    if (!selectedAnswers[markedQuestions[i]]) {
      unansweredQuestions.push(markedQuestions[i] + 1);
    }
  }

  if (unansweredQuestions.length > 0 ) {
    
    Swal.fire({
      icon: 'error',
      title: 'Submitting Error',
      text: 'Please answer the following marked questions before submitting.',
      customClass: {
        confirmButton: 'custom-confirm-class',
      }
   
    });
    unansweredQuestions=[];
  } else if(unansweredQuestions.length === 0){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!"
    }).then((result) => {
      if (result.isConfirmed) {
        calculateResults();
        localStorage.setItem("score", score);
        location.replace("Grade.html");
      }
    });
  
  }
  else {
    calculateResults();
    localStorage.setItem("score", score);
    location.replace("Grade.html");
  }
}

document.getElementById("submit").addEventListener("click", submitExam);
displayQuiz();

