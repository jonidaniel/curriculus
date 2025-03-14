// Form

// Generates two entry forms to the Form/Table view

// Create left side entry form components
const hoursText = document.createElement("p");
const hoursInput = document.createElement("input");
const coursesText = document.createElement("p");
const coursesInput = document.createElement("input");
const outerSearchContainer = document.createElement("div");
const innerSearchContainer = document.createElement("div");
const dropdownContainer = document.createElement("div");
const dropdownList = document.createElement("ul");
const notesText = document.createElement("p");
const notesInput = document.createElement("input");
const submitButton = document.createElement("button");

// Create right side entry form components
const showByCourseText = document.createElement("p");
const outerSearchContainer2 = document.createElement("div");
const innerSearchContainer2 = document.createElement("div");
const dropdownContainer2 = document.createElement("div");
const dropdownList2 = document.createElement("ul");
const coursesInput2 = document.createElement("input");
const showButton = document.createElement("button");

// Creates both entry forms and shows them on the webpage
function form() {
  // Set the hours text
  hoursText.innerText = "How many hours did you study?";
  // Set the hours input field
  hoursInput.value = "e.g. 2.5";
  hoursInput.style.color = "grey";
  hoursInput.addEventListener("focus", () => {
    hoursInput.value = null;
    hoursInput.style.color = "black";
    hoursInput.style.border = null;
  });

  // Set the courses text
  coursesText.innerText = "On what course?";
  // Set the courses input field
  coursesInput.type = "text";
  coursesInput.id = "input-value";
  coursesInput.value = "Search...";
  coursesInput.style.color = "grey";
  coursesInput.addEventListener("keyup", () => {
    getSearchItems("");
  });
  coursesInput.addEventListener("focus", () => {
    coursesInput.value = null;
    coursesInput.style.color = "black";
    coursesInput.style.border = null;
  });
  // Set the courses input field 2
  coursesInput2.type = "text";
  coursesInput2.id = "input-value2";
  coursesInput2.value = "Search...";
  coursesInput2.style.color = "grey";
  coursesInput2.addEventListener("keyup", () => {
    getSearchItems("2");
  });
  coursesInput2.addEventListener("focus", () => {
    coursesInput2.value = null;
    coursesInput2.style.color = "black";
    coursesInput2.style.border = null;
  });
  // Set the search container
  outerSearchContainer.className = "outer-search-container";
  innerSearchContainer.id = "inner-search-container";
  dropdownContainer.id = "dropdown-container";
  dropdownContainer.addEventListener("click", (event) => {
    let inputField = document.getElementById("input-value");
    inputField.value = event.target.innerText;
    dropdownContainer.innerHTML = "";
  });
  dropdownList.id = "dropdown-list";
  // Set the search container 2
  outerSearchContainer2.className = "outer-search-container2";
  innerSearchContainer2.id = "inner-search-container2";
  dropdownContainer2.id = "dropdown-container2";
  dropdownContainer2.addEventListener("click", (event) => {
    let inputField = document.getElementById("input-value2");
    inputField.value = event.target.innerText;
    dropdownContainer2.innerHTML = "";
  });
  dropdownList2.id = "dropdown-list2";

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

  // Set the show by course text
  showByCourseText.innerText = "Show study entries by course:";

  // Set the show button
  showButton.id = "show";
  showButton.innerText = "Show";
  showButton.addEventListener("click", () => {
    handleShow(coursesInput2.value);
  });

  // Build the search container
  innerSearchContainer.append(coursesInput);
  dropdownContainer.append(dropdownList);
  outerSearchContainer.append(innerSearchContainer);
  outerSearchContainer.append(dropdownContainer);

  // Build the search container 2
  innerSearchContainer2.append(coursesInput2);
  dropdownContainer2.append(dropdownList2);
  outerSearchContainer2.append(innerSearchContainer2);
  outerSearchContainer2.append(dropdownContainer2);

  // Insert some components to left content div
  contentLeft.append(hoursText);
  contentLeft.append(hoursInput);
  contentLeft.append(coursesText);
  contentLeft.append(outerSearchContainer);
  contentLeft.append(notesText);
  contentLeft.append(notesInput);
  contentLeft.append(submitButton);

  // Insert other components to right content div
  contentRight.append(showByCourseText);
  contentRight.append(outerSearchContainer2);
  contentRight.append(showButton);

  // Go make a record table (lower part of webpage)
  table("create");
}

function getSearchItems(placeholder) {
  // Get courses input value
  let inputValue = document.getElementById(`input-value${placeholder}`).value;
  inputValue = inputValue.trim().toLowerCase();

  // Get courses list (ul element)
  let list = document.getElementById(`dropdown-container${placeholder}`);
  list.innerHTML = "";

  // If something is searched
  if (inputValue.length > 0) {
    // Iterate through all Laurea courses
    for (let item in coursesEN) {
      // If index is larger than -1
      if (coursesEN[item].toLowerCase().indexOf(inputValue) > -1) {
        let bold = coursesEN[item];

        // Search for character matches from all courses,
        // and then highlight the matching characters (by bolding)
        const matches = bold.match(new RegExp(inputValue, "i"));
        bold = bold.replace(matches[0], `<strong>${matches[0]}</strong>`);

        // Create list item (li element),
        // set it as the bolded item
        // and append it to list
        let crtElmt = document.createElement("li");
        crtElmt.innerHTML = bold;
        list.appendChild(crtElmt);
      }
    }
    // If nothing is searched
  } else {
    list.innerHTML = "";
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
    // const datetime = dateFns.format(new Date(), "YYYY-MM-DD,  HH:mm:ss");
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    const datetime = `${year}-${month}-${day},  ${hour}:${minutes}:${seconds}`;

    function idGenerator() {
      let id = "";
      let possible = "abcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < 16; i++)
        id += possible.charAt(Math.floor(Math.random() * possible.length));
      return id;
    }

    // Each record is assigned a unique id
    const id = idGenerator();

    // Reset all input fields
    hoursInput.value = "e.g. 2.5";
    coursesInput.value = "Search...";
    notesInput.value = "e.g. Developing the User Interface with...";
    hoursInput.style.color = "grey";
    coursesInput.style.color = "grey";
    notesInput.style.color = "grey";

    saveEntry({ id, datetime, noCommas, course, notes });
    // Go update the record table
    table("create");
  }
}

// Handles show button clicks
function handleShow(course) {
  if (validateCourses2(coursesInput2.value)) {
    // Reset course field
    coursesInput2.value = "Search...";
    coursesInput2.style.color = "grey";
    // Go update the record table
    // The argument course tells recordTable that this time we're showing records,
    // not submitting them
    table(course);
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
// Checks that a course is selected or wrote down
function validateCourses(value) {
  if (value != "Search..." && value != "") {
    return true;
  } else {
    document.querySelectorAll("input")[1].style.border = "2px solid red";
    return false;
  }
}

// Validates courses 2 input
// Checks that a course is selected or wrote down
function validateCourses2(value) {
  if (value != "Search..." && value != "") {
    return true;
  } else {
    document.querySelectorAll("input")[3].style.border = "2px solid red";
    return false;
  }
}

// Saves entries to Local Storage
// All records are encapsulated under the same Local Storage key, curriculus
// Key records contains an array that contains all Curriculus records as objects
function saveEntry(entry) {
  // Erase default notes value
  if (entry.notes == "e.g. Developing the User Interface with...")
    entry.notes = "";

  // Get previous entries
  let records = localStorage.getItem("curriculus");
  // If there are no previous entries
  if (records == null) {
    let json = JSON.stringify([entry]);
    localStorage.setItem("curriculus", json);
    // If there are previous entries
  } else {
    let parsed = JSON.parse(records);
    parsed.push(entry);
    let json = JSON.stringify(parsed);
    localStorage.setItem("curriculus", json);
  }
}
