if (document.querySelector(".iMSLnD") && !document.querySelector(".new_block_right")) {
  document.querySelector(".iMSLnD").insertAdjacentHTML(
    "afterbegin",
    `<div class="new_block_right"><div class="new_block_txt"></div></div>
    <div class="new_block_left"></div>`
  );
}

if (document.querySelector(".new_block_right")) {
  document.querySelector(".new_block_right").insertAdjacentElement("beforeend", document.querySelector(".daKVjE"));
  document.querySelector(".new_block_right").insertAdjacentElement("beforeend", document.querySelector(".hiuISs"));
  document.querySelector(".new_block_right").insertAdjacentElement("beforeend", document.querySelector(".JFxfs"));
}

if (document.querySelector(".new_block_left")) {
  document.querySelector(".new_block_right").insertAdjacentElement("beforeend", document.querySelector(".TLcL"));
}
