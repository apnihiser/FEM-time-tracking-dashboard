// VARIABLES
const workCurrentHours = document.getElementById("work-current-hours");
const workPreviousHours = document.getElementById("work-previous-hours");
const playCurrentHours = document.getElementById("place-current-hours");
const playPreviousHours = document.getElementById("place-previous-hours");
const studyCurrentHours = document.getElementById("study-current-hours");
const studyPreviousHours = document.getElementById("study-previous-hours");
const exerciseCurrentHours = document.getElementById("exercise-current-hours");
const exercisePreviousHours = document.getElementById(
  "exercise-previous-hours"
);
const socialCurrentHours = document.getElementById("social-current-hours");
const socialPreviousHours = document.getElementById("social-previous-hours");
const selfCareCurrentHours = document.getElementById("selfcare-current-hours");
const selfCarePreviousHours = document.getElementById(
  "selfcare-previous-hours"
);
const parentEl = document.querySelector("article");
const cards = document.querySelectorAll(".card");
const state = {};
// FUNCTIONS
const data = function () {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      if (!data) return;
      data.forEach((item) => console.log(item));
    })
    .catch((err) => alert(err));
};

data();
console.log(cards);

// EVENT LISTENERS

// hover effect on cards
parentEl.addEventListener("mouseover", function (e) {
  const target = e.target.closest(".inner-card-front");

  if (!target) return;

  target.style.backgroundColor = "rgb(111, 118, 200)";
});

parentEl.addEventListener("mouseout", function (e) {
  const target = e.target.closest(".inner-card-front");

  if (!target) return;

  target.style.backgroundColor = "hsl(235, 46%, 20%)";
});
