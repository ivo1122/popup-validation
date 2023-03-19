const username = localStorage.getItem("username");
const surname = localStorage.getItem("surname");
const email = localStorage.getItem("email");
const details = localStorage.getItem("details");
const checkbox = localStorage.getItem("checkbox");


  document.getElementById("result-name").textContent = username;
  document.getElementById("result-surname").textContent = surname;
  document.getElementById("result-email").textContent = email;
  document.getElementById("result-details").textContent = details;

  if(checkbox) {
    clicked.textContent = "Pretplatili ste se na newsletter"
  } else {
    clicked.textContent = "Niste se pretplatili na newsletter"
  }
 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "/overview/index.html";
    localStorage.clear();
}); 


 