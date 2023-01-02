const quizData = [
    {
        question: "How old is Florin",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c"
    },{
        question: "What is the best programming language",
        a: "java",
        b: "C",
        c: "python",
        d: "javaScript",
        correct: "d"
    },{
        question: "Who is the president of US",
        a: "florin pop",
        b: "donald trump",
        c: "ivan saldano",
        d: "mihai andrei",
        correct: "b"
    },{
        question: "what does HTML stand for",
        a: "hypertext markup language",
        b: "cascading style sheet",
        c: "jason object notation",
        d: "application programming interface",
        correct: "a"
    },{
        question: "what year was javascript launched",
        a: "2020",
        b: "2019",
        c: "2018",
        d: "none of the above",
        correct: "d"
    }
];
const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deSelect();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getSelected(){
    let answer = undefined;
    answerE1s.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}
function deSelect(){
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}
submitBtn.addEventListener("click", () =>{
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            alert("your score is" +score);
        }
    }
});