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

function loadQuestion() {
  const { question, choices } = quizData[0]
  questionContainer.textContent = question
  // choicesElement.innerHtml = ""
  choices.forEach((choice) => {
    const btn = document.createElement('button')
    btn.textContent = choice
    console.log(btn)
    choicesElement.appendChild(btn)
  })


}
loadQuestion()