let userId;
let option;
let levelChosen;
const mainPageInputBox = document.querySelector("#mainpage__inp");
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
	userId = userInput.value; //accessing input value
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
const Level =() =>{
	levelChosen = document.querySelector('input[name="radio"]:checked').value;
	setSessionStore();
}
if(headerSelectForm){
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

getSessionStore();

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
