function getAndSetShoutingValues() {
  let personInput = document.getElementById("personInput").value;
  personInput = personInput.toUpperCase();

  document.querySelector("span#person1a").innerText = personInput;
}

function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    getAndSetShoutingValues();
    document.querySelector("div#shout").removeAttribute("class");
  }
}

window.onload = function () {
  // inside of the window.onload handler function we only include
  // the code that we want to run when
  // the webpage has finished loading all resources
  setFormSubmissionEventHandler();
};
