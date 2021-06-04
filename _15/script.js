const  quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of HTML?",
        a: "Hypertext Makeup Language",
        b: "Hello To My Land",
        c: "Hypertext Markup Language",
        d: "Hey Text Markup Language",
        ans: "ans3"
    },
    {
        question: "Q3: What is the full form of HTML?",
        a: "Hey Text Markup Language",
        b: "Hypertext Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hello To My Land",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q5: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hypertext Markup Language",
        c: "Hey Text Markup Language",
        d: "Hypertext Makeup Language",
        ans: "ans3"
    }
];

const Question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore');
const live__Score = document.querySelector('#live__Score');

let questionCount = 0;
let timerCount = 0;
let score = 0;
let tconqVlu = 0;

const loadQuestion = ()=>{
    
    const questionList = quizDB[questionCount];

    Question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


    
}
loadQuestion();


const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
};


function nextQuestion(){
    questionCount++;
    loadQuestion();
}



submit.addEventListener("click", ()=>{
    if (questionCount < quizDB.length) {
        nextQuestion();
    }
    const checkedAnswer = getCheckAnswer();
    const checkedAnswerText = $(".answer:checked + label").text();
    console.log(checkedAnswerText);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    }
});


updateScore();
setTimeout(() => {
    
updateScore();
}, 300);

function updateScore(){
    live__Score.innerHTML = score + "/" + quizDB.length; 
}