let startPdp = setInterval(() => {
  if (document.querySelector("#add-cart-button-fixed")) {
    clearInterval(startPdp);

    /********* Settings **********/
    const settings = {
      observe: false,
    };

    let script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    script.async = false;
    document.head.appendChild(script);

    let stylePdp = /*html */ `
    <style>
        #LP-Transparent-text-column-section,
        #LP-General-testimonial-grid,
        #LP-General_logo_section,
        .grid.grid-cols-12.gap-x-2[data-testid],
        #LP-Transparent_product_comparison_table,
        #LP-General-General_Cta_Section,
        #LP-General-white-newsletter-sectoin,
        .layout-container.p-none.py-10{
            display: none;
        }
        .mx-auto.max-w-screen-xl,
        .mx-auto.max-w-screen-xl > dl{
            background: #F4F4F5;
        }

    </style>
    `;

    document.head.insertAdjacentHTML("beforeend", stylePdp);

    if (document.querySelector(".mx-auto.max-w-screen-xl dd[data-headlessui-state]").childNodes.length > 0) {
      document.querySelector(".mx-auto.max-w-screen-xl dd[data-headlessui-state]").innerHTML = "";
    }

    renderHtml();
    changePlaceExcellent();

    function changePlaceExcellent() {
      let t = setInterval(() => {
        if (document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4")) {
          clearInterval(t);
          document.querySelector(".layout-container.bg-platinum-1 .col-span-full:nth-child(2) h1")?.before(document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4"));
        }
      }, 10);
    }

    function renderHtml() {}

    // Observe
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect();
        console.log(`observer`);

        renderHtml();

        if (!document.querySelector(".layout-container.bg-platinum-1 .mt-2.mb-4.flex.items-end.justify-between.gap-4 + h1")) {
          changePlaceExcellent();
        }
        observer.observe(document, {
          childList: true,
          subtree: true,
        });
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
}, 700);
