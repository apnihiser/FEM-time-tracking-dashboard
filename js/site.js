// VARIABLES
const cardsParentEl = document.querySelector(".cards-container");
const linksParentEl = document.querySelector(".time-selector");

let state = {};

// FUNCTIONS
const fetchData = function () {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      if (!data) return;

      state = data;

      state.forEach((card) => renderCardsDaily(card));
    })
    .catch((err) => console.error("💩💩💩:", err));
};

const removeWhiteSpace = function (word) {
  return word.replace(/\s+/g, "-");
};

const renderCardsDaily = function (card) {
  cardsParentEl.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card border-radius-med">
    <div class="inner-card-back ${removeWhiteSpace(
      card.title
    ).toLowerCase()}-card-bg border-radius-med">
    </div>
    <div class="inner-card-front border-radius-med padding-med">
      <div class="card-title">
        <div class="card-title">${card.title}</div>
        <div class="ellipsis"><img src="/images/icon-ellipsis.svg" /></div>
      </div>
      <div class="card-data">
        <div class="current-hours">${card.timeframes.daily.current}hrs</div>
        <div class="previous-hours">Yesterday &mdash; ${
          card.timeframes.daily.previous
        }hrs</div>
      </div>
    </div>
  </div>
  `
  );
};

const renderCardsWeekly = function (card) {
  cardsParentEl.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card border-radius-med">
    <div class="inner-card-back ${removeWhiteSpace(
      card.title
    ).toLowerCase()}-card-bg border-radius-med">
    </div>
    <div class="inner-card-front border-radius-med padding-med">
      <div class="card-title">
        <div class="card-title">${card.title}</div>
        <div class="ellipsis"><img src="/images/icon-ellipsis.svg" /></div>
      </div>
      <div class="card-data">
        <div class="current-hours">${card.timeframes.weekly.current}hrs</div>
        <div class="previous-hours">Last Week &mdash; ${
          card.timeframes.weekly.previous
        }hrs</div>
      </div>
    </div>
  </div>
  `
  );
};

const renderCardsMonthly = function (card) {
  cardsParentEl.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card border-radius-med">
    <div class="inner-card-back ${removeWhiteSpace(
      card.title
    ).toLowerCase()}-card-bg border-radius-med">
    </div>
    <div class="inner-card-front border-radius-med padding-med">
      <div class="card-title">
        <div class="card-title">${card.title}</div>
        <div class="ellipsis"><img src="/images/icon-ellipsis.svg" /></div>
      </div>
      <div class="card-data">
        <div class="current-hours">${card.timeframes.monthly.current}hrs</div>
        <div class="previous-hours">Last Month &mdash; ${
          card.timeframes.monthly.previous
        }hrs</div>
      </div>
    </div>
  </div>
  `
  );
};

// EVENT LISTENERS

// hover effect on cards
cardsParentEl.addEventListener("mouseover", function (e) {
  const target = e.target.closest(".inner-card-front");

  if (!target) return;

  target.style.backgroundColor = "rgb(111, 118, 200)";
});

cardsParentEl.addEventListener("mouseout", function (e) {
  const target = e.target.closest(".inner-card-front");

  if (!target) return;

  target.style.backgroundColor = "hsl(235, 46%, 20%)";
});

// Click Link Events
linksParentEl.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains("daily-link")) {
    cardsParentEl.innerHTML = "";
    state.forEach((card) => renderCardsDaily(card));
  }

  if (target.classList.contains("weekly-link")) {
    cardsParentEl.innerHTML = "";
    state.forEach((card) => renderCardsWeekly(card));
  }
  if (target.classList.contains("monthly-link")) {
    cardsParentEl.innerHTML = "";
    state.forEach((card) => renderCardsMonthly(card));
  }
});

fetchData();
