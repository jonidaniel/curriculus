// Define root element
// All main divs on the webpage are nested under root element
// and all sub divs are nested under the main divs
const root = document.querySelector("#root");

// Create header div
const header = document.createElement("div");
header.innerText = "Curriculus";
header.style.height = "200px";

// Create content div
const content = document.createElement("div");
content.style.height = "400px";

// Create footer div
const footer = document.createElement("div");
footer.innerText = "ⓒ 2025 Joni Mäkinen";

// Insert main divs to root
root.append(header);
root.append(content);
root.append(footer);

// Create entry button and add a listener to it
const entryButton = document.createElement("button");
entryButton.innerText = "Make an entry";
entryButton.addEventListener("click", function (event) {
  event.id = "entry";
  handleClick(event);
});

// Create view records button and add a listener to it
const viewButton = document.createElement("button");
viewButton.innerText = "View records";
viewButton.addEventListener("click", function (event) {
  handleClick(event);
});

// Insert buttons to content div
content.append(entryButton);
content.append(viewButton);

function handleClick(e) {
  // Decide whether to go make an entry or view records
  if (e.id === "entry") {
    makeEntry();
  } else {
    viewRecords();
  }
}
