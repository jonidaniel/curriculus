function saveInput() {
  localStorage.setItem("name", "Joni");
  console.log(localStorage);
}

function validateInput() {
  if (input.value) {
    return true;
  } else {
    return false;
  }
}

//

// // Returns a boolean value
// const validated = validateInput();
// if (validated) {
//   console.log(validated);
//   saveInput();
// } else {
//   console.log(validated);
// }
