var button = document.querySelector(".buttonjs");
var popup = document.querySelector(".popup");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
});



var form = document.querySelector(".popup-form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");

form.addEventListener("submit", function (evt) {
  if (!input1.value || !input2.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
