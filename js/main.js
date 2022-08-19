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

/* ----- for Displaying input number in the display box */

mainPageInputBox.addEventListener("input", () => {
	if (mainPageInputBox.value === "") {
		mainPageDisplayBox.innerText = "?";
	} else {
		mainPageDisplayBox.innerText = mainPageInputBox.value;
	}
});

/* -------------------- Mode ------------------- */

let dropDown = document.querySelector("#headermainpage__dropmenu-select");

/* --------------------------- Easy ------------------------------ */

const randomNumEasy = Math.floor(Math.random() * 20) + 1;
console.log(randomNumEasy);
const easyMode = () => {
	let guessNum = mainPageInputBox.value;
	if (parseInt(guessNum) === randomNumEasy) {
		console.log(`monusa kandupidichatta22`);
	} else if (parseInt(guessNum) > randomNumEasy) {
		mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
	} else {
		mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
	}
	mainPageInputBox.value = "";
};
/* --------------------------- Medium ------------------------------ */
const randomNumMedium = Math.floor(Math.random() * 50) + 1;
console.log(randomNumMedium);
const mediumMode = () => {
	let guessNum = mainPageInputBox.value;
	if (parseInt(guessNum) > randomNumMedium) {
		mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
	} else if (parseInt(guessNum) === randomNumMedium) {
		console.log(`monusa kandupidichatta11`);
	} else {
		mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
	}
	mainPageInputBox.value = "";
};
/* --------------------------- Hard ------------------------------ */
const randomNumHard = Math.floor(Math.random() * 100) + 1;
console.log(randomNumHard);
const hardMode = () => {
	let guessNum = mainPageInputBox.value;
	if (parseInt(guessNum) > randomNumHard) {
		mainPageTxt.innerText = `Your guess is high  🥵 : try again !!`;
	} else if (parseInt(guessNum) === randomNumHard) {
		console.log(`monusa kandupidichatta22`);
	} else {
		mainPageTxt.innerText = `Your guess is low 🥶: try again !!`;
	}
	mainPageInputBox.value = "";
};

dropDown.addEventListener("change", () => {
	option = dropDown.options[dropDown.selectedIndex].value;
	console.log(option);

	if (parseInt(option) === 1) {
		mainPageForm.addEventListener("submit", (e) => {
			e.preventDefault();
			easyMode();
		});
	} else if (parseInt(option) === 2) {
		mainPageForm.addEventListener("submit", (e) => {
			e.preventDefault();
			mediumMode();
		});
	} else {
		mainPageForm.addEventListener("submit", (e) => {
			e.preventDefault();
			hardMode();
		});
	}
});
// }
