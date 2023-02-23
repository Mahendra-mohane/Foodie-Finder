document.querySelector("#userData").addEventListener("submit", checkData);

function checkData(event) {
  event.preventDefault();

  var enteredEmail = document.querySelector("#enteredEmail").value;

  // console.log(enteredEmail)

  var enteredPassword = document.querySelector("#enteredPassword").value;

  // console.log(enteredPassword)

  var usersData = JSON.parse(localStorage.getItem("userData"));
  // console.log(usersData)

  var flag = false;

  usersData.forEach((everyUser) => {
    if (
      enteredEmail == everyUser.email &&
      enteredPassword == everyUser.password
    ) {
      flag = true;
    }
  });

  if (flag) {
    alert("Login Successful");
    window.location.href = "./index.html";
  } else {
    alert("Check Login Email and Password");
  }
  document.querySelector("#enteredEmail").value = "";
  document.querySelector("#enteredPassword").value = "";
}
