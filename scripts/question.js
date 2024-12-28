import { baseUrl } from "./baseUrl";

function fetchReviewedQuestion() {
    fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(data => {
            let grid = document.getElementById("reviewedQuestionGrid")
            grid.innerHTML = "";
            let reviewedQuestion = data.filter(questions => questions.reviewStatus == true)
            reviewedQuestion.forEach(questions => {
                let card = document.createElement("div")
                card.className = "question-card"
                card.style.borderColor = "violet"
                card.innerHTML = `
            <h3>${questions.title}</h3>
            <h3>${questions.optionA}</h3>
            <h3>${questions.optionB}</h3>
            <h3>${questions.optionC}</h3>
            <h3>${questions.optionD}</h3>
            `
            grid.appendChild(card)
            });            
        });
}
fetchReviewedQuestion()