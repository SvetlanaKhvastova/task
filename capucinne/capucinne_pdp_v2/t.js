let startFunkFastNav = setInterval(() => {
  if (!document) return false;

  clearInterval(startFunkFastNav);

  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };

    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
  }

  // script tooltip
  let scriptPopper = document.createElement("script");
  scriptPopper.src = "https://unpkg.com/popper.js@1";
  scriptPopper.async = false;
  document.body.appendChild(scriptPopper);

  let scriptTippy = document.createElement("script");
  scriptTippy.src = "https://unpkg.com/tippy.js@5";
  scriptTippy.async = false;
  document.body.appendChild(scriptTippy);

  let newStyle = /*html */ `
    <style>
      #shopify-section-template--20985669976405__faster_available {
        display: block !important;
      }
      #shopify-section-template--20985669615957__collection-header .collection-single__description.rte p:nth-child(1){
        margin: 0;
      }
      #shopify-section-template--20985669615957__collection-header .collection-single__description.rte p:nth-child(2){
      margin-top: 0 !important;
      }
      /*discoverFasterAvailablejewelry */
      #discoverFasterAvailablejewelry svg[data-tooltip] {
        position: absolute;
        right: -18px;
      }
      #discoverFasterAvailablejewelry .tippy-tooltip {
        border-radius: 1px;
        border: 1px solid #e8e8e1;
        background: #fff;
        color: #000;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-transform: initial;
        box-shadow: 0px 2px 64px 0px rgba(0, 0, 0, 0.15);
      }
      #discoverFasterAvailablejewelry .tippy-popper {
        max-width: 135px !important;
        left: 10px !important;
      }
      #discoverFasterAvailablejewelry .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
        border-bottom-color: #fff;
      }
      #discoverFasterAvailablejewelry .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
        border-top-color: #fff;
      }
      #discoverFasterAvailablejewelry .tippy-content {
        padding: 4px 7px;
      }
      /*faster_availability link */
      .faster_availability.active_link {
        font-weight: 600;
      }
      #shopify-section-template--21231437381973__collection-header .section-header__title {
        margin-bottom: 20px;
        padding: 0;
      }
      /*fasterAvailabilitySwitchBlock */
      #fasterAvailabilitySwitchBlock {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .switch_title {
        margin: 0;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
      .switch_btn_label {
        background-color: var(--color-grey);
        width: 3rem;
        height: 1.5rem;
        border-radius: 3rem;
        display: block;
        position: relative;
        transition: 0.3s;
        margin: 0;
      }
      .switch_btn_label::before {
        transition: 0.35s;
        display: block;
        position: absolute;
        left: 0.3rem;
        top: 50%;
        margin-top: -0.54rem;
        width: 1.1rem;
        height: 1.05rem;
        background-color: var(--color-button);
        content: "";
        border-radius: 50%;
      }
      .switch_btn input {
        display: none !important;
      }
      .switch_btn input:checked + .switch_btn_label {
        background-color: #d4a298;
      }
      .switch_btn input:checked + .switch_btn_label::before {
        transform: translateX(1.33rem);
      }

      @media (max-width: 768px) {
        #discoverFasterAvailablejewelry {
          padding: 0 0 0 16px;
          margin-bottom: 48px;
        }
        .discover_faster_title_wrapp {
          margin-right: 16px;
          margin-bottom: 24px;
        }
        #discoverFasterAvailablejewelry h2 {
          max-width: 205px;
          width: 100%;
        }
        #discoverFasterAvailablejewelry svg[data-tooltip] {
          right: 10px;
          top: 5px;
        }
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", newStyle);

  renderNewElem();

  function renderNewElem() {
    if (window.innerWidth <= 768) {
      if (document.querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]') && document.querySelector('.mobile-nav__item [href="https://capucinne.com/collections/fast-production"]')) {
        if (document.querySelector('.mobile-nav__item [href="https://capucinne.com/collections/fast-production"]').closest("li").classList.contains("appear-delay-9") && !document.querySelector('.mobile-nav__item [href="https://capucinne.com/collections/fast-production"]').closest("li").classList.contains("appear-delay-6")) {
          document.querySelector('.mobile-nav__item [href="https://capucinne.com/collections/fast-production"]').closest("li").classList.remove("appear-delay-9");
          document.querySelector('.mobile-nav__item [href="https://capucinne.com/collections/fast-production"]').closest("li").classList.add("appear-delay-6");
        }
        document.querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]').closest("li").after(document.querySelector('.mobile-nav__item [href="https://capucinne.com/collections/fast-production"]').closest("li"));
      }
    }
  }
}, 100);
