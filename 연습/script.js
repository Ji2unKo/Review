const modalForm = document.querySelector(".new-login");
const closeIcon = document.querySelector(".close");
const loginButton = document.querySelector(".login");
const inputValue = document.querySelectorAll(".form-control");
const checkBoxChange = document.querySelector(".checkbox-login");

const faEye = document.querySelector(".fa-eye"),
  faEyeSlash = document.querySelector(".fa-eye-slash");

loginButton.addEventListener("click", () => {
  modalForm.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  modalForm.style.display = "none";
  checkBoxChange.checked = false;
  faEye.style.display = "inline";
  faEyeSlash.style.display = "none";
  inputValue[1].type = "password";
  inputValue.forEach((val) => {
    val.value = "";
  });
});

faEye.addEventListener("click", () => {
  faEye.style.display = "none";
  faEyeSlash.style.display = "inline";
  inputValue[1].type = "text";
});

faEyeSlash.addEventListener("click", () => {
  faEye.style.display = "inline";
  faEyeSlash.style.display = "none";
  inputValue[1].type = "password";
});
