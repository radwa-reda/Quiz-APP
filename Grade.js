var firstName = getCookies("first_name");
var lastName = getCookies("last_name");
const resultsContainer = document.getElementById("results");
const score = parseInt(localStorage.getItem("score"));

const h1 = document.createElement("h2");
h1.innerHTML = firstName + " " + lastName;

if (score >= 3) {
    const divContainer = document.createElement("div");
    const Congrat_img = document.createElement("img");
    Congrat_img.setAttribute("src", "images/congratolation.png");
    divContainer.appendChild(Congrat_img);
    divContainer.appendChild(h1);
    resultsContainer.innerHTML += `Your score is: ${score}/5`;
    resultsContainer.appendChild(divContainer);
} else {
    const sorry_img = document.createElement("img");
    sorry_img.setAttribute("src", "images/sorry.png");
    h1.innerHTML = firstName + " " + lastName + ", You failed!";
    resultsContainer.appendChild(h1);
    resultsContainer.appendChild(sorry_img);
    resultsContainer.innerHTML += `Your score is: ${score}/5`;
}
