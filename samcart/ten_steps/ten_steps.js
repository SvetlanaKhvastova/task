document.querySelector('.box_fist_about > div > .scene form > button').addEventListener('click', function (e) {
  e.preventDefault()
  document.querySelector('.card').classList.toggle('is-flipped');
});

document.querySelector('.box_fist_about > div > .scene form > span').addEventListener('click', function (e) {
  e.preventDefault()
  document.querySelector('.card').classList.toggle('is-flipped');
});

document.querySelector('.box_already_registered form button').addEventListener('click', function (e) {
  e.preventDefault()
  showModal(".backdrop_popup.popup_btn")
});

// document.querySelector('.box_already_registered form button').addEventListener('click', function (e) {
//   e.preventDefault()
//   showModal(".backdrop_popup.popup_after_scroll")
// });
  

document.querySelector(".backdrop_popup .popup_form_content .close_popup").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".backdrop_popup").classList.add("is_hidden")
  document.body.style.overflow = ""
})

function showModal(selector) {
  document.querySelector(selector).classList.remove("is_hidden")
  document.body.style.overflow = "hidden"
}


let slider = tns(
{
  container: ".my-slider",
  items: 1,
  navPosition:'bottom'
})





