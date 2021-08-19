const loader = document.querySelector(".loader");
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");
const cover = document.querySelector(".cover");

const data = [
  {
    id: 0,
    question:
      "Relcer has ___________component which ensures anti inflammatory actions leading to mucosal healing.",
    option: [
      "Aluminium hydroxide",
      "Deglycyrrhizinated Liquorice",
      "Magnesium Hydroxide",
    ],
    correct: "Aluminium hydroxide",
  },
  {
    id: 1,
    question:
      "Relcer has ___________component which ensures anti inflammatory actions leading to mucosal healing.",
    option: [
      "Aluminium hydroxide",
      "Deglycyrrhizinated Liquorice",
      "Magnesium Hydroxide",
    ],
    correct: "Aluminium hydroxide",
  },
  {
    id: 2,
    question:
      "Relcer has ___________component which ensures anti inflammatory actions leading to mucosal healing.",
    option: [
      "Aluminium hydroxide",
      "Deglycyrrhizinated Liquorice",
      "Magnesium Hydroxide",
    ],
    correct: "Aluminium hydroxide",
  },
  {
    id: 3,
    question:
      "Relcer has ___________component which ensures anti inflammatory actions leading to mucosal healing.",
    option: [
      "Aluminium hydroxide",
      "Deglycyrrhizinated Liquorice",
      "Magnesium Hydroxide",
    ],
    correct: "Aluminium hydroxide",
  },
  {
    id: 4,
    question:
      "Relcer has ___________component which ensures anti inflammatory actions leading to mucosal healing.",
    option: [
      "Aluminium hydroxide",
      "Deglycyrrhizinated Liquorice",
      "Magnesium Hydroxide",
    ],
    correct: "Aluminium hydroxide",
  },
];
window.addEventListener("load", (event) => {
  loader.remove();
  screen1.classList.add("active");
  setTimeout(() => {
    document.querySelectorAll(".old").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelectorAll(".new").forEach((item) => {
      item.classList.add("active");
      setTimeout(() => {
        document.querySelector(".playUnit").classList.add("active");
      }, 1000);
    });
  }, 2000);
});

const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  document.querySelector(".revealBlock").classList.add("show");
  setTimeout(() => {
    screen1.classList.remove("active");
    screen2.classList.add("active");
  }, 200);
  cover.classList.add("active");
});
