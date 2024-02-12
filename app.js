// getting Subhanallah
const subhanallahValue = document.getElementById("subhanallahValue");
const subhanallahIncBtn = document.getElementById("subhanallahIncBtn");
const subhanallahDecBtn = document.getElementById("subhanallahDecBtn");

// getting Alhamdulillah
const alhamdulillahValue = document.getElementById("alhamdulillahValue");
const alhamdulillahIncBtn = document.getElementById("alhamdulillahIncBtn");
const alhamdulillahDecBtn = document.getElementById("alhamdulillahDecBtn");

// getting Allahu Akbar
const allahuakbarValue = document.getElementById("allahuakbarValue");
const allahuakbarIncBtn = document.getElementById("allahuakbarIncBtn");
const allahuakbarDecBtn = document.getElementById("allahuakbarDecBtn");

// getting Reset button
const resetBtn = document.getElementById("resetBtn");

let subhanallahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuakbarInitialValue = 0;

// Subhanallah event
subhanallahIncBtn.addEventListener("click", function () {
  if (subhanallahInitialValue === 33) {
    alert("Subhanallah Completed, Start next Tasbih");
  } else {
    subhanallahInitialValue += 1;
    subhanallahValue.innerText = subhanallahInitialValue;
  }
});
subhanallahDecBtn.addEventListener("click", function () {
  if (subhanallahInitialValue <= 0) {
    alert("Trying to go negative? its not possible");
  } else {
    subhanallahInitialValue -= 1;
    subhanallahValue.innerText = subhanallahInitialValue;
  }
});

// Alhamdulillah event
alhamdulillahIncBtn.addEventListener("click", function () {
  if (alhamdulillahInitialValue === 33) {
    alert("Alhamdulillah Completed, Start next Tasbih");
  } else {
    alhamdulillahInitialValue += 1;
    alhamdulillahValue.innerText = alhamdulillahInitialValue;
  }
});
alhamdulillahDecBtn.addEventListener("click", function () {
  if (alhamdulillahInitialValue <= 0) {
    alert("Trying to go negative? its not possible");
  } else {
    alhamdulillahInitialValue -= 1;
    alhamdulillahValue.innerText = alhamdulillahInitialValue;
  }
});

// Allahu Akbar event
allahuakbarIncBtn.addEventListener("click", function () {
  if (allahuakbarInitialValue === 34) {
    alert("Allahuakbar Completed");
  } else {
    allahuakbarInitialValue += 1;
    allahuakbarValue.innerText = allahuakbarInitialValue;
  }
});
allahuakbarDecBtn.addEventListener("click", function () {
  if (allahuakbarInitialValue <= 0) {
    alert("Trying to go negative? its not possible");
  } else {
    allahuakbarInitialValue -= 1;
    allahuakbarValue.innerText = allahuakbarInitialValue;
  }
});

// Reset Button
resetBtn.addEventListener("click", function () {
  subhanallahInitialValue = 0;
  alhamdulillahInitialValue = 0;
  allahuakbarInitialValue = 0;

  subhanallahValue.innerText = 0;
  alhamdulillahValue.innerText = 0;
  allahuakbarValue.innerText = 0;
});
