function viewRecords() {
  // 1. Erase both buttons from the page
  entryButton.remove();
  viewButton.remove();

  // 2. Create the record list
  const records = document.createElement("table");
  records.insertRow();
  records.insertRow();
  records.insertRow();
  records.querySelector("tbody").querySelectorAll("tr")[0].innerText = "a";
  records.querySelector("tbody").querySelectorAll("tr")[1].innerText = "b";
  records.querySelector("tbody").querySelectorAll("tr")[2].innerText = "c";

  // 3. Insert table to content div
  content.append(records);
}
