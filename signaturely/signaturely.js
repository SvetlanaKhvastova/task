let checked = setInterval(() => {
  if (!document.querySelector(".uael-rbs-switch-label .uael-rbs-switch:checked")) {
    clearInterval(checked)
    document.querySelector(".elementor-83 .elementor-element.elementor-element-c7ccc5e .uael-rbs-slider").click()
  }
}, 50)

window.dataLayer = window.dataLayer || []
dataLayer.push({
  event: "event-to-ga",
  eventCategory: "Exp - Signaturely toggle switch",
  eventAction: "loaded",
})
;(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2372209, hjsv: 6 }
  a = o.getElementsByTagName("head")[0]
  r = o.createElement("script")
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
window.hj =
  window.hj ||
  function () {
    ;(hj.q = hj.q || []).push(arguments)
  }
hj("event", "signaturely_toggle_switch")
