function apresentaRegistro() {
  document.getElementById("blocoRegistro").removeAttribute("hidden");
  document.getElementById("blocoRegistro").classList.add("login-page");

  document.getElementById("blocoLogin").hidden = true;
  document.getElementById("blocoLogin").classList.remove("login-page");
}

function apresentaLogin() {
  document.getElementById("blocoRegistro").hidden = true;
  document.getElementById("blocoRegistro").classList.remove("login-page");

  document.getElementById("blocoLogin").removeAttribute("hidden");
  document.getElementById("blocoLogin").classList.add("login-page");
}
