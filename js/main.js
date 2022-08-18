let userId;
/* ---------- Set Data and Get data to session Storage --------- */

const setSessionStorage = () => {
	sessionStorage.setItem("userName", userId);
};
const getSessionStorage = () => {
	sessionStorage.getItem("userName");
};
/* ------------------ Accessing user Input -------------------- */

const mainContentForm = document.querySelector("#maincontent__form"); // Selecting form from maincontent
const userInput = document.querySelector("#userId"); // Selecting input inside the form

//to access the user's name inside the input and added to the session storage

const userNames = () => {
	userId = userInput.value;
	prompt(userId);
	setSessionStorage();
};

// to trigger the function when it is submitted

mainContentForm.addEventListener("submit", userNames);
