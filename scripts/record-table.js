// Record Table functions

// Generates a record table to the Entry/View page

// Gets Curriculus records from Local Storage
// and shows them on the page in a sorted table
function recordTable() {
  createTable();

  // Creates a 2-column record table to be shown on page
  // Table cells contain recorded entry date and study amount data
  function createTable() {
    // Get previous records and parse them
    let parsed = JSON.parse(localStorage.getItem("curriculus"));

    // Sort parsed
    function compareFn(a, b) {
      if (a.datetime > b.datetime) {
        return -1;
      } else if (a.datetime < b.datetime) {
        return 1;
      }
      return 0;
    }

    if (parsed != null) parsed.sort(compareFn);

    if (document.querySelector("table")) table.remove();

    table = document.createElement("table");
    table.id = "table";

    // Create the table header row
    const row = table.insertRow();
    const firstColumnHeader = row.insertCell();
    const secondColumnHeader = row.insertCell();
    const thirdColumnHeader = row.insertCell();
    const fourthColumnHeader = row.insertCell();

    // Set table headers
    firstColumnHeader.className = "table-header";
    firstColumnHeader.innerText = "Date & Time";
    secondColumnHeader.className = "table-header";
    secondColumnHeader.innerText = "Course";
    thirdColumnHeader.className = "table-header";
    thirdColumnHeader.innerText = "Study Amount";
    fourthColumnHeader.className = "table-header";
    fourthColumnHeader.innerText = "Notes";

    // Create rest of the table one row at a time from top to bottom
    // Left cell, right cell, left cell, right cell...
    if (parsed != null) {
      for (let i = 0; i < parsed.length; i++) {
        // Create row
        const row = table.insertRow();
        const firstCell = row.insertCell();
        const secondCell = row.insertCell();
        const thirdCell = row.insertCell();
        const fourthCell = row.insertCell();

        // Set dates in the first table column
        firstCell.className = "cell";
        firstCell.innerText = parsed[i].datetime;

        // Set course in the second table column
        secondCell.className = "cell";
        secondCell.innerText = parsed[i].course;

        // Set study amounts in the third table column
        thirdCell.className = "cell";
        thirdCell.innerText = parsed[i].noCommas + " hours";

        // Set notes in the fourth table column
        fourthCell.className = "cell";
        fourthCell.innerText = parsed[i].notes;
      }
    }
    // Insert table to content parent div
    content.append(table);
  }
}
