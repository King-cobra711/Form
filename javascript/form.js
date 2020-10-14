function checkPW() {
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  if (pass1.length > 0 && pass2.length > 0) {
    if (pass1 != pass2) {
      document.getElementById("pass").style.border = "red 1px solid";
      document.getElementById("pass").style.color = "red";
      document.getElementById("pass").style.display = "block";
      document.getElementById("pass").innerHTML = "Passwords do not match!";
    } else {
      document.getElementById("pass").style.display = "block";
      document.getElementById("pass").style.border = "green 1px solid";
      document.getElementById("pass").style.color = "rgb(0, 207, 0)";
      document.getElementById("pass").innerHTML = "Passwords match!";
    }
  } else {
    document.getElementById("pass").style.display = "none";
  }
}
function date() {
  var date = document.getElementById("dmy");
  if (date.value.length > 0) {
    date.type = "date";
  } else {
    date.type = "text";
  }
}
// function validateEntireForm() {
//   for (loop = 0; loop < Form.elements.length; loop++) {
//     if (form.elements[loop].classlist.contains(required).value < 1) {
//       alert("Please fill out *required fields");
//       break;
//       return false;
//     } else if (form.elements[loop].hasAttribute("pattern")) {
//       if (form.elements[loop].checkValidity() == false) {
//         alert(
//           "Form input fields are incomplete/inccorect. Please review and try again."
//         );
//         return false;
//       }
//     } else {
//       return true;
//     }
//   }
// }
function validateEntireForm() {
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  for (loop = 0; loop < form.elements.length; loop++) {
    if (
      form.elements[loop].classList.contains("required") &&
      form.elements[loop].value.length < 1
    ) {
      alert("Please fill out the *Required fields");
      form.onsubmit = event.preventDefault();
      break;
    } else if (form.elements[loop].hasAttribute("pattern")) {
      if (form.elements[loop].checkValidity() == false) {
        alert("Form invalid. Please check if inputs are correct.");
        form.onsubmit = event.preventDefault();
        break;
      }
    } else if (pass2 != pass1) {
      alert("Password do not match");
      form.onsubmit = event.preventDefault();
      break;
    }
  }
}
