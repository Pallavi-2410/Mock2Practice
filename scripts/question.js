import { baseUrl } from "./baseUrl.js";

window.onload = () => {
    getData();
};

function getData() {
    fetch(`${baseUrl}/questions`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            displayData(data);
        })
        .catch((err) => {
            alert("something went wrong");
            console.log(err);
        });
}

function displayData(arr) {
    let cont = document.getElementById("cont");
    cont.innerHTML = "";
    let newArr = arr.filter((el, i) => el.reviewStatus == true)
    newArr.map((el, i) => {
        let card = document.createElement("div");
        let title = document.createElement("h4");
        title.textContent = `Title: ${el.title}`;

        let optionA = document.createElement("h4");
        optionA.textContent = `A: ${el.optionA}`;

        let optionB = document.createElement("h4");
        optionB.textContent = `B: ${el.optionB}`;

        let optionC = document.createElement("h4");
        optionC.textContent = `C: ${el.optionC}`;

        let optionD = document.createElement("h4");
        optionD.textContent = `D: ${el.optionD}`;

        let correctOption = document.createElement("h4");
        correctOption.textContent = `Correct Option: ${el.correctOption}`;

        let reviewStatus = document.createElement("h4");
        if (el.reviewStatus == true) {
            reviewStatus.textContent = "Status: Reveiwed";
        } else {
            reviewStatus.textContent = "Status: Pending";
        }
        card.append(
            title,
            optionA,
            optionB,
            optionC,
            optionD,
            correctOption,
            reviewStatus,
        );
        cont.append(card);
})        
    };


