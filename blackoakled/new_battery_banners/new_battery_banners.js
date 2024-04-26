let s = setInterval(() => {
  if (typeof jQuery(".new_banners_list").slick === "function" && document.querySelector(".new_banners_list")) {
    clearInterval(s);
    setTimeout(() => {
      let slider = jQuery(".new_banners_list")
        .on("init", function () {
          jQuery(this).css("visibility", "visible");
        })
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 5000,
          adaptiveHeight: true,
          arrows: false,
          dots: true,
        });
    }, 200);
  }
}, 100);

//
const topListings = ["/collections/marine-led-light-bars", "/collections/led-light-pods", "/collections/led-light-bars", "/collections/marine-flood-and-spreader-light", "/collections/double-row-led", "/collections/fishing-led-light-bars", "	/collections/marine-light-bars", "	/collections/marine-lithium", "/collections/single-row-led-light-bars", "/collections/hunting-led-light-bars", "/collections/underwater-led-lights", "	/collections/led-light-bar-mounts-2", "/collections/f250", "/collections/curved-led-light-bars", "/collections/f150", "/collections/infrared-light-bars", "/collections/led-light-pods/products/flood-turret-light-2-20-watts", "/collections/led-light-accessories", "/collections/marine-led-light-bars/products/new-marine-accent-light", "/collections/emergency-response-vehicles"];
