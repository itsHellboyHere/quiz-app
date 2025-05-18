const quizData = [
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    choices: ['4', '22', 'NaN', 'Error'],
    correctAnswer: 1,
  },
  {
    question: 'Which method is used to add elements to the end of an array?',
    choices: ['push()', 'pop()', 'unshift()', 'shift()'],
    correctAnswer: 0,
  },
  {
    question: 'What does `NaN` stand for in JavaScript?',
    choices: [
      'No Any Number',
      'Negative Any Number',
      'Null and None',
      'Not a Number',
    ],
    correctAnswer: 3,
  },
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const wrongAnswers = []
let currenQuestion = 0
let score = 0
function loadQuestion() {
  const { question, choices } = quizData[currenQuestion]
  questionElement.textContent = question
  choicesElement.innerHTML = ""
  choices.forEach((choice, index) => {
    const btn = document.createElement('button')
    btn.textContent = choice
    btn.addEventListener('click', () => selectIndex(index))
    console.log(btn)
    choicesElement.appendChild(btn)
  });


}
function selectIndex(index) {
  [...choicesElement.children].forEach(button => {
    button.classList.remove('selected')
  })
  choicesElement.children[index].classList.add('selected')

}
function submitAnswer() {
  const selectedButton = choicesElement.querySelector('.selected')
  if (!selectedButton) return;
  const selectedIndex = [...choicesElement.children].indexOf(selectedButton)
  if (selectedIndex === quizData[currenQuestion].correctAnswer) {
    score++
  } else {
    console.log(quizData[currenQuestion].correctAnswer)
    wrongAnswers.push(
      {
        question: quizData[currenQuestion].question,
        userAnswer: quizData[currenQuestion].choices[selectedIndex],
        correctAnswer: quizData[currenQuestion].choices[
          quizData[currenQuestion].currenQuestion
        ],
      }
    )
  }
  currenQuestion++;
  if (currenQuestion < quizData.length) {
    loadQuestion()
  } else {
    showResults()
  }

}
function showResults() {
  questionContainer.style.display = 'none'
  submitButton.style.display = 'none'
  let resultHtml = `
  <p class='score'>
  You scored
  ${Math.round((score * 100) / quizData.length)}%
(${score} out of ${quizData.length})
  </p>
  `
  if (wrongAnswers.length > 0) {
    resultHtml += "<h3>Wrong Answers</h3>";
    resultHtml += "<ul>";
    wrongAnswers.forEach(answer => {
      resultHtml += `
      <li>
      <p> Question : ${answer.question}</p>
      <p> UserAnswer: ${answer.userAnswer}</p>
      <p> CorrectAnswer: ${answer.correctAnswer} </p>
      </li>
      `
    })
    resultHtml += "</ul>"
  }
  resultElement.innerHTML = resultHtml
}
submitButton.addEventListener('click', submitAnswer)
loadQuestion()