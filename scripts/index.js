// Index page functions

// Generates application Index page,
// also handles transitions to Entry/View page

// All parent divs (header, content, footer) on the webpage body are nested under root element,
// and all children (buttons, input fields, texts, tables, etc.) are nested under the parent divs

// Define the root constant
const root = document.querySelector("#root");

// Create the parent divs
const header = document.createElement("div");
const content = document.createElement("div");
const footer = document.createElement("div");
// Create go button
const goButton = document.createElement("button");

// Main Entry Point
main();

// Application start function
function main() {
  // Assign ids to the parent divs
  header.id = "header";
  content.id = "content";
  footer.id = "footer";

  // Set the header and footer texts
  header.innerText = "Curriculus";
  footer.innerText = "ⓒ 2025 Joni Mäkinen";

  // Set the go button
  goButton.id = "go";
  goButton.innerText = "Go";
  goButton.addEventListener("click", () => {
    handleClick();
  });

  // Insert the go button to the content parent div
  content.append(goButton);

  // Insert the parent divs to the root
  root.append(header);
  root.append(content);
  root.append(footer);
}

// Handles the go button clicks
function handleClick() {
  // Remove the go button,
  // since the page is about to change
  goButton.remove();
  // Go make an entry form (page change)
  entryForm();
}
