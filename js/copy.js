$(function () {
  //   if (window.innerWidth <= 768) {
  let slickInterval = setInterval(() => {
    if (typeof jQuery(".trending-homepage-section .carousel-wrapper").slick === "function") {
      clearInterval(slickInterval)
      console.log(`.carousel-wrapper`)

      setTimeout(() => {
        let slider = $(".trending-homepage-section .carousel-wrapper").slick({
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          infinite: false,
          centerMode: true,
          //                     variableWidth: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode: true,
                adaptiveHeight: true,
                slidesToScroll: 1,
              },
            },
          ],
        })
      }, 20)
    }
  }, 10)
  //   }
})
