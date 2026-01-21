const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        correct: 1
    },
    {
        question: "Which is used for web logic?",
        options: ["CSS", "HTML", "JavaScript", "C"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.getElementsByClassName("option");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].innerText = q.options[i];
        optionBtns[i].disabled = false;
    }
}

function checkAnswer(selected) {
    let correctAnswer = quizData[currentQuestion].correct;

    if (selected === correctAnswer) {
        score++;
    }

    for (let btn of optionBtns) {
        btn.disabled = true;
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.innerText = "Quiz Completed!";
    document.querySelector(".options").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}