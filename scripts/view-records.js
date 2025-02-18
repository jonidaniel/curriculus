// Functions for viewing study records
// This script generates the view records page

// import { format } from "../node_modules/date-fns/index.js";
// import { format } from "date-fns";

function viewRecords(instructionText, inputField, submitButton) {
  // Erase make an entry and view records buttons from the page
  entryButton.remove();
  viewButton.remove();

  // Erase instruction text, input field and submit button from the page (if exists)
  // Note: Conditional checking is necessary because the app user can end up here on view records page
  // either from index page or make entry page
  //
  // App flow:
  //      index ---> make entry ---
  //        |                      |
  //        |                      |
  //         ---> view records <---
  //
  if (instructionText) instructionText.remove();
  if (inputField) inputField.remove();
  if (submitButton) submitButton.remove();

  // Fetch all items from Local Storage
  // First, declare an empty array
  const records = [];
  // Then, go through all items
  for (item in localStorage) {
    // If an item starts with string "curriculus", append it to records array
    if (item.startsWith("curriculus")) {
      // Remove prefix from record
      let modifiedRecord = item.slice(10);
      // Push record to records array without prefix
      records.push({
        value: modifiedRecord,
        date: JSON.parse(localStorage.getItem(item)).date,
      });
    }
  }

  // Create a record table to be shown on page
  // Use records array length to determine the size of recordTable
  const recordTable = document.createElement("table");
  recordTable.id = "table";
  for (let i = 0; i < records.length - 1; i++) {
    recordTable.insertRow().style.border = "2px solid black";
    // Format current record's date
    const date = dateFns.format(records[i].date, "MMMM DD, YYYY HH:MM");
    // Get the newly created row and set current record's date as its innerText
    recordTable.querySelector("tbody").querySelectorAll("tr")[i].innerText =
      date;
    // Get the newly created row and add it a cell
    let cell = recordTable
      .querySelector("tbody")
      .querySelectorAll("tr")
      [i].insertCell();
    cell.style.border = "2px solid black";
    // Set current record's value as the cell's innerText
    cell.innerText = records[i].value;
  }
  // Insert recordTable to content div
  content.append(recordTable);
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
