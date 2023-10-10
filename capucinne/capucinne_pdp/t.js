if (!document.querySelector(".product-block--sales-point + .shopify-block.shopify-app-block + .product-block").classList.contains("before_lable_wrapp")) {
  document.querySelector(".product-block--sales-point + .shopify-block.shopify-app-block + .product-block").classList.add("before_lable_wrapp");
}
if (document.querySelector(".product-block--sales-point + .shopify-block.shopify-app-block + .product-block").classList.contains("before_lable_wrapp")) {
  document.querySelectorAll(".variant-wrapper.variant-wrapper--dropdown .variant__label").forEach((el) => {
    if (el.textContent.includes("Ring size") && !document.querySelector(".ring_size_var")) {
      el.closest(".variant-wrapper--dropdown").classList.add("ring_size_var");
      // document.querySelector(".size_guide").after(el.closest(".variant-wrapper--dropdown.ring_size_var"));
    }
    if (el.textContent.includes("Material") && !document.querySelector(".material_var")) {
      el.closest(".variant-wrapper--dropdown").classList.add("material_var");
      // document.querySelector(".size_guide").after(el.closest(".variant-wrapper--dropdown.ring_size_var"));
    }
    if (el.textContent.includes("Stone") && !document.querySelector(".stone_var")) {
      el.closest(".variant-wrapper--dropdown").classList.add("stone_var");
      // document.querySelector(".size_guide").after(el.closest(".variant-wrapper--dropdown.ring_size_var"));
    }
    if (el.textContent.includes("Bracelet length") && !document.querySelector(".bracelet_length_var")) {
      el.closest(".variant-wrapper--dropdown").classList.add("bracelet_length_var");
      // document.querySelector(".size_guide").after(el.closest(".variant-wrapper--dropdown.ring_size_var"));
    }
    if (el.textContent.includes("Necklace Length") && !document.querySelector(".necklace_length_var")) {
      el.closest(".variant-wrapper--dropdown").classList.add("necklace_length_var");
      // document.querySelector(".size_guide").after(el.closest(".variant-wrapper--dropdown.ring_size_var"));
    }
  });
}
