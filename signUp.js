var usersData;

if (localStorage.getItem("userData") == null) {

  usersData = [];

} else {
  usersData = JSON.parse(localStorage.getItem("userData"));
}

document.querySelector("#userData").addEventListener("submit", storeData);

function storeData() {
  event.preventDefault();

  var data = {
    email: document.querySelector("#userEmail").value,
    name: document.querySelector("#name").value,
   Lastname: document.querySelector("#Lname").value,

    number: document.querySelector("#userNumber").value,

    password: document.querySelector("#userPassword").value,

    confirmPassword: document.querySelector("#confirmPassword").value,
  };

  usersData.push(data);

  localStorage.setItem("userData", JSON.stringify(usersData));
  document.querySelector("#userEmail").value = "";
  name: document.querySelector("#name").value="";
  Lastname: document.querySelector("#Lname").value="";
  number: document.querySelector("#userNumber").value = "";
  password: document.querySelector("#userPassword").value ="";
  confirmPassword: document.querySelector("#confirmPassword").value="";

  var log = document.createElement("h2");
  log.innerText = "Continue To";
  var login = document.createElement("a");
  login.setAttribute("href", "./login.html");
  login.innerText = "Login";

  document.querySelector("#moveForward").append(log, login);
}
