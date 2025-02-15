// 1. Define root element
// All main divs on the webpage are nested under root element
const root = document.querySelector("#root");

// 2. Create header div
const header = document.createElement("div");
header.innerText = "Curriculus";
header.style.height = "200px";

// 3. Create content div
const content = document.createElement("div");
content.style.height = "400px";

// 4. Create footer div
const footer = document.createElement("div");
footer.innerText = "ⓒ 2025 Joni Mäkinen";

// 5. Insert main divs to root
root.append(header);
root.append(content);
root.append(footer);

// 6. Create entry button and add a listener
const entryButton = document.createElement("button");
entryButton.innerText = "Make an entry";
entryButton.addEventListener("click", function (event) {
  event.id = "entry";
  handleClick(event);
});

// 7. Create view records button and add a listener
const viewButton = document.createElement("button");
viewButton.innerText = "View records";
viewButton.addEventListener("click", function (event) {
  handleClick(event);
});

// 8. Insert buttons to content div
content.append(entryButton);
content.append(viewButton);

function handleClick(e) {
  // 9. Decide whether to go make an entry or view records
  if (e.id === "entry") {
    makeEntry();
  } else {
    viewRecords();
  }
}
