function saveInput() {
  console.log("Saving");
  localStorage.setItem({ name: "asd" });

  console.log(localStorage.getItem("name"));
}

function validateInput() {
  if (input.value) {
    return true;
  } else {
    return false;
  }
}

function handleClick() {
  // Return a boolean value
  const validated = validateInput();

  if (validated) {
    console.log(validated);
    // Save to local storage
    saveInput();
  } else {
    console.log(validated);
  }
}

// Define root element
// Everything on the webpage is nested under root
const root = document.querySelector("#root");

// Create header div
const header = document.createElement("div");
const headerText = document.createTextNode("Curriculus");
header.appendChild(headerText);

// Create content div
const content = document.createElement("div");

// Create footer div
const footer = document.createElement("div");
const footerText = document.createTextNode("Copyright 2025 Joni Mäkinen");
footer.appendChild(footerText);

// Insert main divs to root
root.appendChild(header);
root.appendChild(content);
root.appendChild(footer);

// Create hours input field
const input = document.createElement("input");
input.value = "Hours";
input.addEventListener("focus", (event) => {
  input.value = null;
});

// Create course selection dropdown list
const list = document.createElement("form");

// Create OK button
const button = document.createElement("button");
const buttonText = document.createTextNode("OK");
button.appendChild(buttonText);
button.addEventListener("click", function (event) {
  handleClick();
});

// Insert elements to content div
content.appendChild(input);
content.appendChild(list);
content.appendChild(button);
