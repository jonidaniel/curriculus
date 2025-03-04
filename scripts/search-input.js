function searches() {
  let doc = document.getElementById("inp-src").value;
  doc = doc.trim().toLowerCase();

  let docOut = document.getElementById("dropdown-src");
  docOut.innerHTML = "";

  let x = coursesEN;
  if (doc.length > 0) {
    for (let j in x) {
      if (x[j].toLowerCase().indexOf(doc) > -1) {
        let bold = x[j];

        const matches = bold.match(new RegExp(doc, "i"));
        bold = bold.replace(matches[0], `<strong>${matches[0]}</strong>`);

        let crtElmt = document.createElement("li");
        crtElmt.innerHTML = bold;
        docOut.appendChild(crtElmt);
      }
    }
  } else {
    docOut.innerHTML = "";
  }
}
