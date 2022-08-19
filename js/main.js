let userId;
let option ;
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



