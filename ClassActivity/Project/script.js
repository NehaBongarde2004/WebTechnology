let quizData = JSON.parse(localStorage.getItem("quizQuestions")) || [];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");

/* ADD QUESTION (ADMIN) */
function addQuestion() {
    const question = qText.value;
    const options = [opt1.value, opt2.value, opt3.value, opt4.value];
    const answer = correct.value;

    if (!question || options.includes("") || !answer) {
        alert("Please fill all fields");
        return;
    }

    quizData.push({ question, options, answer });
    localStorage.setItem("quizQuestions", JSON.stringify(quizData));

    alert("Question added");

    qText.value = opt1.value = opt2.value = opt3.value = opt4.value = correct.value = "";
}

/* START QUIZ */
function startQuiz() {
    if (quizData.length === 0) {
        alert("Add at least one question");
        return;
    }

    document.querySelectorAll(".quizcontainer")[0].style.display = "none";
    quizContainer.style.display = "flex";

    loadQuestion();
}

/* LOAD QUESTION */
function loadQuestion() {
    optionsContainer.innerHTML = "";
    selectedOption = null;

    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");

        button.onclick = () => {
            selectedOption = option;
            document.querySelectorAll(".option-btn")
                .forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        };

        optionsContainer.appendChild(button);
    });
}

/* NEXT BUTTON */
nextBtn.onclick = () => {
    if (!selectedOption) {
        alert("Select an option");
        return;
    }

    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === quizData.length) {
        showResult();
    } else {
        loadQuestion();
        if (currentQuestionIndex === quizData.length - 1) {
            nextBtn.textContent = "Submit";
        }
    }
};

/* SHOW RESULT */
function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "flex";
    scoreContainer.textContent = `${score} / ${quizData.length}`;
}

/* RESTART */
function restartQuiz() {
    location.reload();
}