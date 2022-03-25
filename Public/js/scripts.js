const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email.value == "") {
    email.classList.add("erroInput");
  } else if (
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1 ||
    email.value.indexOf(".") - email.value.indexOf("@") == 1
  ) {
    email.classList.add("erroInput");
  } else {
    email.classList.add("sucessoInput");
  }

  if (!isNaN(email.value) == true && email.value.length == 11) {
    email.classList.add("sucessoInput");
  } else {
    email.classList.add("erroInput");
  }

  if (password.value == "") {
    password.classList.add("erroInput");
  } else if (password.value.length <= 5) {
    password.classList.add("erroInput");
  }
});
