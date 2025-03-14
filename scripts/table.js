// Table

// Generates a record table to the Form/Table view
// User can manipulate the table by pressing the Submit or Show buttons

// Creates a 4-column record table containing previously
// Table cells contain recorded entry date and study amount data
function table(arg) {
  // Get previous records and parse them
  let parsed = JSON.parse(localStorage.getItem("curriculus"));

  let placeholder = "";
  let show = [];
  if (arg == "create") {
    placeholder = parsed;
  } else {
    // Gather all matching entries in an array
    for (let i = 0; i < parsed.length; i++) {
      if (parsed[i].course === arg) {
        show.push(parsed[i]);
      }
    }
    placeholder = show;
  }

  // Sort array
  function compareFn(a, b) {
    a.datetime.replace("-", "");
    a.datetime.replace(",", "");
    a.datetime.replace(" ", "");
    a.datetime.replace(":", "");
    b.datetime.replace("-", "");
    b.datetime.replace(",", "");
    b.datetime.replace(" ", "");
    b.datetime.replace(":", "");
    if (a.datetime > b.datetime) {
      return -1;
    } else if (a.datetime < b.datetime) {
      return 1;
    }
    return 0;
  }

  if (placeholder != null) placeholder.sort(compareFn);

  if (document.querySelector("table")) myTable.remove();

  myTable = document.createElement("table");
  myTable.id = "table";

  // Create table description
  if (placeholder == show) {
    myTable.insertRow().innerText = "Showing entries by course";
  } else {
    myTable.insertRow().innerText = "Showing all entries";
  }

  // Create table header row
  const row = myTable.insertRow();
  const firstColumnHeader = row.insertCell();
  const secondColumnHeader = row.insertCell();
  const thirdColumnHeader = row.insertCell();
  const fourthColumnHeader = row.insertCell();

  // Set the table headers
  firstColumnHeader.className = "table-header";
  firstColumnHeader.innerText = "Date & Time";
  secondColumnHeader.className = "table-header";
  secondColumnHeader.innerText = "Course";
  thirdColumnHeader.className = "table-header";
  thirdColumnHeader.innerText = "Study Amount";
  fourthColumnHeader.className = "table-header";
  fourthColumnHeader.innerText = "Notes";

  // Create the rest of the table one row at a time from top to bottom
  // Left cell, right cell, left cell, right cell...
  if (placeholder != null) {
    for (let i = 0; i < placeholder.length; i++) {
      // Create row
      const row = myTable.insertRow();
      const firstCell = row.insertCell();
      const secondCell = row.insertCell();
      const thirdCell = row.insertCell();
      const fourthCell = row.insertCell();

      // Set dates in the first table column
      firstCell.className = "cell";
      firstCell.innerText = placeholder[i].datetime;

      // Set course in the second table column
      secondCell.className = "cell";
      secondCell.innerText = placeholder[i].course;

      // Set study amounts in the third table column
      thirdCell.className = "cell";
      thirdCell.innerText = placeholder[i].noCommas + " hours";

      // Set notes in the fourth table column
      fourthCell.className = "cell";
      fourthCell.innerText = placeholder[i].notes;
    }
  }
  // Insert the table to content parent div
  content.append(myTable);
}
