let userId;
let option ;
const mainContentForm = document.querySelector("#maincontent__form"); // Selecting form from maincontent
const userInput = document.querySelector("#userId"); // Selecting input inside the form
const mainPageDisplayBox = document.querySelector(
	"#mainpage__displaybox-content"
);
const mainPageInputBox = document.querySelector("#mainpage__inp");

const mainPageForm = document.querySelector("#mainpage__input-form");

const waveFooterDefault = document.querySelector("#footer__image");
const waveFooterVictory = document.querySelector("#footer__images");

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

/* ----- for Displaying input number in the display box ------- */

const mainPageDisplayBox = document.querySelector(
	"#mainpage__displaybox-content"
);

if (mainPageInputBox) {
	mainPageInputBox.addEventListener("input", () => {
		if (mainPageInputBox.value === "") {
			mainPageDisplayBox.innerText = "?";
		} else {
			mainPageDisplayBox.innerText = mainPageInputBox.value;
		}
	});
}

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

/* -------------------- Mode ------------------- */

const randomNumEasy = Math.floor(Math.random() * 20) + 1;
const randomNumMedium = Math.floor(Math.random() * 50) + 1;
const randomNumHard = Math.floor(Math.random() * 100) + 1;
console.log(`${randomNumEasy} ${randomNumMedium} ${randomNumHard}`)
getSessionStore();
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
		startIt();
		stopIt();
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

// game logic

const GameLogic = () => {
	if (levelChosen === "easy") {
		console.log("easy");
		let guessNum = mainPageInputBox.value;
		if (parseInt(guessNum) === randomNumEasy) {
			console.log(`monusa kandupidichatta22`);
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
			console.log(`monusa kandupidichatta11`);
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
			console.log(`monusa kandupidichatta22`);
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
if(popUpBtn)popUpBtn.addEventListener("click", btnClose);
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
	}, 5000);
};

// to fadeOut the loading screen on load

$(window).on("load", function () {
	$(".loader-wrapper").fadeOut("slow");
});
