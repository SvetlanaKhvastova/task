document.querySelectorAll(".schedule-btn").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".btn.header__input-btn.get_free_cro_front").click();
  });
});
const isLink = setInterval(function () {
  $(".unordered-list.clr-bullets a") &&
    (clearInterval(isLink),
    $(".unordered-list.clr-bullets a").click(function (e) {
      e.preventDefault();
      let t = e.currentTarget.getAttribute("href"),
        r = $(window).width() > 991 ? 75 : 66;
      $("html, body").animate({ scrollTop: $(t).offset().top - r }, 500);
    }));
}, 100);
document.querySelectorAll(".up-btn").forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    let t = this.getAttribute("href").substring(1),
      r = t ? document.getElementById(t) : document.body,
      l = screen.width > 991 ? 70 : 26;
    if (r) {
      let o = r === document.body ? 0 : r.offsetTop + l;
      window.scrollTo({ top: o, behavior: "smooth" });
    }
  });
});
