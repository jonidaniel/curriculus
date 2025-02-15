function makeEntry() {
  // 1. Erase both buttons from the page
  entryButton.remove();
  viewButton.remove();

  // 2. Create the hours input field
  const input = document.createElement("input");
  input.value = "Hours";
  input.addEventListener("focus", (event) => {
    input.value = null;
  });

  // 3. Create the course selection dropdown list
  const list = document.createElement("form");

  // 4. Insert elements to content div
  content.appendChild(input);
  content.appendChild(list);
}
