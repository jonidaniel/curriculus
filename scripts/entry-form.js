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
  // Create entry form now (upper part of webpage)
  createForm();
  // Then, go make a record table (lower part of webpage)
  recordTable();

  // Creates the entry form
  function createForm() {
    // Set the hours text
    hoursText.innerText = "How many hours did you study?";

    // Set the hours input field
    hoursInput.value = "e.g. 2.5";
    hoursInput.style.color = "grey";
    hoursInput.addEventListener("focus", () => {
      hoursInput.value = null;
      hoursInput.style.color = "black";
      document.querySelectorAll("input")[0].style.border = null;
    });

    // Set the courses text
    coursesText.innerText = "On what course?";

    // Set the courses input field
    coursesInput.value = "e.g. Web-sovellusten kehittäminen Javascrip...";
    coursesInput.style.color = "grey";
    coursesInput.addEventListener("focus", () => {
      coursesInput.value = null;
      coursesInput.style.color = "black";
      document.querySelectorAll("input")[1].style.border = null;
    });

    // Set the notes text
    notesText.innerText = "Add notes?";

    // Set the notes input field
    notesInput.value = "e.g. Developing the User Interface with...";
    notesInput.style.color = "grey";
    notesInput.addEventListener("focus", () => {
      notesInput.value = null;
      notesInput.style.color = "black";
    });

    // Set the submit button
    submitButton.id = "submit";
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", () => {
      handleSubmit(hoursInput.value, coursesInput.value, notesInput.value);
    });

    // Insert components to content parent div
    content.append(hoursText);
    content.append(hoursInput);
    content.append(coursesText);
    content.append(coursesInput);
    content.append(notesText);
    content.append(notesInput);
    content.append(submitButton);
  }
}

// Handles submit button clicks
function handleSubmit(hours, course, notes) {
  // Replace commas with dots
  let noCommas = hours.replace(",", ".");
  // Validate hours input and courses input in respective functions
  // No need to validate notes input
  const hoursValidated = validateHours(noCommas);
  const coursesValidated = validateCourses(course);
  if (hoursValidated && coursesValidated) {
    // Date and time of submit are saved
    const datetime = dateFns.format(new Date(), "YYYY-MM-DD,  HH:mm:ss");

    function idGenerator() {
      let id = "";
      let possible = "abcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < 8; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      return id;
    }

    // Each record is assigned a unique id
    const id = idGenerator();

    saveEntry({ id, datetime, noCommas, course, notes });
    // Go update the record table
    recordTable();
  }
}

// Validates study hours input
// Restricts input to only numbers
function validateHours(value) {
  if (!isNaN(value) && value !== "") {
    return true;
  } else {
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
// All records are encapsulated under the same Local Storage key, curriculus
// Key records contains an array that contains all Curriculus records as objects
function saveEntry(entry) {
  // Erase default course and notes
  if (entry.course == "e.g. Web-sovellusten kehittäminen Javascrip...")
    entry.course = "";
  if (entry.notes == "e.g. Developing the User Interface with...")
    entry.notes = "";

  // Get previous entries
  let records = localStorage.getItem("curriculus");
  // If there's no previous entries
  if (records == null) {
    let json = JSON.stringify([entry]);
    localStorage.setItem("curriculus", json);
    // If there's previous entries
  } else {
    let parsed = JSON.parse(records);
    parsed.push(entry);
    let json = JSON.stringify(parsed);
    localStorage.setItem("curriculus", json);
  }
}
