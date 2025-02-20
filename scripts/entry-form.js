// Entry Form functions

// Generates an entry form to the Entry/View page

// Create Entry Form components
const hoursText = document.createElement("p");
const hoursInput = document.createElement("input");
const coursesText = document.createElement("p");
const coursesInput = document.createElement("input");
const notesText = document.createElement("p");
const notesInput = document.createElement("input");
const submitButton = document.createElement("button");

// Creates an entry form and shows it on the page
function entryForm() {
  // Go make a record table
  recordTable();
  createForm();

  // Creates the entry form
  function createForm() {
    // Set the hours text
    hoursText.innerText =
      "How many hours did you study?\n(use dots in decimals)";

    // Set the hours input field
    hoursInput.value = "Hours";
    hoursInput.addEventListener("focus", () => {
      hoursInput.value = null;
    });

    // Set the courses text
    coursesText.innerText = "On what course?";

    // Set the courses input field
    coursesInput.value = "Courses";
    coursesInput.addEventListener("focus", () => {
      coursesInput.value = null;
    });

    // Set the notes text
    notesText.innerText = "Add notes?";

    // Set the notes input field
    notesInput.value = "Notes";
    notesInput.addEventListener("focus", () => {
      notesInput.value = null;
    });

    // Set the submit button
    submitButton.id = "submit";
    submitButton.innerText = "Submit";
    submitButton.innerHTML += "<br />";
    submitButton.addEventListener("click", () => {
      handleSubmit(hoursInput.value, coursesInput.value, notesInput.value);
    });

    // Insert components to content parent div
    // If content has no children,
    // append components to the end of content
    if (!content.hasChildNodes()) {
      content.append(hoursText);
      content.append(hoursInput);
      content.append(coursesText);
      content.append(coursesInput);
      content.append(notesText);
      content.append(notesInput);
      content.append(submitButton);
      // If content has children,
      // insert components before the first child
    } else {
      content.insertBefore(submitButton, content.firstChild);
      content.insertBefore(notesInput, content.firstChild);
      content.insertBefore(notesText, content.firstChild);
      content.insertBefore(coursesInput, content.firstChild);
      content.insertBefore(coursesText, content.firstChild);
      content.insertBefore(hoursInput, content.firstChild);
      content.insertBefore(hoursText, content.firstChild);
    }
  }
}

// Handles submit button clicks
function handleSubmit(hours, courses, notes) {
  // Validate hours input and courses input in respective functions
  // No need to validate notes input
  const hoursValidated = validateHours(hours);
  const coursesValidated = validateCourses(courses);
  if (hoursValidated && coursesValidated) {
    let entry = saveEntry({ hours, courses, notes });
    // Go update the record table
    // I.e. remove it and make a new one
    // Boolean type argument tells recordTable()
    // that there's already a table on the page and that it needs to be updated
    recordTable(true, entry);
  }
}

// Validates study hours input
// Restricts input to only numbers
function validateHours(value) {
  if (!isNaN(value) && value !== "") {
    return true;
  } else {
    // !!!!!!! tekee kun painaa ulos
    document.querySelectorAll("input")[0].style.border = "2px solid red";
    return false;
  }
}

// Validates courses input
// Checks that a course is selected
function validateCourses(value) {
  if (value != "Courses" && value != "") {
    return true;
  } else {
    document.querySelectorAll("input")[1].style.border = "2px solid red";
    return false;
  }
}

// Saves entries to Local Storage
function saveEntry(entry) {
  // Add prefix to entry
  // Needed when fetching everything from and iterating through Local Storage
  // Prefix identifies a Local Storage item as a Curriculus record
  let id = Math.random().toString(16).slice(2);
  const entryKey = "curriculus" + id;
  // Form an entry data object
  const entryData = {
    date: dateFns.format(new Date(), "YYYY-MM-DD,  HH:mm:ss"),
    data: entry,
  };
  // Save entry to Local Storage as a key-value pair
  // JSON.stringify() turns entryData into a JSON string
  // Note: Use JSON.parse() when getting items later
  localStorage.setItem(entryKey, JSON.stringify(entryData));
  // localStorage.clear();

  return entry;
}
