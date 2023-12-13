let startFunkFastNav = setInterval(() => {
  if (!document) return false;

  clearInterval(startFunkFastNav);

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
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", newStyle);

  renderNewElem();

  function renderNewElem() {
    if (window.innerWidth > 768) {
      if (document.querySelector('.site-nav__link[href="https://capucinne.com/pages/about-capucinne"]') && !document.querySelector(".faster_availability")) {
        document
          .querySelector('.site-nav__link[href="https://capucinne.com/pages/about-capucinne"]')
          .closest("li")
          .insertAdjacentHTML(
            "afterend",
            `
              <li class="site-nav__item site-nav__expanded-item faster_availability">
                <a href="https://capucinne.com/collections/fast-production" class="site-nav__link site-nav__link--underline">
                  Faster Availability
                </a>
              </li
            `
          );
      }
    } else {
      if (document.querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]') && !document.querySelector(".faster_availability")) {
        document
          .querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]')
          .closest("li")
          .insertAdjacentHTML(
            "afterend",
            `<li class="mobile-nav__item appear-animation appear-delay-6 faster_availability">
                      <a href="https://capucinne.com/collections/fast-production" class="mobile-nav__link mobile-nav__link--top-level">
                          Faster Availability
                      </a>
                  </li>`
          );
      }
    }

    if (document.querySelector(".faster_availability") && window.location.pathname === "/collections/fast-production") {
      document.querySelector(".faster_availability").classList.add("active_link");
    }

    let lookForListSlider = setInterval(() => {
      if (document.querySelector("#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list")) {
        clearInterval(lookForListSlider);
        if (!document.querySelector("#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list").classList.contains("open_var")) {
          document.querySelector("#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list").classList.add("open_var");
        }
      }
    }, 100);

    let lookForLinkActive = setInterval(() => {
      if (document.querySelector("#shopify-section-template--20985669615957__collection-header .section-header__title") && window.location.pathname === "/collections/fast-production") {
        clearInterval(lookForLinkActive);
        if (document.querySelector("#shopify-section-template--20985669615957__collection-header .section-header__title").textContent.trim() !== "FASTER AVAILABILITY COLLECTION") {
          document.querySelector("#shopify-section-template--20985669615957__collection-header .section-header__title").textContent = "FASTER AVAILABILITY COLLECTION";
        }
      }
    }, 100);

    if (window.innerWidth <= 768) {
      let lookForDescr = setInterval(() => {
        if (document.querySelector("#first_collection_description")) {
          console.log(`object`);
          clearInterval(lookForDescr);
          if (!document.querySelector("#first_collection_description br")) {
            document.querySelector("#first_collection_description").innerHTML = "At Capucinne, we understand the value of time without compromising on artistry.<br/>Faster Availability Collection - a curated selection of rings ready for a faster journey from our hands to yours. Crafted with unwavering precision, these pieces let you celebrate special moments sooner. Explore exquisite designs, expedited exclusively at Capucinne.";
          }
        }
      }, 100);
    }

    // fasterAvailabilityBlock switch-label
    if (document.querySelector(".collection-filter__item.collection-filter__item--sort") && !document.querySelector("#fasterAvailabilitySwitchBlock")) {
      // let fasterAvailabilityBlock = /*html */ `
      //   <div id="fasterAvailabilitySwitchBlock">
      //     <div class="switch_btn">
      //       <input type="checkbox" name="properties[fasterAvailability]" value="" id="switchLabel" class="switch_btn_checkbox" />
      //       <label for="switchLabel" class="switch_btn_label"></label>
      //     </div>
      //     <p class="switch_title">
      //       Faster Availability
      //       <svg class="tooltip_toggle" data-tooltip data-title="Express crafting serviceavailable" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      //         <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      //         <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
      //       </svg>
      //     </p>
      //   </div>
      // `;
      // document.querySelector(".collection-filter__item.collection-filter__item--sort").insertAdjacentHTML("afterbegin", fasterAvailabilityBlock);
    }
  }
}, 100);

function onRenameRealReviewsTitle() {
  let realReviews = setInterval(() => {
    if (document.querySelector("#stamped-reviews-widget") && !document.querySelector(".new_real_reviews_title")) {
      clearInterval(realReviews);
      document.querySelector("#stamped-reviews-widget[data-widget-type=carousel] .stamped-carousel-title").insertAdjacentHTML("beforebegin", `<h3 class="new_real_reviews_title">Real Reviews from Real <b>Customers</b></h3>`);
    }
  }, 100);
}
