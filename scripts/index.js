// 1. Define root element
// All main divs on the webpage are nested under root element
const root = document.querySelector("#root");

// 2. Create header div
const header = document.createElement("div");
const headerText = document.createTextNode("Curriculus"); // vaihda .innerText?
header.appendChild(headerText);
header.style.height = "200px";

// 3. Create content div
const content = document.createElement("div");
content.style.height = "400px";

// 4. Create footer div
const footer = document.createElement("div");
const footerText = document.createTextNode("ⓒ 2025 Joni Mäkinen");
footer.appendChild(footerText); //// VAIHA KAIKKI append()

// 5. Insert main divs to root
root.appendChild(header);
root.appendChild(content);
root.appendChild(footer);

// 6. Create entry button and add a listener
const entryButton = document.createElement("button");
const entryButtonText = document.createTextNode("Make an entry");
entryButton.appendChild(entryButtonText);
entryButton.addEventListener("click", function (event) {
  event.id = "entry";
  handleClick(event);
});

// 7. Create view records button and add a listener
const viewButton = document.createElement("button");
const viewButtonText = document.createTextNode("View records");
viewButton.appendChild(viewButtonText);
viewButton.addEventListener("click", function (event) {
  handleClick(event);
});

// 8. Insert buttons to content div
content.appendChild(entryButton);
content.appendChild(viewButton);

function handleClick(e) {
  // 9. Decide whether to go make an entry or view records
  if (e.id === "entry") {
    makeEntry();
  } else {
    viewRecords();
  }
}
