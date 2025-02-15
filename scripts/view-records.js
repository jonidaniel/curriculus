function viewRecords() {
  // 1. Erase both buttons from the page
  entryButton.remove();
  viewButton.remove();

  // 2. Fetch records from Local Storage
  const recordList = [];
  // Go through all items in Local Storage
  // If an item starts with "curriculus", append it to recordList
  for (item in localStorage) {
    if (
      item[0] === "c" &&
      item[1] === "u" &&
      item[2] === "r" &&
      item[3] === "r" &&
      item[4] === "i" &&
      item[5] === "c" &&
      item[6] === "u" &&
      item[7] === "l" &&
      item[8] === "u" &&
      item[9] === "s"
    ) {
      recordList.push(item);
    }
  }

  // 3. Create the record table
  const records = document.createElement("table");
  for (let i = 0; i < recordList.length - 1; i++) {
    records.insertRow();
    records.querySelector("tbody").querySelectorAll("tr")[i].innerText =
      recordList[i];
  }

  console.log(records);

  // 4. Insert table to content div
  content.append(records);
}
