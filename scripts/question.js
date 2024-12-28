import { baseUrl } from "./baseUrl";

function fetchReviewedQuestion() {
    fetch(`${baseUrl}`)
        .then(res => res.json())
        .then(data => {
            let grid = document.getElementById("reviewedQuestionGrid")
            grid.innerHTML = "";
            let reviewedQuestion = data.filter(q => q.reviewStatus == true)
            reviewedQuestion.forEach(question => {
                let card = document.createElement("div")
                card.className = "question-card"
                card.style.borderColor = "violet"
                card.innerHTML = `
            <h3>${question.title}</h3>
            <h3>${question.optionA}</h3>
            <h3>${question.optionB}</h3>
            <h3>${question.optionC}</h3>
            <h3>${question.optionD}</h3>
            `
            grid.appendChild(card)
            });            
        });
}
fetchReviewedQuestion()