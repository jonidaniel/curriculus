// Scripts Index

// Generates application Index page,
// also handles button clicks directing to Make Entry page or View Records page

// All parent divs on webpage body (header, content, footer) are nested under root element
// and all children (buttons, input fields, texts, etc.) are nested under the parent divs

// Define the root constant
const root = document.querySelector("#root");

// Create the parent divs
const header = document.createElement("div");
const content = document.createElement("div");
const footer = document.createElement("div");
// Create make an entry and view records buttons
const entryButton = document.createElement("button");
const viewButton = document.createElement("button");

function main() {
  // Assign ids to the parent divs
  header.id = "header";
  content.id = "content";
  footer.id = "footer";

  // Set the header and footer texts
  header.innerText = "Curriculus";
  footer.innerText = "ⓒ 2025 Joni Mäkinen";

  // Set the buttons
  entryButton.innerText = "Make an entry";
  entryButton.addEventListener("click", (event) => {
    event.id = "entry";
    handleClick(event);
  });
  viewButton.innerText = "View records";
  viewButton.addEventListener("click", (event) => {
    handleClick(event);
  });

  // Insert the buttons to the content parent div
  content.append(entryButton);
  content.append(viewButton);

  // Insert the parent divs to the root
  root.append(header);
  root.append(content);
  root.append(footer);
}

function handleClick(e) {
  entryButton.remove();
  viewButton.remove();

  // Go to the Make Entry page or the View Records page
  if (e.id === "entry") {
    makeEntry();
  } else {
    viewRecords();
  }
}

main();
