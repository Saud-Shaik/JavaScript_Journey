const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "shark", correct: false},
            { text: "Blues whale", correct: True},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Entomology is the science that studies?",
        answers: [
            { text: "Behavior of human beings", correct: false},
            { text: "The origin and history of technical and scientific terms", correct: false},
            { text: "Insects", correct: true},
            { text: "The formation of rocks", correct: false},
        ]
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        answers: [
            { text: "Africa", correct: true},
            { text: "Asia", correct: false},
            { text: "Europe", correct: false},
            { text: "Australia", correct: false},
        ]
    },
    {
        question: "Garampani sanctuary is located at",
        answers: [
            { text: "Junagarh, Gujarat", correct: false},
            { text: "Kohima, Nagaland", correct: false},
            { text: "Gangtok, Sikkim", correct: false},
            { text: "Diphu, Assam", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");

    }
}
startQuiz();


