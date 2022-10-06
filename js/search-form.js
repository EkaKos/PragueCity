
const btnOpen = document.querySelector(".button-action")
const formConteiner = document.querySelector(".search-form-box")
const checkInDate = document.querySelector(".date-in")
const checkOutDate = document.querySelector(".date-out")
const checkInName = document.querySelector(".name")
const searchForm = document.querySelector(".search-form")

btnOpen.addEventListener("click", function (event) {
  event.preventDefault();
 formConteiner.classList.toggle("search-form-show");
  checkInDate.focus();

});

searchForm.addEventListener("submit", function (event) {
  if (!checkInDate.value, !checkOutDate.value || !checkInName.value) {
    event.preventDefault();
  }
});