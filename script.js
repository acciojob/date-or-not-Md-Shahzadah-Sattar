function isDate(input) {
  // If input is already a Date object
  if (input instanceof Date) {
    // Check if it's a valid date
    return !isNaN(input.getTime());
  }

  // If input is a string or a number, try to create a Date object
  const dateObject = new Date(input);

  // Check if the created Date object is a valid date
  return !isNaN(dateObject.getTime());
}

// Test cases
console.log(isDate(new Date()));        // Output: true
console.log(isDate("2023-08-11"));      // Output: true
console.log(isDate("not a date"));      // Output: false
console.log(isDate(123456789));          // Output: false


// Do not change the code below.
// const input = prompt("Enter Date.");
// alert(isDate(input));
