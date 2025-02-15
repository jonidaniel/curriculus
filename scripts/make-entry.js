function makeEntry() {
  // 1. Erase both buttons from the page
  entryButton.remove();
  viewButton.remove();

  // 2. Create instructions
  const instructions = document.createElement("p");
  instructions.innerText = "How many hours did you work and on what course?";

  // 3. Create the hours input field
  const input = document.createElement("input");
  input.value = "Hours";
  input.addEventListener("focus", (event) => {
    input.value = null;
  });

  // // 4. Create the course selection dropdown list
  // const list = document.createElement("form");

  // 5. Create the submit button and add a listener
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", function () {
    handleSubmit(input);
  });

  // 6. Insert elements to content div
  content.append(instructions);
  content.append(input);
  // content.append(list);
  content.append(submitButton);
}

function handleSubmit(input) {
  // 7. Validate submit values
  // Returns a boolean value
  const validated = validateInput(input);
  if (validated) {
    console.log("Validation: " + validated);
    saveInput(input);
  } else {
    console.log("Validation: " + validated);
  }
}

function validateInput(input) {
  // Check if input.value is a number
  if (!isNaN(input.value) && input.value !== "") {
    return true;
  } else {
    return false;
  }
}

function saveInput(input) {
  // Add a prefix to hours
  // This is used when fetching everything from Local Storage
  // to see if an item is really a curriculus record
  const item = "curriculus" + input.value;
  // Save hours to Local Storage
  localStorage.setItem(item, input.value);
}
