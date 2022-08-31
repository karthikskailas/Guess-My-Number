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

/* ----------- random number generate ---------------- */
const mainPageInputBox = document.querySelector("#mainpage__inp");
const afterGame = document.querySelector(".finish");
const afterGameElement = document.querySelectorAll(".afterwin");

const afterWin = () => {
	$(document).ready(function () {
		$("#headermainpage__dropmenu-select2").val(levelChosen);
		limitSetter();
	});
	for (hide of afterGameElement) {
		hide.classList.add("--display");
	}
	mainPageTxt.innerText = `you win the game 🎉😂, ${userId}`;
	mainPageInputBox.setAttribute("onkeydown", "return false");
	mainPageInputBox.style.caretColor = "transparent";
	afterGame.classList.remove("--display");
	logo();
	dropDownHide();
};
const afterLoss = () => {
	logo();
	for (hide of afterGameElement) {
		hide.classList.add("--display");
	}
	waveChangeLoss();
	mainPageTxt.innerText = `you Lost 😞, ${userId}`;
	mainPageInputBox.setAttribute("onkeydown", "return false");
	mainPageInputBox.style.caretColor = "transparent";
	afterGame.classList.remove("--display");
	dropDown3.classList.add("--display");
	dropDownHide();
};

const inputScore = () => {
	if (levelChosen === "easy")
		mainPageTxt.innerText = ` Your Score: ${easyScore}`;
	else if (levelChosen === "medium")
		mainPageTxt.innerText = `Your Score: ${mediumScore}`;
	else if (levelChosen === "hard")
		mainPageTxt.innerText = `Your Score: ${hardScore}`;
};

let easyScore = 20;
let mediumScore = 50;
let hardScore = 100;
/* _____________________________________ HIGH-SCORE ___________________________ */
let FinalScore = document.querySelector(".finishsection__text-score");
let finalHighScore = document.querySelector(".finishsection__text-highscore");
let highScore = 0;
let newHighScore = 0;

// game logic

const GameLogic = () => {
	if (levelChosen === "easy") {
		let guessNum = mainPageInputBox.value;
		9;

		if (parseInt(guessNum) > randomNumEasy) {
			mainPageInputBox.value = "";
			if (easyScore > 1) {
				mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
				easyScore -= 1;
				setTimeout(() => {
					mainPageTxt.innerText = `Score: ${easyScore}`;
				}, 1500);
				mainPageInputBox.value = "";
			} else {
				FinalScore.innerText = `Score : 0`;
				afterLoss();
				backGroundSetLoss();
			}
		} else if (parseInt(guessNum) < randomNumEasy) {
			if (easyScore > 1) {
				mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
				easyScore -= 1;
				setTimeout(() => {
					mainPageTxt.innerText = `Score: ${easyScore}`;
				}, 1500);
				mainPageInputBox.value = "";
			} else {
				FinalScore.innerText = `Score : 0`;
				afterLoss();
				backGroundSetLoss();
			}
		} else {
			if (easyScore > easyHighScore) {
				easyHighScore = easyScore;
				finalHighScore.innerText = `HighScore : ${easyHighScore}`;
			}
			FinalScore.innerText = `Score : ${easyScore}`;
			mainPageInputBox.value = randomNumEasy;
			afterWin();
			backGroundSet();
			waveChangeSet();
			startIt();
			stopIt();
		}
	} else if (levelChosen === "medium") {
		let guessNum = mainPageInputBox.value;
		if (parseInt(guessNum) > randomNumMedium) {
			if (mediumScore > 2) {
				mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
				mediumScore -= 2;
				setTimeout(() => {
					mainPageTxt.innerText = `Score: ${mediumScore}`;
				}, 1500);
				mainPageInputBox.value = "";
			} else {
				FinalScore.innerText = `Score : 0`;
				afterLoss();
				backGroundSetLoss();
			}
		} else if (parseInt(guessNum) < randomNumMedium) {
			if (mediumScore > 2) {
				mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
				mediumScore -= 2;
				setTimeout(() => {
					mainPageTxt.innerText = `Score: ${mediumScore}`;
				}, 1500);
				mainPageInputBox.value = "";
			} else {
				FinalScore.innerText = `Score : 0`;
				afterLoss();
				backGroundSetLoss();
			}
		} else {
			if (mediumScore > mediumHighScore) {
				mediumHighScore = mediumScore;
				finalHighScore.innerText = `HighScore : ${mediumScore}`;
			}
			mainPageInputBox.value = randomNumMedium;
			FinalScore.innerText = `Score : ${mediumScore}`;
			afterWin();
			backGroundSet();
			waveChangeSet();
			startIt();
			stopIt();
		}
	} else {
		let guessNum = mainPageInputBox.value;
		if (parseInt(guessNum) > randomNumHard) {
			if (hardScore > 4) {
				mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
				hardScore -= 4;
				setTimeout(() => {
					mainPageTxt.innerText = `Score: ${hardScore}`;
				}, 1500);
				mainPageInputBox.value = "";
			} else {
				FinalScore.innerText = `Score : 0`;
				afterLoss();
				backGroundSetLoss();
			}
		} else if (parseInt(guessNum) < randomNumHard) {
			if (hardScore > 4) {
				mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
				hardScore -= 4;
				setTimeout(() => {
					mainPageTxt.innerText = `Score: ${hardScore}`;
				}, 1500);
				mainPageInputBox.value = "";
			} else {
				FinalScore.innerText = `Score :0`;
				afterLoss();
				backGroundSetLoss();
			}
		} else {
			if (hardScore > hardHighScore) {
				hardHighScore = hardScore;
				finalHighScore.innerText = `HighScore : ${hardScore}`;
			}

			FinalScore.innerText = `Score : ${hardScore}`;
			mainPageInputBox.value = randomNumHard;
			afterWin();
			backGroundSet();
			waveChangeSet();
			startIt();
			stopIt();
		}
	}
};

if (mainPageForm) {
	mainPageForm.addEventListener("submit", (e) => {
		e.preventDefault();
		GameLogic();
	});
}

// to prevent the user from going back
const preventBack = () => {
	window.history.forward();
};
setTimeout("preventBack()", 0);
window.onunload = function () {
	null;
};

/* -------------------- Popup --------------------- */

const popUp = document.querySelector(".popup");
const info = document.querySelector("#info__img");
const popUpBtn = document.querySelector(".popup__button");

const btnClose = () => {
	popUp.classList.remove("--active");
	info.classList.remove("--display");
	info.classList.add("animate__fadeInRight", "animate__delay-1s");
};
window.addEventListener("load", () => {
	setTimeout(() => {
		if (popUp) popUp.classList.add("--active");
	}, 500);
});
if (info) {
	info.addEventListener("click", () => {
		setTimeout(() => {
			if (popUp) {
				const scroll = document.querySelector(".popup__descri");
				scroll.scrollTop = 0;
				popUp.classList.add("--active");
			}
		}, 200);
	});
}

if (popUpBtn) popUpBtn.addEventListener("click", btnClose);

/* ----------------- Restart button ------------------------ */

const restartButton = document.querySelectorAll(".restartbtns");

const restartLvl = () => {
	// FIXME-CHANGE THE VALUE
	easyScore = 20;
	mediumScore = 50;
	hardScore = 100;
	if (levelChosen === "easy") {
		randomNumEasy = Math.floor(Math.random() * 20) + 1;
	} else if (levelChosen === "medium") {
		randomNumMedium = Math.floor(Math.random() * 50) + 1;
	} else {
		randomNumHard = Math.floor(Math.random() * 100) + 1;
	}
	/* ------------------------- for show maincontent input and hide finish section ---------------------------*/
	for (show of afterGameElement) {
		show.classList.remove("--display");
	}
	afterGame.classList.add("--display");
};
const logoRevert = () => {
	headerLogo.classList.remove("headermainpage__logo2");
	headerLogo.classList.add("headermainpage__logo");
	header.classList.add("headermainpage");
	header.classList.remove("-margin");
};
// to restart the game
const restartBtn = () => {
	mainPageInputBox.value = "";
	mainPageTxt.innerText = `start guessing...`;
	mainPageInputBox.removeAttribute("onkeydown");
	mainPageInputBox.style.caretColor = "white";
	mainPageDisplayBox.innerText = "?";
	restartLvl();
	backGroundRevert();
	waveChangeRevert();
	logoRevert();
	waveChangeLossRevert();
	dropDownShow();
};
const restartBtnOnFinish = () => {
	mainPageInputBox.value = "";
	mainPageInputBox.removeAttribute("onkeydown");
	mainPageInputBox.style.caretColor = "white";
	mainPageDisplayBox.innerText = "?";
	restartLvl();
	backGroundRevert();
	waveChangeRevert();
	logoRevert();
	waveChangeLossRevert();
	dropDownShow();
};

// to check if the restartButton is exists on the page

if (restartButton) {
	for (restart of restartButton)
		restart.addEventListener("click", restartBtn);
}

/* ------------------- Victory colorSet --------------- */

const waveFooterDefault = document.querySelector("#footer__image");
const waveFooterDefaultMob = document.querySelector("#footer__images-mob");
const waveFooterVictory = document.querySelector("#footer__images");
const waveFooterVictoryMob = document.querySelector("#footer__image-mob");
const waveFooterLoss = document.querySelector("#footer__image-red");
const waveFooterLossMob = document.querySelector("#footer__image-red2");
const headerLogo = document.querySelector("#headermainpage__logos");
const header = document.querySelector("#headermainpages");

// Get the root element
let root = document.querySelector(":root");

const backGroundSet = () => {
	// Set the value of variable to another value in this case primary-clr change to set color on win
	root.style.setProperty("--primary-clr", "#6BC779");
};

const backGroundSetLoss = () => {
	root.style.setProperty("--primary-clr", "#FF474A");
};

const logo = () => {
	headerLogo.classList.add("headermainpage__logo2");

	headerLogo.classList.remove("headermainpage__logo");
	header.classList.remove("headermainpage");
	header.classList.add("-margin");
};
const backGroundRevert = () => {
	// reverting the change of BackGroundSet
	root.style.setProperty("--primary-clr", "#335F70");
};
const waveChangeLoss = () => {
	waveFooterDefault.classList.add("--display");
	waveFooterLoss.classList.remove("--display");
	waveFooterDefaultMob.classList.add("--display");
	waveFooterLossMob.classList.remove("--display");
};
const waveChangeLossRevert = () => {
	waveFooterLoss.classList.add("--display");
	waveFooterDefault.classList.remove("--display");
	waveFooterDefaultMob.classList.remove("--display");
	waveFooterLossMob.classList.add("--display");
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
$(document).ready(function () {
	$("#headermainpage__dropmenu-select3").val(levelChosen);
	limitSetter();
});

/* ------------------ InGame Level Change ------------------ */

const dropDown = document.querySelector("#headermainpage__dropmenu-select");
const dropDown2 = document.querySelector("#headermainpage__dropmenu-select2");
const dropDown3 = document.querySelector("#headermainpage__dropmenu-select3");
/* --------------- To change the level of the main dropdown on changing the finishSection drop --------------*/
dropDown.addEventListener(
	"change",
	function () {
		dropDown2.selectedIndex = dropDown.selectedIndex;
		limitSetter();
		mainPageTxt.innerText = `restating now`;
	},
	false
);
dropDown2.addEventListener(
	"change",
	function () {
		dropDown.selectedIndex = dropDown2.selectedIndex;

		limitSetter();

		setTimeout(() => {
			restartBtnOnFinish();
		}, 1500);
	},
	false
);
dropDown3.addEventListener(
	"change",
	function () {
		dropDown.selectedIndex = dropDown3.selectedIndex;
		dropDown3.selectedIndex = dropDown.selectedIndex;

		limitSetter();
	},
	false
);
/* ------------------- to change the limit according to the selected lvl ------------------------------ */
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
	lvlChangeTxt();
};
const lvlChangeOnFinish = () => {
	levelChosen = dropDown2.options[dropDown2.selectedIndex].value;
	sessionStorage.setItem("selectedLvl", levelChosen);
	lvlChangeTxtOnFinish();
	limitSetter();
};
const lvlChangeOnFinish2 = () => {
	levelChosen = dropDown3.options[dropDown3.selectedIndex].value;
	sessionStorage.setItem("selectedLvl", levelChosen);
	lvlChangeTxtOnFinish2();
	limitSetter();
};

if (dropDown) dropDown.addEventListener("change", lvlChange);
if (dropDown2) dropDown2.addEventListener("change", lvlChangeOnFinish);
if (dropDown3) dropDown3.addEventListener("change", lvlChangeOnFinish2);

const lvlChangeTxt = () => {
	if (mainPageTxt) {
		mainPageTxt.innerText = `Lvl Changed to ${levelChosen}`;
		mainPageDisplayBox.innerText = "?";
		setTimeout(() => {
			mainPageTxt.innerText = `start guessing...`;
		}, 1000);
	}
};
const lvlChangeTxtOnFinish = () => {
	if (mainPageTxt) {
		mainPageTxt.innerText = `Lvl Changed to ${levelChosen}`;

		mainPageDisplayBox.innerText = "?";
		setTimeout(() => {
			mainPageTxt.innerText = `restarting now`;
		}, 500);
		setTimeout(() => {
			mainPageTxt.innerText = `start guessing...`;
		}, 1900);
	}
};
const lvlChangeTxtOnFinish2 = () => {
	if (mainPageTxt) {
		mainPageTxt.innerText = `Lvl Changed to ${levelChosen}`;
		mainPageDisplayBox.innerText = "?";
		setTimeout(() => {
			mainPageTxt.innerText = `start guessing...`;
		}, 900);
	}
};
/* ----- for Displaying input number in the display box ------- */

const mainPageDisplayBox = document.querySelector(
	"#mainpage__displaybox-content"
);
mainPageInputBox.onkeyup = mainPageInputBox.onkeypress = function () {
	mainPageDisplayBox.innerHTML = this.value.slice(0, 3);

	if (mainPageInputBox.value.length === 0) {
		mainPageDisplayBox.innerText = "?";
	}
};
/* ---- limit the character to input  */
const limitCharacter = () => {
	var max_chars = 3;

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
mainPageInputBox.addEventListener("input", inputScore);

let easyHighScore = 0;
let mediumHighScore = 0;
let hardHighScore = 0;

const dropDownHide = () => {
	let query = window.matchMedia("(max-width: 675px)");
	let query2 = window.matchMedia("(max-width:502px)");
	if (query.matches) {
		document.querySelector(".dropdown").style.display = "none";
	}
	if (query2.matches) {
		document.querySelector(".dropdown").style.display = "none";
	}
};
const dropDownShow = () => {
	let query = window.matchMedia("(max-width: 675px)");
	let query2 = window.matchMedia("(max-width:502px)");
	if (query.matches) {
		document.querySelector(".dropdown").style.display = "block";
	}
	if (query2.matches) {
		document.querySelector(".dropdown").style.display = "block";
	}
};
