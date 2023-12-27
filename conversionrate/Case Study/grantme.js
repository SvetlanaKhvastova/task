document.querySelectorAll(".schedule-btn").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".btn.header__input-btn.get_free_cro_front").click();
  });
}),
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      let t = this.getAttribute("href").substring(1),
        r = t ? document.getElementById(t) : document.body,
        o = screen.width > 991 ? 70 : 26;
      if (r) {
        let l = r === document.body ? 0 : r.offsetTop + o;
        window.scrollTo({ top: l, behavior: "smooth" });
      }
    });
  });
document.querySelectorAll(".view-more-btn")?.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (!e.target.getAttribute("data-test")) {
      e.preventDefault();
      el.closest(".view-more-btn-wrapp").previousElementSibling.classList.toggle("is_closed");
      if (el.closest(".view-more-btn-wrapp").previousElementSibling.classList.contains("is_closed")) {
        el.querySelector("span").textContent = "View more";
        let headerOffset = 70;
        const elementPosition = el.closest(".view-more-btn-wrapp").previousElementSibling.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        el.querySelector("span").textContent = "View less";
      }
    }
    e.target.setAttribute("data-test", "1");
    setTimeout(() => {
      if (e.target.getAttribute("data-test")) {
        e.target.removeAttribute("data-test");
      }
    }, 1000);
  });
});
