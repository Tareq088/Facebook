const password = document.querySelector("#password");
const togglepassword = document.querySelector("#togglepassword");

togglepassword.addEventListener("click",() =>{
  const password_type = password.getAttribute("type") === "password"? "text" : "password";
  password.setAttribute("type",password_type);
  togglepassword.classList.toggle("bi-eye")
});