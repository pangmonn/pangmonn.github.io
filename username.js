const form = document.querySelector("form");
const input = form.querySelector("input");
const output = document.querySelector("#output");

function loadName() {
    const currentUser = localStorage.getItem("current");
    if(currentUser===null) {
        askForname();
    }
    else {
        showingOutput(currentUser);
    }
}

function askForname() {
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
}

function handleSubmit(event) {
    console.log(0);
    event.preventDefault();
    const currentValue = input.value;
    showingOutput(currentValue);
    localStorage.setItem("current",currentValue);
}

function showingOutput(text) {
    form.classList.remove("showing");
    output.classList.add("showing");
    output.innerText = `Hello ${text}`;
}

loadName();