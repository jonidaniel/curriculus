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
    firstColumnHeader.className = "cell";
    firstColumnHeader.innerText = "Date & Time";
    secondColumnHeader.className = "cell";
    secondColumnHeader.innerText = "Course";
    thirdColumnHeader.className = "cell";
    thirdColumnHeader.innerText = "Study Amount";
    fourthColumnHeader.className = "cell";
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

/*
- Ydinosaaminen
  - Liiketoiminta- ja yrittäjyysosaaminen
    - Liiketoimintaosaaminen
    - Markkinoinnin perusteet
    - Johtaminen ja johtajuus
    - Svenska för tradenomer
    - Ruotsin kielen osaamisen lähtötasotesti
  - Tietojenkäsittelyosaaminen
    - ICT-toimintaympäristö
    - Ohjelmoinnin perustaito
    - Verkkosivujen kehittäminen
    - Tiedonhallinta ja tietokannat
    - Tietoverkot ja tietoturva
    - Professional Communication in English
    - Englannin kielen osaamisen lähtötasotesti
  - Sustainability and Business Analysis
    - Service Design
    - Corporate Social Responsibility
    - Digital Marketing and Sales
    - Data-driven Decision Making
  - Ammatillisena asiantuntijana työyhteisössä
    - Harjoittelu 1
    - Harjoittelu 2
  - Kehittämisosaaja ja työelämän uudistaja
    - Projektinhallinta ja viestintä
    - Tutkimuksellisen kehittämistyön menetelmät
    - Opinnäytetyö
    - Opiskelijasta asiantuntijaksi
      - Opiskelutaidot ja ammatillinen kehittyminen
      - Ammatillinen kehittyminen
      - Onnistuneelle työuralle
- Täydentävä osaaminen
  - Alan täydentävä osaaminen
    - Ohjelmistojen ja digitaalisten palvelujen suunnittelu
      - Digitaalisten palvelujen käyttäjäkeskeinen suunnittelu
      - Digitaalisen palvelun mallinnus
      - Ohjelmistotuotteen määrittely ja suunnittelu
      - Introduction to Mobile App Design and Development
    - Sovellusten kehittäminen
      - Web-sovellusten kehittäminen Javascriptillä
      - Full Stack -sovelluskehitys
      - Sovelluskehitysprojekti
      - Integraatioiden ja API-ratkaisujen kehittäminen ja ylläpito
      - Olio-ohjelmointi
      - Building and Deploying Cross Platform Mobile Apps
      - Web Content Management Systems
      - C# -ohjelmointi
      - Python-ohjelmointi
      - PHP-ohjelmointi
      - C-ohjelmointi
      - Ohjelmoinnin perusteet C++ -kielellä
      - Ruby-ohjelmointi
    - Testaus ja laadunvarmistus
      - Ohjelmistotestauksen perusteet
      - Ohjelmistojen toiminnallinen testaus
      - Käytettävyyden arviointi ja testaus
      - Ohjelmistorobotiikka (RPA)
    - Muu täydentävä IT-osaaminen
      - Introduction to Informatipon Security
      - Johdatus Linux-käyttöjärjestelmään
      - Ääni- ja videotuotanto
      - Mediaelementtien suunnittelu ja toteutus
      - Fundamentals of Subscription Economy
      - DevOps Fundamentals
      - AWS-pilven perusteet
  - Muu täydentävä osaaminen

- Core Competence
  - Competence in Business and Entrepreneurship
    - Understanding Business and the Business Environment
    - Introduction to Marketing
    - Management and Leadership
    - Swedish for Bachelors of Business Administration
    - Initial Test in Swedish Skills
  - Competence in ICT
    - The ICT Environment and Infrastructure
    - Fundamentals of Programming
    - Foundations of Web Development
    - Information Management and Databases
    - Data Networks and Information Security
    - Professional Communication in English
    - Initial Test in English Skills
  - Sustainability and Business Analysis
    - Service Design
    - Corporate Social Responsibility
    - Digital Marketing and Sales
    - Data-driven Decision Making
  - Expert in a Work Community
    - Placement 1
    - Placement 2
  - Expert in Development and Workplace Innovation
    - Project Management and Communication
    - Methods for Research-based Development Work
    - Thesis
    - From a Student to a Professional
      - Study Skills and Professional Orientation
      - Professional Development
      - Starting a Successful Career
- Complementary Competence
  - Complementary Competence Studies Related to the Field of Study
    - Design of Applications and Digital Services
      - User-centered Design of Digital Services
      - Modelling a Digital Service
      - Defining and Designing a Software Product
      - Introduction to Mobile App Design and Development
    - Application Development
      - Dynamic Web Applications with Javascript
      - Full Stack Development
      - Application Development Project
      - Developing and Maintaining Integrations and API's
      - Object-oriented Programming
      - Building and Deploying Cross Platform Mobile Apps
      - Web Content Management Systems
      - Programming with C#
      - Programming with Python
      - Programming with PHP
      - Programming with C
      - Basics of Programming with C++
      - Programming with Ruby
    - Testing and Quality Assurance
      - Fundamentals of Software Testing
      - Functional Testing of Software
      - Usability Testing and Evaluation
      - Robotic Process Automation
    - Other Complementary ICT Competence
      - Introduction to Information Security
      - Introduction to Linux Operating System
      - Audiovisual Production
      - Planning nad Implementation of Media Elements
      - Fundamentals of Subscription Economy
      - DevOps Fundaments
      - AWS Cloud Fundamentals
  - Other Complementary Competence
*/
