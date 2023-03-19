const form = document.getElementById("form");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const details = document.getElementById("details");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");
let isValid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (isValid) {
    openPopup();
  } else {
    e.preventDefault();
  }
});

function openPopup() {
  form.classList.add("blur");
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
  window.location.href = `${window.location.origin}/second-page/index.html`;
}

email.addEventListener("input", checkInputs)
username.addEventListener("input", checkInputs)
surname.addEventListener("input", checkInputs)
details.addEventListener("input", checkInputs)


function checkInputs() {
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const detailsValue = details.value.trim();
  isValid = true;


  if (usernameValue === "") {
    setErrorFor(username);
  } else {
    setSuccessFor(username);
  }

  if(usernameValue.length <= 5) {
    setErrorFor(username)
  } else {
    setSuccessFor(username)
  }

  if (emailValue === "") {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }

  if (surnameValue.length <=4 ) {
    setErrorFor(surname );
  } else {
    setSuccessFor(surname);
  }


  if (detailsValue.length < 8) {
    setErrorFor(details);
  } else {
    setSuccessFor(details);
  }
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  isValid = false;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

form.addEventListener("submit", (e) => {
  localStorage.clear(`user`);

  let username = document.getElementById("username");
  username = username.value;
  localStorage.setItem("username", username);

  let surname = document.getElementById("surname");
  surname = surname.value;
  localStorage.setItem("surname", surname);

  let email = document.getElementById("email");
  email = email.value;
  localStorage.setItem("email", email);

  let details = document.getElementById("details");
  details = details.value;
  localStorage.setItem("details", details);

  let checkbox = document.getElementById("checkbox");

  console.log(checkbox.checked);

  if (checkbox.checked) {
    localStorage.setItem("checkbox", checkbox);
    let clicked = document.getElementById("clicked");
    clicked.textContent = "Pretplatili ste se na newsletter";
  } else {
    clicked.textContent = "Niste pretplaceni na newsletter";
  }
});
