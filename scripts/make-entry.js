// Functions for making an entry
// This script generates the make entry page,
// also handles submit button click directing to view records page

function makeEntry() {
  // Erase entry and view records buttons from the page
  entryButton.remove();
  viewButton.remove();

  // Create instruction text for user
  const instructionText = document.createElement("p");
  instructionText.innerText =
    "How many hours did you study, and on what course?\n(use dots in decimals)";

  // Create hours input field and add a listener to it
  const inputField = document.createElement("input");
  inputField.value = "Hours";
  inputField.addEventListener("focus", () => {
    inputField.value = null;
  });

  // Create submit button and add a listener to it
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", function () {
    handleSubmit(instructionText, inputField, submitButton);
  });

  // Insert elements to content div
  content.append(instructionText);
  content.append(inputField);
  content.append(submitButton);
}

function handleSubmit(instructionText, inputField, submitButton) {
  // Validate submit values
  // Returns a boolean value
  const validated = validateInput(inputField);
  if (validated) {
    saveInput(inputField);
    // exports.viewRecords(instructionText, inputField, submitButton);
    viewRecords(instructionText, inputField, submitButton);
  } else {
  }
}

function validateInput(inputField) {
  // Check if inputField.value is a number
  if (!isNaN(inputField.value) && inputField.value !== "") {
    return true;
  } else {
    document.querySelector("input").style.border = "2px solid red";
    return false;
  }
}

function saveInput(inputField) {
  // Add prefix to hours input
  // This is useful when fetching everything from Local Storage
  // and seeing if an item is really a Curriculus record
  const itemKey = "curriculus" + inputField.value;
  // Generate item value with date
  const itemValue = { value: inputField.value, date: Date() };
  // Save hours input to Local Storage
  // Using JSON.stringify when setting items (and JSON.parse when getting items)
  localStorage.setItem(itemKey, JSON.stringify(itemValue));
}
