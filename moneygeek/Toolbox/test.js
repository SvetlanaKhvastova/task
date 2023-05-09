const style = /* html */ `
    <style>
        html {
            overflow: unset !important;
        }
        body {
            overflow-x: unset !important;
        }

        header .chakra-popover__popper {
            transform: unset !important;
            inset: unset !important;
            top: 100% !important;
        }

        header .css-86e6ef .css-1ov3s65:first-child .chakra-popover__popper {
            right: -400px !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(2) .chakra-popover__popper {
            right: -200% !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(3) .chakra-popover__popper {
            right: -305px !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(4) .chakra-popover__popper {
            right: -50% !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(5) .chakra-popover__popper {
            right: -70px !important;
        }


        .vertical_nav_wrapper {
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.16);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
        }

        #LayoutSidebarContainer {
            display: flex;
            column-gap: 30px;
            align-items: stretch;
        }

        #menu-list {
            overflow: auto;
            max-height: 395px;
            position: relative;
        }

        #menu-list::-webkit-scrollbar {
            width: 3px;
        }

        #menu-list::-webkit-scrollbar-track {
            background-color: #EFEFF1;
        }
        
        #menu-list::-webkit-scrollbar-thumb {
            background-color: #5474F6;
        }

        #menu-list a {
            color: #888888;
            line-height: 26px;
            padding: 6px 16px;
        }

        .vertical_nav_wrapper.top-g::before {
            content: '';
            display: block;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            z-index: 1;
        }

        .vertical_nav_wrapper.bottom-g::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
        }

        #menu-list a.is-active {
            color: #5474F6;
            background: linear-gradient(90deg, #E4E8FB 0%, #FFFFFF 100%);
        }

        #LayoutSidebarContainer .site-navigation {
            flex-shrink: 0;
        }

        #LayoutSidebarContainer .site-navigation .spacing {
            height: 100%;
            padding-bottom: 20px;
        }

        #sub-navigation {
            position: sticky !important;
            top: 1%;
            height: auto;
        }

    </style>
`;

start();
function start() {
  setTimeout(function () {
    console.log(">>> settimeout");
    try {
      document.body.insertAdjacentHTML("afterbegin", style);
      experiment();
      go_scroll();
      v1.observe(document.querySelector("#menu-list"));
      document.querySelector(".cro-fix").remove();
      document.body.setAttribute("style", "overflow-x: unset !important");
    } catch (err) {
      console.log(err);
    }
  }, 2000);
}

const mut = new MutationObserver((muts) => {
  go_scroll();
});

function experiment() {
  document.querySelector("#sub-navigation").insertAdjacentHTML("afterbegin", `<div class='vertical_nav_wrapper bottom-g'></div>`);
  document.querySelector(".vertical_nav_wrapper").append(document.querySelector("#sub-navigation h6"));
  document.querySelector(".vertical_nav_wrapper").append(document.querySelector("#menu-list"));

  document.querySelector("#sub-navigation").classList.add("is-sticky");

  mut.observe(document.querySelector("#menu-list"), {
    subtree: true,
    childList: true,
    attributes: true,
  });
  let scrollStart = 5;
  document.querySelector(".vertical_nav_wrapper #menu-list").addEventListener("scroll", function (e) {
    const view = e.target.clientHeight;
    const scroll = e.target.scrollHeight;
    const dif = scroll - view;
    const percent = Math.floor((e.target.scrollTop / dif) * 100);
    if (percent >= scrollStart) {
      scrollStart += Math.ceil(percent / 5) * 5;
    }
  });

  let check = new MutationObserver((muts) => {
    console.log(muts);
    check.disconnect();
    if (!document.querySelector(".vertical_nav_wrapper #menu-list")) {
      if (document.querySelector("#stickywidgetdiv")) {
        document.querySelector("#menu-list").after(document.querySelector("#stickywidgetdiv"));
      }
      document.querySelector(".vertical_nav_wrapper").append(document.querySelector("#sub-navigation h6"));
      document.querySelector(".vertical_nav_wrapper").append(document.querySelector("#menu-list"));

      go_scroll();
      mut.observe(document.querySelector("#menu-list"), {
        subtree: true,
        childList: true,
        attributes: true,
      });
      let scrollStart = 5;
      document.querySelector(".vertical_nav_wrapper #menu-list").addEventListener("scroll", function (e) {
        const view = e.target.clientHeight;
        const scroll = e.target.scrollHeight;
        const dif = scroll - view;
        const percent = Math.floor((e.target.scrollTop / dif) * 100);
        if (percent >= scrollStart) {
          scrollStart += Math.ceil(percent / 5) * 5;
        }
      });
    }

    if (document.querySelector(".vertical_nav_wrapper #social-section")) {
      document.querySelector(".vertical_nav_wrapper #social-section").remove();
    }
    check.observe(document.querySelector(".vertical_nav_wrapper"), {
      childList: true,
      subtree: true,
    });
  });

  check.observe(document.querySelector(".vertical_nav_wrapper"), {
    childList: true,
    subtree: true,
  });

  if (document.querySelector("#stickywidgetdiv")) {
    document.querySelector("#stickywidgetdiv").style.top = +document.querySelector(".vertical_nav_wrapper").getBoundingClientRect().height + 40 + "px";
    document.querySelector("#stickywidgetdiv").style.left = document.querySelector(".vertical_nav_wrapper").getBoundingClientRect().left + "px";
  }
}

function go_scroll() {
  const wrapper = document.querySelector(".vertical_nav_wrapper");
  const list = document.querySelector("#menu-list");
  const item = document.querySelector("#menu-list .is-active");
  const step = +document.querySelector("#menu-list li").clientHeight;
  if (item) {
    list.scrollTo(0, item.offsetTop + step / 2 - list.clientHeight / 2);
  }
  const dif = list.scrollHeight - list.clientHeight;
  if (list.scrollTop > 0) {
    wrapper.classList.add("top-g");
  } else {
    wrapper.classList.remove("top-g");
  }

  if (list.scrollTop < dif) {
    wrapper.classList.add("bottom-g");
  } else {
    wrapper.classList.remove("bottom-g");
  }
}
