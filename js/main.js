let userId;
let option;

const mainContentForm = document.querySelector("#maincontent__form"); // Selecting form from maincontent
const userInput = document.querySelector("#userId"); // Selecting input inside the form

const mainPageDisplayBox = document.querySelector(
	"#mainpage__displaybox-content"
);
const mainPageInputBox = document.querySelector("#mainpage__inp");

const mainPageForm = document.querySelector("#mainpage__input-form");
const mainPageTxt = document.querySelector("#mainpage__txt");

const waveFooterDefault = document.querySelector("#footer__image");
const waveFooterVictory = document.querySelector("#footer__images");

/* ---------- Set Data and Get data to session Storage --------- */

const setSessionStorage = () => {
	sessionStorage.setItem("userName", userId);
};
const getSessionStorage = () => {
	userId = sessionStorage.getItem("userName");
};

const textAdd = () => {
	if (mainPageTxt) {
		mainPageTxt.innerText = `Welcome, ${userId}`;
		setTimeout(() => {
			mainPageTxt.innerText = `start guessing...`;
		}, 1500);
	}
};
/* ------------------ Accessing user Input -------------------- */
//to access the user's name inside the input and added to the session storage

const userNames = () => {
	userId = userInput.value;
	setSessionStorage();
};

//to check if mainContentForm exist or not

if (mainContentForm) {
	// to trigger the function when it is submitted in the homepage
	mainContentForm.addEventListener("submit", userNames);
}

getSessionStorage();
textAdd();

/* ----- for Displaying input number in the display box */

mainPageInputBox.addEventListener("input", () => {
	if (mainPageInputBox.value === "") {
		mainPageDisplayBox.innerText = "?";
	} else {
		mainPageDisplayBox.innerText = mainPageInputBox.value;
	}
});

/* -------------- Game Easy mode -------------------- */

/* ----------- random number generate ---------------- */
let randomNumEasy = Math.floor(Math.random() * 20) + 1;
console.log(randomNumEasy);
const afterWin = () => {
	mainPageTxt.innerText = `you win the game 🎉😂, ${userId}`;
	mainPageInputBox.setAttribute("onkeydown", "return false");
	mainPageInputBox.style.caretColor = "transparent";
};
// game logic
const gameLogic = () => {
	let guessNum = mainPageInputBox.value;
	if (parseInt(guessNum) === randomNumEasy) {
		afterWin();
		backGroundSet();
		waveChangeSet();
	} else if (parseInt(guessNum) > randomNumEasy) {
		mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
	} else {
		mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
	}
	mainPageInputBox.value = "";
};
// to run the game logic when submit
mainPageForm.addEventListener("submit", (e) => {
	e.preventDefault();
	gameLogic();
});

/* ----------------- Restart button ------------------------ */

const restartButton = document.querySelector("#headermainpage__restartbtns");

// to restart the game
const restartBtn = () => {
	mainPageTxt.innerText = `start guessing...`;
	mainPageInputBox.removeAttribute("onkeydown");
	mainPageInputBox.style.caretColor = "white";
	mainPageDisplayBox.innerText = "?";
	randomNumEasy = Math.floor(Math.random() * 20) + 1;
	backGroundRevert();
	waveChangeRevert();
	console.log(randomNumEasy);
};

// to check if the restartButton is exists on the page

if (restartButton) {
	restartButton.addEventListener("click", restartBtn);
}

// Get the root element
let root = document.querySelector(":root");

const backGroundSet = () => {
	// Set the value of variable to another value in this case primary-clr change to set color
	root.style.setProperty("--primary-clr", "#6BC779");
};
const backGroundRevert = () => {
	// reverting the change of BackGroundSet
	root.style.setProperty("--primary-clr", "#335F70");
};

// to display hidden green waves img and hide blue wave
const waveChangeSet = () => {
	waveFooterDefault.classList.add("--display");
	waveFooterVictory.classList.remove("--display");
};
// to hidden green waves img and display blue wave
const waveChangeRevert = () => {
	waveFooterVictory.classList.add("--display");
	waveFooterDefault.classList.remove("--display");
};
