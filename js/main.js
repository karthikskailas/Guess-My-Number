let userId;
let option;
let levelChosen;

const mainPageForm = document.querySelector("#mainpage__input-form");

/* ---------- Set Data and Get data to session Storage --------- */

const setSessionStorage = () => {
	sessionStorage.setItem("userName", userId);
};
const getSessionStorage = () => {
	userId = sessionStorage.getItem("userName");
};

/* ------------------ Accessing user Input -------------------- */

const mainPageTxt = document.querySelector("#mainpage__txt");
const mainContentForm = document.querySelector("#maincontent__form"); // Selecting form from maincontent
const userInput = document.querySelector("#userId"); // Selecting input inside the form

const textAdd = () => {
	if (mainPageTxt) {
		mainPageTxt.innerText = `Welcome, ${userId}`;
		setTimeout(() => {
			mainPageTxt.innerText = `start guessing...`;
		}, 1500);
	}
};

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

/* validating radio */

const headerSelectForm = document.querySelector("#headerselect__form");

const validateForm = (e) => {
	let radios = document.getElementsByName("radio");

	let formValid = false;

	let i = 0;
	while (!formValid && i < radios.length) {
		if (radios[i].checked) formValid = true;
		i++;
	}

	if (!formValid) {
		e.preventDefault();
		alert("Must check some option!");
		return formValid;
	}
};
const Level = () => {
	levelChosen = document.querySelector('input[name="radio"]:checked').value;
	setSessionStore();
};
if (headerSelectForm) {
	headerSelectForm.addEventListener("submit", validateForm);
	headerSelectForm.addEventListener("submit", Level);
}

/* ------------- accessing level and storing in session storage ------------------- */

const setSessionStore = () => {
	sessionStorage.setItem("selectedLvl", levelChosen);
};
const getSessionStore = () => {
	levelChosen = sessionStorage.getItem("selectedLvl");
};
getSessionStore();

/* -------------------- Mode ------------------- */

let randomNumEasy = Math.floor(Math.random() * 20) + 1;
let randomNumMedium = Math.floor(Math.random() * 50) + 1;
let randomNumHard = Math.floor(Math.random() * 100) + 1;
console.log(`${randomNumEasy} ${randomNumMedium} ${randomNumHard}`);
/* ----------- random number generate ---------------- */
const afterWin = () => {
	mainPageTxt.innerText = `you win the game 🎉😂, ${userId}`;
	mainPageInputBox.setAttribute("onkeydown", "return false");
	mainPageInputBox.style.caretColor = "transparent";
};

// game logic

const GameLogic = () => {
	if (levelChosen === "easy") {
		console.log("easy");
		let guessNum = mainPageInputBox.value;
		if (parseInt(guessNum) === randomNumEasy) {
			mainPageInputBox.value = randomNumEasy;
			afterWin();
			backGroundSet();
			waveChangeSet();
			startIt();
			stopIt();
		} else if (parseInt(guessNum) > randomNumEasy) {
			mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
		} else {
			mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
		}
		mainPageInputBox.value = "";
	} else if (levelChosen === "medium") {
		console.log("medium");
		let guessNum = mainPageInputBox.value;
		if (parseInt(guessNum) > randomNumMedium) {
			mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
		} else if (parseInt(guessNum) === randomNumMedium) {
			mainPageInputBox.value = randomNumMedium;
			afterWin();
			backGroundSet();
			waveChangeSet();
			startIt();
			stopIt();
		} else {
			mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
		}
		mainPageInputBox.value = "";
	} else {
		console.log("hard");
		let guessNum = mainPageInputBox.value;
		if (parseInt(guessNum) > randomNumHard) {
			mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
		} else if (parseInt(guessNum) === randomNumHard) {
			mainPageInputBox.value = randomNumHard;
			afterWin();
			backGroundSet();
			waveChangeSet();
			startIt();
			stopIt();
		} else {
			mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
		}
		mainPageInputBox.value = "";
	}
};

if (mainPageForm) {
	mainPageForm.addEventListener("submit", (e) => {
		e.preventDefault();
		GameLogic();
	});
}

// to prevent the user from going back
// const preventBack = () => {
// 	window.history.forward();
// };
// setTimeout("preventBack()", 0);
// window.onunload = function () {
// 	null;
// };

/* -------------------- Popup --------------------- */

const popUp = document.querySelector(".popup");
const popUpBtn = document.querySelector(".popup__button");

const btnClose = () => {
	popUp.classList.remove("--active");
};
window.addEventListener("load", () => {
	setTimeout(() => {
		if (popUp) popUp.classList.add("--active");
	}, 200);
});
if (popUpBtn) popUpBtn.addEventListener("click", btnClose);

/* ----------------- Restart button ------------------------ */

const restartButton = document.querySelector("#headermainpage__restartbtns");

const restartLvl = () => {
	if (levelChosen === "easy") {
		randomNumEasy = Math.floor(Math.random() * 20) + 1;
		console.log(`easy ${randomNumEasy}`);
	} else if (levelChosen === "medium") {
		randomNumMedium = Math.floor(Math.random() * 50) + 1;
		console.log(`medium ${randomNumMedium}`);
	} else {
		randomNumHard = Math.floor(Math.random() * 100) + 1;
		console.log(`hard ${randomNumHard}`);
	}
};
// to restart the game
const restartBtn = () => {
	mainPageTxt.innerText = `start guessing...`;
	mainPageInputBox.removeAttribute("onkeydown");
	mainPageInputBox.style.caretColor = "white";
	mainPageDisplayBox.innerText = "?";
	restartLvl();
	backGroundRevert();
	waveChangeRevert();
};

// to check if the restartButton is exists on the page

if (restartButton) {
	restartButton.addEventListener("click", restartBtn);
}

/* ------------------- Victory colorSet --------------- */

const waveFooterDefault = document.querySelector("#footer__image");
const waveFooterDefaultMob = document.querySelector("#footer__images-mob");
const waveFooterVictory = document.querySelector("#footer__images");
const waveFooterVictoryMob = document.querySelector("#footer__image-mob");

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
	waveFooterDefaultMob.classList.add("--display");
	waveFooterVictory.classList.remove("--display");
	waveFooterVictoryMob.classList.remove("--display");
};

// to hidden green waves img and display blue wave
const waveChangeRevert = () => {
	waveFooterVictory.classList.add("--display");
	waveFooterDefault.classList.remove("--display");
	waveFooterVictoryMob.classList.add("--display");
	waveFooterDefaultMob.classList.remove("--display");
};

/* -------------- Confetti effect ---------------------- */
//starts
const startIt = () => {
	setTimeout(function () {
		confetti.start();
	}, 10);
};

// Stops
const stopIt = () => {
	setTimeout(function () {
		confetti.stop();
	}, 3000);
};

// to fadeOut the loading screen on load

$(window).on("load", function () {
	$(".loader-wrapper").fadeOut("slow");
});

// to preselect the user selected level in the dropdown

$(document).ready(function () {
	$("#headermainpage__dropmenu-select").val(levelChosen);
	limitSetter();
});

/* ------------------ InGame Level Change ------------------ */

const dropDown = document.querySelector("#headermainpage__dropmenu-select");
const limitSetter = () => {
	if (levelChosen === "easy") {
		mainPageInputBox.setAttribute("max", "20");
		mainPageInputBox.value = "";
	} else if (levelChosen === "medium") {
		mainPageInputBox.setAttribute("max", "50");
		mainPageInputBox.value = "";
	} else {
		mainPageInputBox.setAttribute("max", "100");
		mainPageInputBox.value = "";
	}
};
const lvlChange = () => {
	levelChosen = dropDown.options[dropDown.selectedIndex].value;
	sessionStorage.setItem("selectedLvl", levelChosen);
	limitSetter();
};
if (dropDown) dropDown.addEventListener("change", lvlChange);

/* ----- for Displaying input number in the display box ------- */

const mainPageDisplayBox = document.querySelector(
	"#mainpage__displaybox-content"
);
const mainPageInputBox = document.querySelector("#mainpage__inp");


if (mainPageInputBox) {
	mainPageInputBox.addEventListener("input", () => {
		if (mainPageInputBox.value === "") {
			mainPageDisplayBox.innerText = "?";
		} else if (mainPageDisplayBox.innerText.length < 3)
				mainPageDisplayBox.innerText = mainPageInputBox.value;
		
	});
}
/* ---- limit the character to input  */
const limitCharacter = () => {
	var max_chars = 3;
	console.log("condition not checked bro");
	$("#mainpage__inp").keydown(function (e) {
		if ($(this).val().length >= max_chars) {
			$(this).val($(this).val().substr(0, max_chars));
		}
	});

	$("#mainpage__inp").keyup(function (e) {
		if ($(this).val().length >= max_chars) {
			$(this).val($(this).val().substr(0, max_chars));
		}
	});
};
mainPageInputBox.addEventListener("input", limitCharacter);
