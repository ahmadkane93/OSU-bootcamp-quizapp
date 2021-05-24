const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const choices = Array.from(document.getElementsByClassName("btn"));
const highScoreButton = document.getElementById('highScore-btn')
const questionContainerElement = document.getElementById('question-container')
const timerBoxElement = document.getElementById('timer-text')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let userScore= 0;
let shuffleQuestions, currentQuestionIndex



highScoreButton.addEventListener('click', viewHighScores)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){

startButton.classList.add('hide')
highScoreButton.classList.add('hide')
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
timerBoxElement.classList.remove('hide')
setNextQuestion()

}

function viewHighScores (){

}



function setNextQuestion () {
resetState()
showQuestion(shuffleQuestions[currentQuestionIndex])
}


function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})

}

function resetState(){
    clearStatusClass(document.body)
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}

}

// Select Answer Properties

function selectAnswer (e){
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button =>{
     setStatusClass(button, button.dataset.correct)
 })
if (shuffleQuestions.length > currentQuestionIndex + 1){
nextButton.classList.remove('hide')
} else {
    window.location.href ="end.html";
    startButton.classList.remove('hide')
}

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
       
       console.log(userScore);
    } else {
        element.classList.add('wrong')
       
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//  Questions Array

const questions = [
{
    question: 'Why so JavaScript and Java have similar name?',
    answers: [
        {text: 'A.Javascript is a stripped-down version of Java.', correct: false},
        {text: 'B.Javascript syntax is loosely based on Java', correct: true},
        {text: 'C.They both originated on the island of Java', correct: false},
        {text: 'D.None of the above', correct: false}
    ]

},

{
    question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
    answers: [
        {text: 'A. The User  machine running a Web browser', correct: true},
        {text: 'B. The Web server', correct: false},
        {text: 'C. A central machine deep within Netscapes corporate offices', correct: false},
        {text: 'D. None of the above', correct: false}
    ]

},

{
    question: '_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
    answers: [
        {text: 'A. Client-side', correct: true},
        {text: 'B. Server-side', correct: false},
        {text: 'C. Local', correct: false},
        {text: 'D. Native', correct: false}
    ]

},

{
    question: 'What should appear at the very end of your JavaScript?',
    answers: [
        {text: 'A. The </script>', correct: true},
        {text: 'C. The END statement', correct: false},
        {text: 'B. The <script>', correct: false},
        {text: 'D. None of the above', correct: false}
    ]

},


{
    question: 'What are variables used for in JavaScript Programs?',
    answers: [
        {text: 'A. Storing numbers, dates, or other values', correct: true},
        {text: 'B. Varying randomly', correct: false},
        {text: 'C. Causing high-school algebra flashbacks', correct: false},
        {text: 'D. None of the above', correct: false},
    ]

}



]
// Timer Properties

let timeSecond = 30;
const timeH = document.querySelector("h2");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;

 
}

function endCount() {
    window.location.href ="end.html";
    startButton.classList.remove('hide')
}

