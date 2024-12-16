const rangeInputs = document.querySelectorAll(`input[type="range"]`);
const numberInputs = document.querySelectorAll(`input[type="number"]`);
const submitButton = document.querySelector(`input[type="button"]`);
const answerDiv = document.querySelector(`#answers`);
const toggle = document.querySelector(`#toggle`);
const header = document.querySelector(`#header`);
const body = document.body;
const formulaButton = document.querySelector("#formula-button");
const formulaContainer = document.querySelector("#formula-container");
const formulaDiv = document.querySelector("#formula-div");

const headingTitle = document.createElement("p");
headingTitle.id = "heading-title";
// headingTitle.classList.add(".toggle-theme");
let isToggled = false;
let maxValue = 100;

function syncInputs(inputA, inputB) {
  inputA.forEach(input1 => {
    input1.addEventListener("input", () => {
      inputB.forEach(input2 => {
        if (input1.id === input2.id) {
          input2.value = input1.value;
          isToggled ? starToDeltaConverter() : deltaToStarConverter();
        }
      });
    });
  });
}

syncInputs(rangeInputs, numberInputs);
syncInputs(numberInputs, rangeInputs);

toggle.addEventListener("click", () => {
  const toggleButton = document.querySelector("#toggle-button");

  if (isToggled) {
    toggleButton.classList.remove("translate-toggle");
    toggleButton.classList.add("translate-back-toggle");
    body.classList.remove("theme-green");
    body.classList.add("theme-blue");
  } else {
    toggleButton.classList.remove("translate-back-toggle");
    toggleButton.classList.add("translate-toggle");
    body.classList.remove("theme-blue");
    body.classList.add("theme-green");

  }
  headingTitle.innerText = isToggled ? "Delta to Star Converter" : "Star to Delta Converter";
  isToggled ? deltaToStarConverter() : starToDeltaConverter();
  isToggled = !isToggled;
})

headingTitle.innerText = isToggled ? "Star to Delta Converter" : "Delta to Star Converter";
header.appendChild(headingTitle);

isToggled ? starToDeltaConverter() : deltaToStarConverter();

function deltaToStarConverter() {
  let Ra, Rb, Rc;
  // submitButton.addEventListener("click", () => {
  const rV = getValues();

  Ra = (rV[0] * rV[1]) / (rV[0] + rV[1] + rV[2]);
  Rb = (rV[1] * rV[2]) / (rV[0] + rV[1] + rV[2]);
  Rc = (rV[2] * rV[0]) / (rV[0] + rV[1] + rV[2]);
  Ra = Ra.toFixed(4);
  Rb = Rb.toFixed(4);
  Rc = Rc.toFixed(4);
  answerDiv.innerHTML = "";
  answerDiv.innerHTML = `
      <div class="resistanceValues">RA : ${Ra}</div>
      <div class="resistanceValues">RB : ${Rb}</div>
      <div class="resistanceValues">RC : ${Rc}</div>`;
  // })
}

function starToDeltaConverter() {
  let Rac, Rab, Rbc;
  // submitButton.addEventListener("click", () => {
  const rV = getValues();

  Rac = ((rV[0] * rV[1]) + (rV[1] * rV[2]) + (rV[2] * rV[0])) / rV[2];
  Rab = ((rV[0] * rV[1]) + (rV[1] * rV[2]) + (rV[2] * rV[0])) / rV[1];
  Rbc = ((rV[0] * rV[1]) + (rV[1] * rV[2]) + (rV[2] * rV[0])) / rV[0];


  Rac = Rac.toFixed(4);
  Rab = Rab.toFixed(4);
  Rbc = Rbc.toFixed(4);
  answerDiv.innerHTML = "";
  answerDiv.innerHTML = `
      <div class="resistanceValues">RAC : ${Rac}</div>
      <div class="resistanceValues">RAB : ${Rab}</div>
      <div class="resistanceValues">RBC : ${Rbc}</div>`;
  // })
}

function getValues() {
  let rV = [];
  numberInputs.forEach(numberInput => {
    rV.push(parseFloat(numberInput.value));
    // console.log(rV);
  })
  maxValueErrorHandling(rV);
  return rV;
}

function maxValueErrorHandling(rV) {
  rV.forEach((rValue, index) => {
    if (rValue > maxValue) {
      maxValue += (rValue - maxValue);
      rangeInputs[index].max = maxValue;
      rangeInputs[index].value = rValue;
    }
  })
}

formulaButton.addEventListener("click", () => {
  formulaContainer.style.display = "flex";
  let formulaDivData;
  if (isToggled) {
    formulaDivData = ` 
    <h2>Star (Y) to Delta (Δ):</h2>
    <div>
      \\(R_{AB} = \\frac{R_1 R_2 + R_2 R_3 + R_3 R_1}{R_3} \\) 
    </div>
    <div>
      \\(R_{BC} = \\frac{R_1 R_2 + R_2 R_3 + R_3 R_1}{R_1}\\) 
    </div>
    <div>
      \\(R_{CA} = \\frac{R_1 R_2 + R_2 R_3 + R_3 R_1}{R_2}\\)
    </div>`;
  } else {
    formulaDivData = ` 
    <h2>Delta (Δ) to Star (Y):</h2>
    <div>
      \\(R_A = \\frac{R_1 R_2}{R_1 + R_2 + R_3} \\) 
    </div>
    <div>
      \\(R_B = \\frac{R_2 R_3}{R_1 + R_2 + R_3}\\) 
    </div>
    <div>
      \\(R_C = \\frac{R_1 R_3}{R_1 + R_2 + R_3}\\)
    </div>`;
  }

  formulaDiv.innerHTML = formulaDivData;
  MathJax.typeset();
});


formulaContainer.addEventListener("click", () => {
  formulaContainer.style.display = "none";
})