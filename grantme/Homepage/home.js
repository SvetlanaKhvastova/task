let scriptCalendar = document.createElement("script");
scriptCalendar.src = "https://conversionratestore.github.io/projects/jquery.simple-calendar.js";
scriptCalendar.async = false;
document.head.appendChild(scriptCalendar);

let scriptCalendarStyle = document.createElement("link");
scriptCalendarStyle.href = "https://conversionratestore.github.io/projects/simple-calendar.scss";
scriptCalendarStyle.rel = "stylesheet";
document.head.appendChild(scriptCalendarStyle);

let scriptCustom = document.createElement("script");
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustomStyle = document.createElement("link");
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
scriptCustomStyle.rel = "stylesheet";
document.head.appendChild(scriptCustomStyle);

let scriptCustomMask = document.createElement("script");
scriptCustomMask.src = "https://cdnjs.cloudflare.com/ajax/libs/imask/6.6.0/imask.min.js";
scriptCustomMask.async = false;
document.head.appendChild(scriptCustomMask);

let slickInterval = setInterval(() => {
  if (typeof jQuery(".testimonials_slider").slick === "function") {
    clearInterval(slickInterval);
    //  slider
    let slider = jQuery(".testimonials_slider").slick({
      slidesToShow: 4.1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: ".testimonials_arrow_prev",
      nextArrow: ".testimonials_arrow_next",
      dots: false,
      infinite: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    slider.on("swipe", function () {});
  }
}, 100);

//   calendar
let calendar = setInterval(() => {
  if (typeof jQuery("#calendarContainer").simpleCalendar === "function") {
    clearInterval(calendar);
    document.querySelector("#calendarContainer .ajax-throbber.sk-circle").remove();
    setCalendar();
    setNewEvents();
  }
}, 600);

function setCalendar() {
  jQuery("#calendarContainer").simpleCalendar({
    months: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
    days: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
    displayYear: true,
    fixedStartDay: true,
    displayEvent: true,
    disableEventDetails: false,
    disableEmptyDetails: true,
    events: [],
    onInit: function (calendar) {},
    onDateSelect: function (date, events) {
      console.log(`events`, events);
      if (events.length > 0) {
        setTimeout(() => {
          setArrTimes();
        }, 200);
        document.querySelector(".chosen_select div.select_custom").textContent = "Select a time";
        document.querySelector(".chosen_select div.select_custom").removeAttribute("data-selected");
        document.querySelector(".chosen_select div.select_custom").classList?.remove("is_active");
        document.querySelector(".confirm_time_btn").disabled = true;

        document.querySelector("#booking_section").scrollIntoView({ block: "start", behavior: "smooth" });
        document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "2");
        if (document.querySelector(".nav_steps svg").classList.contains("svg_is_hidden")) {
          document.querySelector(".nav_steps svg").classList.remove("svg_is_hidden");
        }
        document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = "Select a Time (30 min)";
        document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "2";
        document.querySelector("#calendarContainer").classList.add("is_hidden");
        document.querySelector(".chosen_select").classList.remove("is_hidden");
        document.querySelector(".time_zone_wrapper").classList.add("is_hidden");
      }
    },
  });
}

function getTimeEvents() {
  let newEvent = {};
  let a = ["2023-05-05T01:45:00+0300", "2023-05-06T21:00:00.000Z", "2023-05-07T21:00:00.000Z"];
  a.forEach((date) => {
    const dateStr = date.substring(0, 10);
    const timeStr = date.substring(11, 19);
    if (!newEvent[dateStr]) {
      newEvent[dateStr] = [];
    }
    newEvent[dateStr].push(timeStr);
  });
  return newEvent;
}
function setNewEvents() {
  let newEvent = getTimeEvents();
  let dates;
  let finalEvents;
  dates = Object.keys(newEvent);
  finalEvents = dates.map((d) => {
    return { startDate: new Date(d).getTime(), endDate: new Date(d).getTime() + 2000, summary: d };
  });
  let container = jQuery("#calendarContainer").simpleCalendar();
  let jQuerycalendar = container.data("plugin_simpleCalendar");
  jQuerycalendar.setEvents(finalEvents);
}
// choose select
function setListTimes(title, val) {
  return `  <li data-time="${val}">${title}</li>`;
}

function setArrTimes(id) {
  let t = ["1:45 am", "11:30 pm"];
  document.querySelector(".chosen_select ul").innerHTML = "";
  let arrayTime = [];

  t.forEach((time) => {
    arrayTime.push({ t: time, val: time });
  });

  arrayTime.forEach((el) => {
    let time = el.t;
    let value = el.val;

    document.querySelector(".chosen_select ul").insertAdjacentHTML("beforeend", setListTimes(time, value));
  });
  document.querySelectorAll(".chosen_select ul li").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      jQuery(".chosen_select div.options_custom").toggleClass("active");
      if (jQuery(".chosen_select div.options_custom").hasClass("active")) {
        jQuery(".chosen_select div.options_custom").slideDown();
      } else {
        jQuery(".chosen_select div.options_custom").slideUp();
      }
      document.querySelector(".chosen_select div.select_custom").textContent = e.target.textContent;
      document.querySelector(".chosen_select div.select_custom").setAttribute("data-selected", e.target.getAttribute("data-time"));
      document.querySelector(".chosen_select div.select_custom").classList?.toggle("is_visit");
      document.querySelector(".chosen_select div.select_custom").classList?.add("is_active");
      document.querySelector(".calc_step_third > p .full_date_time").textContent = e.target.getAttribute("data-time");

      document.querySelectorAll(".chosen_select ul li").forEach((i) => {
        i.classList?.remove("is_active");
      });
      e.target.classList.add("is_active");

      if (document.querySelector(".chosen_select div.select_custom").getAttribute("data-selected") && document.querySelector(".confirm_time_btn:disabled")) {
        document.querySelector(".confirm_time_btn:disabled").disabled = false;
      }
    });
  });
}
let hamburger = jQuery(".chosen_select div.select_custom");
let menu = jQuery(".chosen_select div.options_custom");

jQuery(document).on("click", (e) => {
  let target = e.target;
  let its_menu = target == menu || menu.hasClass(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.hasClass("active");

  if (!its_menu && !its_hamburger && menu_is_active && menu.has(e.target).length === 0 && e.target.getAttribute("type") !== "checkbox" && !e.target.getAttribute("data-checkboxid")) {
    menu.toggleClass("active");
    if (jQuery(".chosen_select div.options_custom").hasClass("active")) {
      jQuery(".chosen_select div.options_custom").slideDown();
    } else {
      jQuery(".chosen_select div.options_custom").slideUp();
    }
    hamburger.toggleClass("is_visit");
  }
});

//   click on svg Back
if (document.querySelector(".new_schedule")) {
  document.querySelector(".new_schedule .nav_steps svg").addEventListener("click", (el) => {
    document.querySelector("#booking_section").scrollIntoView({ block: "start", behavior: "smooth" });
    if (el.currentTarget.getAttribute("data-navsteps") === "2") {
      document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "1");
      el.currentTarget.classList.add("svg_is_hidden");
      document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = "Select a Day";
      document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "1";
      if (document.querySelector("#calendarContainer").classList.contains("is_hidden")) {
        document.querySelector("#calendarContainer").classList.remove("is_hidden");
      }
      document.querySelector(".chosen_select").classList.add("is_hidden");
      document.querySelector(".time_zone_wrapper").classList.remove("is_hidden");
    }
    if (el.currentTarget.getAttribute("data-navsteps") === "3") {
      document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "2");
      document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = "Select a Time (30 min)";
      document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "2";
      document.querySelector(".chosen_select").classList.remove("is_hidden");
      document.querySelector(".calc_step_third").classList.add("is_hidden");
    }
  });
}
//Click on add_guests_btn
document.querySelector(".add_guests_btn").addEventListener("click", (e) => {
  e.target.classList.add("is_hidden");
  document.querySelector(".your_parent_information_wrapper").classList.remove("is_hidden");
});

if (document.querySelector(".options_custom")) {
  jQuery(".chosen_select div.select_custom").on("click", (e) => {
    e.stopPropagation();

    if (!hamburger.has(e.target).length === 0) return;
    if (hamburger.has(e.target).length === 0) {
      e.target.classList.toggle("is_visit");
      jQuery(".chosen_select div.options_custom").toggleClass("active");
      if (jQuery(".chosen_select div.options_custom").hasClass("active")) {
        jQuery(".chosen_select div.options_custom").slideDown();
      } else {
        jQuery(".chosen_select div.options_custom").slideUp();
      }
    }
  });

  // Click on confirm_time_btn
  document.querySelector(".confirm_time_btn").addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector("#booking_section").scrollIntoView({ block: "start", behavior: "smooth" });
    document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "3");
    if (document.querySelector("#selectDropdown").value === "") {
      document.querySelector(".calc_step_third > p > span:last-child").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } else {
      document.querySelector(".calc_step_third > p > span:last-child").textContent = document.querySelector("#selectDropdown").value;
    }
    document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = `Free Call with a Student  Success Specialist`;
    document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "3";
    document.querySelector(".chosen_select").classList.add("is_hidden");
    document.querySelector(".time_zone_wrapper").classList.add("is_hidden");
    document.querySelector(".calc_step_third").classList.remove("is_hidden");
  });
}

// accardionToggleFaqs
const accardionToggleFaqs = (slideMenu) => (e) => {
  slideMenu.forEach((link) => {
    e.preventDefault();
    const hidePanel = link.nextElementSibling;
    if (link === e.currentTarget) {
      e.currentTarget.classList.toggle("active");

      hidePanel.classList.toggle("active_block");
    } else {
      link.classList.remove("active");
      hidePanel.classList.remove("active_block");
    }
  });
};

const slideMenuFaqs = document.querySelectorAll(".accardion_link_faqs");

slideMenuFaqs.forEach((el) => {
  el.addEventListener("click", accardionToggleFaqs(slideMenuFaqs));
});
