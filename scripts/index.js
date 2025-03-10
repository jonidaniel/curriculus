// Index

// Generates application Index view,
// also handles transitions to Form/Table view
// User navigates to the Form/Table view by pressing go button

// All parent divs (header, content, footer) are nested directly under the webpage body
// There are two content columns (left and right) under the content div
// All children (buttons, input fields, texts, tables, etc.)
// are nested under the parent divs and content columns

// Create the parent divs
const header = document.createElement("div");
const content = document.createElement("div");
const footer = document.createElement("div");
// Create the content columns
const contentLeft = document.createElement("div");
const contentRight = document.createElement("div");

// Create introduction text
const introText = document.createElement("p");
// Create the go button
const goButton = document.createElement("button");

// Application start function
function main() {
  // Assign ids to some parent divs and the content columns
  header.id = "header";
  contentLeft.id = "content-left";
  contentRight.id = "content-right";
  footer.id = "footer";

  // Set the header, introduction and footer texts
  header.innerText = "Curriculus";
  introText.innerText =
    "Study Tracker for Laurea BIT Students\nKeep track of your study hours spent on specific courses\nStore your personal study session entries and see past entries";
  footer.innerText = "ⓒ 2025 Joni Mäkinen";

  // Set the go button
  goButton.id = "go";
  goButton.innerText = "Go";
  goButton.addEventListener("click", () => {
    handleClick();
  });

  // Insert the introduction text and go button to the content parent div
  content.append(introText);
  content.append(goButton);

  // Insert the content columns to the content parent div
  content.append(contentLeft);
  content.append(contentRight);

  // Insert the parent divs to the webpage body
  document.body.append(header);
  document.body.append(content);
  document.body.append(footer);
}

// Handles the go button clicks
function handleClick() {
  // Remove the intro text and go button,
  // since the page is about to change
  introText.remove();
  goButton.remove();
  // Go make two forms (Form/Table view)
  form();
}

main();
