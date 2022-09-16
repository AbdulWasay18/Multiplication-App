let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let questionEl = document.getElementById("question");
let formEl = document.getElementById("form");
let inputEl = document.getElementById("input");
let scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;
let correctAns = num1 * num2;
formEl.addEventListener("submit", () => {
    let userAns = +inputEl.value;
    if (userAns == correctAns) {
        score++;
        updatelocalstorage();
    } else {
        score--;
        updatelocalstorage();
    }
});


scoreEl.innerText = `score ${score}`;

function updatelocalstorage() {
    localStorage.setItem("score", JSON.stringify(score))
};