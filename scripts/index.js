// Index Script
// Application start function

// This script generates the application index page,
// also handles button click directing to make entry page or view records page

// function main() {
// Define root element
// All parent divs on the webpage body (header, content, footer) are nested under root element
// and all children (buttons, input fields, texts, etc.) are nested under the main divs
const root = document.querySelector("#root");

// Create header parent div
const header = document.createElement("div");
header.innerText = "Curriculus";
header.style.height = "200px";

// Create content parent div
const content = document.createElement("div");
content.style.height = "400px";

// Create footer parent div
const footer = document.createElement("div");
footer.innerText = "ⓒ 2025 Joni Mäkinen";

// Insert parent divs to root
root.append(header);
root.append(content);
root.append(footer);

// Create make an entry button
const entryButton = document.createElement("button");
entryButton.innerText = "Make an entry";
entryButton.addEventListener("click", function (event) {
  event.id = "entry";
  handleClick(event);
});

// Create view records button
const viewButton = document.createElement("button");
viewButton.innerText = "View records";
viewButton.addEventListener("click", function (event) {
  handleClick(event);
});

// Insert buttons to content parent div
content.append(entryButton);
content.append(viewButton);
// }

function handleClick(e) {
  // Decide whether to go make an entry or view records
  if (e.id === "entry") {
    makeEntry();
  } else {
    // exports.viewRecords();
    viewRecords();
  }
}

// main();
