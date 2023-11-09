let startFunkFastNav = setInterval(() => {
  if (document) {
    clearInterval(startFunkFastNav);

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + ' / ' + event_desc + ' / ' + event_type + ' / ' + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: 'event-to-ga4',
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    // cdn slider
    let scriptCustomSlider = document.createElement('script');
    scriptCustomSlider.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js';
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);

    let scriptCustomSliderStyle = document.createElement('link');
    scriptCustomSliderStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
    scriptCustomSliderStyle.rel = 'stylesheet';
    document.head.appendChild(scriptCustomSliderStyle);
    // script tooltip
    let scriptPopper = document.createElement('script');
    scriptPopper.src = 'https://unpkg.com/popper.js@1';
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement('script');
    scriptTippy.src = 'https://unpkg.com/tippy.js@5';
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    let newStyle = /*html */ `
    <style>
        /*discoverFasterAvailablejewelry */
        #discoverFasterAvailablejewelry{
padding: 0 40px;
    margin-bottom: 80px;
        }
        .discover_faster_available_jewelry_container{

        }
        .discover_faster_title_wrapp{
            display: flex;
    justify-content: space-between;
    align-items: center;
            margin-bottom: 37px;
        }
        #discoverFasterAvailablejewelry h2{
            position: relative;
            color: #000;
font-size: 18px;
font-weight: 400;
line-height: 26px;
letter-spacing: 1px;
text-transform: uppercase;
margin: 0;
        }
         #discoverFasterAvailablejewelry h2 b{
            font-weight: 600;
         }
         .view_all_btn{
            border: 1px solid #E8E8E1;
background: #FFF;
color: #000;
font-size: 12px;
font-weight: 400;
line-height: 16px;
text-transform: uppercase;
padding: 10px 16px;
cursor: pointer;
         }
         #discoverFasterAvailablejewelry svg[data-tooltip ]{
            position: absolute;
    right: -18px;
         }
#discoverFasterAvailablejewelry .tippy-tooltip{
border-radius: 1px;
border: 1px solid #E8E8E1;
background: #FFF;
color: #000;
font-size: 13px;
font-weight: 400;
line-height: 20px;
text-transform: initial;
box-shadow: 0px 2px 64px 0px rgba(0, 0, 0, 0.15);
}
#discoverFasterAvailablejewelry .tippy-popper{
    max-width: 135px !important;
    left: 10px !important;
}
#discoverFasterAvailablejewelry .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
border-bottom-color: #FFF;
}
#discoverFasterAvailablejewelry .tippy-tooltip[data-placement^=top]>.tippy-arrow{
    border-top-color: #FFF;
}
#discoverFasterAvailablejewelry .tippy-content {
    padding: 4px 7px;
}
/* */
#discoverFasterAvailablejewelry .slick-arrow {
    position: absolute;
    top: -61px;
    right: 0;
    z-index: 10;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
#discoverFasterAvailablejewelry .prev_btn.slick-arrow {
    right: 60px;
}
#discoverFasterAvailablejewelry .slick-arrow svg {
    width: 100%;
    height: 100%;
}
#discoverFasterAvailablejewelry .slick-slide {
    margin: 0 4px;
}
#discoverFasterAvailablejewelry .product_content a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
#discoverFasterAvailablejewelry .product_image {
    width: 100%;
}
#discoverFasterAvailablejewelry .product_image img {
    object-fit: cover;
    height: auto;
    aspect-ratio: 1/1.5;
    max-height: 402px;
}
#discoverFasterAvailablejewelry .product_title {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.308px;
    margin: 0 auto 8px;
    max-width: 246px;
    text-transform: initial !important;
}
#discoverFasterAvailablejewelry .product_price {
    color: #1c1d1d;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin: 0;
}
/*fasterAvailabilitySwitchBlock */
#fasterAvailabilitySwitchBlock{
    display: flex;
    align-items: center;
    gap: 12px;
}
.switch_title{
    margin: 0;
    color: #000;
font-size: 14px;
font-weight: 500;
line-height: 20px;
}
.switch_btn_label{
    background-color: var(--color-grey);
    width: 3rem;
    height: 1.5rem;
    border-radius: 3rem;
    display: block;
    position: relative;
    transition: .3s;
    margin: 0;
}
.switch_btn_label::before{
    transition: .35s;
    display: block;
    position: absolute;
    left: 0.3rem;
    top: 50%;
    margin-top: -0.54rem;
    width: 1.1rem;
    height: 1.05rem;
    background-color: var(--color-button);
    content: '';
    border-radius: 50%;
}
.switch_btn input{
    display: none !important;
}
.switch_btn input:checked + .switch_btn_label{
    background-color: #d4a298;
}
.switch_btn input:checked + .switch_btn_label::before {
    transform: translateX(1.33rem);
}

@media (max-width: 768px){
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
#discoverFasterAvailablejewelry svg[data-tooltip ] {
    right: 10px;
    top: 5px;
}
}
    </style>
    `;

    let discoverFasterAvailablejewelryHtml = /*html */ `
<section id="discoverFasterAvailablejewelry">
  <div class="discover_faster_available_jewelry_container">
    <div class="discover_faster_title_wrapp">
      <h2>
        <b>Discover</b> Faster Available jewelry
        <svg data-tooltip data-title="Faster than standard production time" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" fill="white" stroke="#D4A298" />
          <path d="M7.00929 5.00784C6.84396 5.00784 6.70529 4.95184 6.59329 4.83984C6.48129 4.72784 6.42529 4.58918 6.42529 4.42384C6.42529 4.25851 6.48129 4.11984 6.59329 4.00784C6.70529 3.89584 6.84396 3.83984 7.00929 3.83984C7.16929 3.83984 7.30529 3.89584 7.41729 4.00784C7.52929 4.11984 7.58529 4.25851 7.58529 4.42384C7.58529 4.58918 7.52929 4.72784 7.41729 4.83984C7.30529 4.95184 7.16929 5.00784 7.00929 5.00784ZM7.45729 5.59184V9.99986H6.54529V5.59184H7.45729Z" fill="#D4A298" />
        </svg>
      </h2>
      <span class="view_all_btn">View all</span>
    </div>
    <div class="discover_faster_available_jewelry_list"></div>
  </div>
  <span class="visib_discover_faster_available_jewelry"></span>
</section>
    `;

    let fasterAvailabilityBlock = /*html */ `
<div id="fasterAvailabilitySwitchBlock">
  <div class="switch_btn">
    <input type="checkbox" name="properties[fasterAvailability]" value="" id="switchLabel" class="switch_btn_checkbox" />
    <label for="switchLabel" class="switch_btn_label"></label>
  </div>
  <p class="switch_title">
    Faster Availability
    <svg class="tooltip_toggle" data-tooltip data-title="Express crafting serviceavailable" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.87793" cy="7.70068" r="6.5" fill="white" stroke="#D4A298"></circle>
      <path d="M7.88724 5.70868C7.72191 5.70868 7.58324 5.65268 7.47124 5.54068C7.35924 5.42868 7.30324 5.29002 7.30324 5.12468C7.30324 4.95935 7.35924 4.82068 7.47124 4.70868C7.58324 4.59668 7.72191 4.54068 7.88724 4.54068C8.04724 4.54068 8.18324 4.59668 8.29524 4.70868C8.40724 4.82068 8.46324 4.95935 8.46324 5.12468C8.46324 5.29002 8.40724 5.42868 8.29524 5.54068C8.18324 5.65268 8.04724 5.70868 7.88724 5.70868ZM8.33524 6.29268V10.7007H7.42324V6.29268H8.33524Z" fill="#D4A298"></path>
    </svg>
  </p>
</div>
    `;

    document.head.insertAdjacentHTML('beforeend', newStyle);

    renderNewElem();
    renderDiscoverFasterAvailablejewelry();
    slickSliderInit();
    tooltipInit();

    function renderNewElem() {
      if (window.innerWidth > 768) {
        if (
          document.querySelector('.site-nav__link[href="https://capucinne.com/pages/about-capucinne"]') &&
          !document.querySelector('.faster_availability')
        ) {
          document
            .querySelector('.site-nav__link[href="https://capucinne.com/pages/about-capucinne"]')
            .closest('li')
            .insertAdjacentHTML(
              'afterend',
              `<li class="site-nav__item site-nav__expanded-item faster_availability">
                        <a href="https://capucinne.com/pages/faster-availability" class="site-nav__link site-nav__link--underline">
                            Faster Availability
                        </a>
                    </li>`,
            );
        }
      } else {
        if (
          document.querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]') &&
          !document.querySelector('.faster_availability')
        ) {
          document
            .querySelector('.mobile-nav__item [href="/collections/fine-jewelry-1"]')
            .closest('li')
            .insertAdjacentHTML(
              'afterend',
              `<li class="mobile-nav__item appear-animation appear-delay-6 faster_availability">
                        <a href="https://capucinne.com/pages/faster-availability" class="mobile-nav__link mobile-nav__link--top-level">
                            Faster Availability
                        </a>
                    </li>`,
            );
        }
      }

      // render discoverFasterAvailablejewelry
      if (document.querySelector('#Discover') && !document.querySelector('#discoverFasterAvailablejewelry')) {
        document
          .querySelector('#Discover')
          .closest('.shopify-section')
          .insertAdjacentHTML('afterend', discoverFasterAvailablejewelryHtml);
      }

      // fasterAvailabilityBlock switch-label
      if (
        document.querySelector('.collection-filter__item.collection-filter__item--sort') &&
        !document.querySelector('#fasterAvailabilitySwitchBlock')
      ) {
        document
          .querySelector('.collection-filter__item.collection-filter__item--sort')
          .insertAdjacentHTML('afterbegin', fasterAvailabilityBlock);
      }
    }

    function renderDiscoverFasterAvailablejewelry() {
      let findBlockDiscoverFasterAvailablejewelry = setInterval(() => {
        if (document.querySelector('#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list')) {
          clearInterval(findBlockDiscoverFasterAvailablejewelry);
          getPdpFasterAvailable();
        }
      }, 100);
    }

    async function getPdpFasterAvailable() {
      console.log(`object`);
      fetch(`/collections/841564295.js`, {
        method: 'GET',
      })
        .then(response => {
          return response.json();
        })
        .then(res => {
          console.log(res, `RES`);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      //   document
      //     .querySelector('#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list')
      //     ?.insertAdjacentHTML('beforeend', setProduct(el, el, el, el));

      function setProduct(title, link, price, img) {
        let productContent = `<div class="product_content">
                      <a href="${link}" class="product_link" target="_blank">
                        <div class="product_image">
                          <img class="lazyautosizes lazyloaded" data-widths="[720]" data-aspectratio="1.066" data-sizes="auto" alt="${title}" loading="lazy" width="284" height="425" data-srcset="${img}" sizes="291px" srcset="${img}" />
                        </div>
                        <div class="product_meta">
                          <h3 class="product_title">${title}</h3>
                          <p class="product_price">from <span class="money">${price}</span></p>
                        </div>
                      </a>
                  </div>`;
        return productContent;
      }
    }

    function slickSliderInit() {
      let slickReadyToShip = setInterval(() => {
        if (
          typeof jQuery('#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list').slick ===
            'function' &&
          document.querySelector('.discover_faster_available_jewelry_list')?.children.length >= 160
        ) {
          clearInterval(slickReadyToShip);

          //  slider
          let slider = jQuery('#discoverFasterAvailablejewelry .discover_faster_available_jewelry_list')
            .not('#discoverFasterAvailablejewelry .slick-initialized')
            .slick({
              slidesToShow: 5,
              slidesToScroll: 3,
              arrows: false,
              dots: false,
              infinite: true,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2.7,
                    infinite: false,
                    arrows: false,
                  },
                },
              ],
            });
          slider.on('init', function () {});
          slider.on('swipe', function () {
            pushDataLayer(['exp_barriers_s_rs_h', 'Horizontal', 'Scroll', 'Ready to ship']);
          });
        }
      }, 100);
    }

    function tooltipInit() {
      let tippyRunMain = setInterval(() => {
        if (typeof tippy === 'function' && document.querySelector('#discoverFasterAvailablejewelry [data-tooltip]')) {
          clearInterval(tippyRunMain);
          document.querySelectorAll('#discoverFasterAvailablejewelry [data-title]').forEach(el => {
            tippy(el, {
              content: el.getAttribute('data-title'),
              //   trigger: 'click',
              placement: 'bottom',
              appendTo: function () {
                return el.closest('.discover_faster_title_wrapp h2');
              },
              onTrigger(inst, e) {
                e.stopPropagation();
                e.preventDefault();
              },
              onShown(e) {},
            });
          });
        }
      }, 500);

      let tippyRunListing = setInterval(() => {
        if (typeof tippy === 'function' && document.querySelector('#fasterAvailabilitySwitchBlock [data-tooltip]')) {
          clearInterval(tippyRunListing);
          document.querySelectorAll('#fasterAvailabilitySwitchBlock [data-title]').forEach(el => {
            tippy(el, {
              content: el.getAttribute('data-title'),
              //   trigger: 'click',
              placement: 'bottom',
              appendTo: function () {
                return el.closest('.switch_title');
              },
              onTrigger(inst, e) {
                e.stopPropagation();
                e.preventDefault();
              },
              onShown(e) {},
            });
          });
        }
      }, 500);
    }
  }
}, 100);
