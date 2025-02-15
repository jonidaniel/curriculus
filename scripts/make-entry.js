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
  content.append(input);
  content.append(list);
}

// function saveInput() {
//   localStorage.setItem("name", "Joni");
//   console.log(localStorage);
// }

// function validateInput() {
//   if (input.value) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Returns a boolean value
// const validated = validateInput();
// if (validated) {
//   console.log(validated);
//   saveInput();
// } else {
//   console.log(validated);
// }
