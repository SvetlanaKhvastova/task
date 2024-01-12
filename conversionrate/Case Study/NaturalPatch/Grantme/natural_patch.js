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
