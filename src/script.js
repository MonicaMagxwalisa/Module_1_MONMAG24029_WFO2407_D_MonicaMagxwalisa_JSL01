function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = ""; // Placeholder for validation result

  // Regular expression to match 'pet_' followed by alphanumeric characters
  const validSyntax = /^pet_\w+$/;

  if (validSyntax.test(input)) {
    result = 'Valid Syntax <span class="valid"></span>'; // Green circle emoji or text
  } else {
    result = 'Invalid Syntax <span class="invalid"></span>'; // Red circle emoji or text
  }

  document.getElementById("result").innerHTML = result;
}
