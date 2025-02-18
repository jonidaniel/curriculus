// Make Entry page
// This script generates the make entry page,
// also handles submit button click directing to view records page

// Create page components
const instructionText = document.createElement("p");
const inputField = document.createElement("input");
const submitButton = document.createElement("button");

function makeEntry() {
  // Set the instruction text
  instructionText.innerText =
    "How many hours did you study, and on what course?\n(use dots in decimals)";

  // Set the hours input field
  inputField.value = "Hours";
  inputField.addEventListener("focus", () => {
    inputField.value = null;
  });

  // Set the submit button
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", () => {
    handleSubmit();
  });

  // Insert components to content parent div
  content.append(instructionText);
  content.append(inputField);
  content.append(submitButton);
}

function handleSubmit() {
  const validated = validateInput(inputField.value);
  if (validated) {
    saveEntry(inputField);

    // Erase components from the page
    instructionText.remove();
    inputField.remove();
    submitButton.remove();

    viewRecords();
  }
}

function validateInput(value) {
  // Make sure that inputted value is a number
  if (!isNaN(value) && value !== "") {
    return true;
  } else {
    document.querySelector("input").style.border = "2px solid red";
    return false;
  }
}

function saveEntry(entry) {
  // Erase make an entry and view records buttons from the page
  entryButton.remove();
  viewButton.remove();

  // Add prefix to study hours input
  // Needed when fetching everything from and iterating through Local Storage
  // Prefix identifies a Local Storage item as a Curriculus record
  let id = Math.random().toString(16).slice(2);
  const entryKey = "curriculus" + id + entry.value;
  // Form an object that contains entry data and metadata
  const entryData = {
    date: dateFns.format(new Date(), "YYYY-MM-DD,  HH:mm:ss"),
    data: inputField.value,
  };
  // Save entry to Local Storage as a key-value pair
  // Turn entryData into a JSON string
  // Note: Use JSON.parse() when getting items later
  localStorage.setItem(entryKey, JSON.stringify(entryData));
  // localStorage.clear();
}
