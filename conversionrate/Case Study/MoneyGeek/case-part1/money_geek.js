document.querySelectorAll(".schedule-btn").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".btn.header__input-btn.get_free_cro_front").click();
  });
});
const isGrantMe = setInterval(function () {
  $(".unordered-list.clr-bullets a") &&
    (clearInterval(isGrantMe),
    $(".unordered-list.clr-bullets a").click(function (e) {
      e.preventDefault();
      let t = e.currentTarget.getAttribute("href"),
        r = $(window).width() > 991 ? 75 : 66;
      $("html, body").animate({ scrollTop: $(t).offset().top - r }, 500);
    }));
}, 100);
document.querySelectorAll(".view-more-btn")?.forEach((e) => {
  e.addEventListener("click", (t) => {
    if (!t.target.getAttribute("data-test")) {
      if ((t.preventDefault(), e.closest(".view-more-btn-wrapp").previousElementSibling.classList.toggle("is_closed"), e.closest(".view-more-btn-wrapp").previousElementSibling.classList.contains("is_closed"))) {
        e.querySelector("span").textContent = "View more";
        let r = 70,
          l = e.closest(".view-more-btn-wrapp").previousElementSibling.getBoundingClientRect().top,
          o = l + window.pageYOffset - r;
        window.scrollTo({ top: o, behavior: "smooth" });
      } else e.querySelector("span").textContent = "View less";
    }
    t.target.setAttribute("data-test", "1"),
      setTimeout(() => {
        t.target.getAttribute("data-test") && t.target.removeAttribute("data-test");
      }, 1e3);
  });
}),
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
