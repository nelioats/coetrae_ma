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

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("ola");
};

function logar() {
  // const botaoLogin = document.getElementById("botaoLogin");

  // console.log("teste");

  email = document.getElementById("emailLogin").value;
  password = document.getElementById("passLogin").value;

  if (email == "coetraemaranhao@gmail.com" && password == 123456) {
    console.log("logado!");
    window.location.href =
      "file:///C:/laragon/www/coetraema/coetrae_ma/users.html";
  } else {
    console.log("erro de credencial!");
  }
}
