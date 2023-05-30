let scriptCustom = document.createElement("script");
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

let scriptCustomStyle = document.createElement("link");
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
scriptCustomStyle.rel = "stylesheet";
document.head.appendChild(scriptCustomStyle);

//
let arrInfo = [];
const monthsObj = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
const daysObj = {
  01: "st",
  02: "nd",
  03: "rd",
  04: "th",
  05: "th",
  06: "th",
  07: "th",
  08: "th",
  09: "th",
  10: "th",
  11: "th",
  12: "th",
  13: "th",
  14: "th",
  15: "th",
  16: "th",
  17: "th",
  18: "th",
  19: "th",
  20: "th",
  21: "st",
  22: "nd",
  23: "rd",
  24: "th",
  25: "th",
  26: "th",
  27: "th",
  28: "th",
  29: "th",
  30: "th",
  31: "st",
};
const zeroLength = 2;
let yourMonth, yourDate, yourYear, theirMonth, theirDate, theirYear, yourPlaceOfBirth, theyPlaceOfBirth, yourTimeHBorn, yourTimeMBorn, theyTimeHBorn, theyTimeMBorn, yourTBirth, theyTBirth;

document.querySelectorAll("[name='date-of-birth'] select").forEach((el) => {
  el.addEventListener("change", () => {
    if (el.previousElementSibling.textContent === "Month") {
      yourMonth = monthsObj[+el.value];
      if (el.value !== "") {
        sessionStorage.setItem("yourMonth", yourMonth);
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }
    if (el.previousElementSibling.textContent === "Day") {
      yourDate = `${el.value}${daysObj[+el.value.padStart(zeroLength, "0")]}`;
      if (el.value !== "") {
        sessionStorage.setItem("yourDate", yourDate);
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }
    if (el.previousElementSibling.textContent === "Year") {
      yourYear = el.value;
      if (el.value !== "") {
        sessionStorage.setItem("yourYear", yourYear);
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }
    console.log(el.value, `change your`);
  });
});
document.querySelectorAll("[name='partner-date-of-birth'] select").forEach((el) => {
  el.addEventListener("change", () => {
    if (el.previousElementSibling.textContent === "Month") {
      theirMonth = monthsObj[+el.value];
      if (el.value !== "") {
        sessionStorage.setItem("theirMonth", theirMonth);
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }
    if (el.previousElementSibling.textContent === "Day") {
      theirDate = `${el.value}${daysObj[+el.value.padStart(zeroLength, "0")]}`;

      if (el.value !== "") {
        sessionStorage.setItem("theirDate", theirDate);
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }
    if (el.previousElementSibling.textContent === "Year") {
      theirYear = el.value;
      if (el.value !== "") {
        sessionStorage.setItem("theirYear", theirYear);
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }
    console.log(el.value, `change their`);
  });
});
document.querySelectorAll('[name="city-of-birth"] input').forEach((el) => {
  el.addEventListener("blur", () => {
    setTimeout(() => {
      console.log(el.value, `blur your`);
      yourPlaceOfBirth = el.value.split(",");
      if (el.value !== "") {
        if (yourPlaceOfBirth.length > 1) {
          sessionStorage.setItem("yourPlaceOfBirth", `${yourPlaceOfBirth[0]},${yourPlaceOfBirth[1]}`);
        } else {
          sessionStorage.setItem("yourPlaceOfBirth", `${yourPlaceOfBirth[0]}`);
        }
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }, 400);
  });
});
document.querySelectorAll('[name="partner-place-of-birth"] input').forEach((el) => {
  el.addEventListener("blur", () => {
    setTimeout(() => {
      theyPlaceOfBirth = el.value.split(",");
      if (el.value !== "") {
        if (theyPlaceOfBirth.length > 1) {
          sessionStorage.setItem("theyPlaceOfBirth", `${theyPlaceOfBirth[0]},${theyPlaceOfBirth[1]}`);
        } else {
          sessionStorage.setItem("theyPlaceOfBirth", `${theyPlaceOfBirth[0]}`);
        }
        if (sessionStorage.getItem("isCircle")) {
          sessionStorage.removeItem("isCircle");
        }
      }
    }, 400);
  });
});
document.querySelectorAll('[name="set-your-time-of-birth"] input').forEach((el) => {
  el.addEventListener("blur", (i) => {
    if (el.getAttribute("data-test-id") === "tbirth-hours-ipt") {
      setTimeout(() => {
        yourTimeHBorn = el.value.padStart(zeroLength, "0");
        if (el.value !== "") {
          sessionStorage.setItem("yourTimeHBorn", yourTimeHBorn);
          if (sessionStorage.getItem("isCircle")) {
            sessionStorage.removeItem("isCircle");
          }
        }
      }, 400);
    }
    if (el.getAttribute("data-test-id") === "tbirth-minutes-ipt") {
      setTimeout(() => {
        yourTimeMBorn = el.value.padStart(zeroLength, "0");
        if (el.value !== "") {
          sessionStorage.setItem("yourTimeMBorn", yourTimeMBorn);
          if (sessionStorage.getItem("isCircle")) {
            sessionStorage.removeItem("isCircle");
          }
        }
      }, 400);
    }
  });
});
document.querySelectorAll('[name="partner-time-of-birth"] input').forEach((el) => {
  el.addEventListener("blur", (i) => {
    if (el.getAttribute("data-test-id") === "tbirth-hours-ipt") {
      setTimeout(() => {
        theyTimeHBorn = el.value.padStart(zeroLength, "0");
        if (el.value !== "") {
          sessionStorage.setItem("theyTimeHBorn", theyTimeHBorn);
          if (sessionStorage.getItem("isCircle")) {
            sessionStorage.removeItem("isCircle");
          }
        }
      }, 400);
    }
    if (el.getAttribute("data-test-id") === "tbirth-minutes-ipt") {
      setTimeout(() => {
        theyTimeMBorn = el.value.padStart(zeroLength, "0");
        if (el.value !== "") {
          sessionStorage.setItem("theyTimeMBorn", theyTimeMBorn);
          if (sessionStorage.getItem("isCircle")) {
            sessionStorage.removeItem("isCircle");
          }
        }
      }, 400);
    }
  });
});
document.querySelectorAll("[name='set-your-time-of-birth'] .rootSimpleButton button").forEach((el) => {
  el.addEventListener("click", (i) => {
    yourTBirth = i.target.textContent.toLowerCase();
    console.log(theyTBirth, `click`);
    if (i.target.textContent.toLowerCase() !== "") {
      sessionStorage.setItem("yourTBirth", yourTBirth);
      if (sessionStorage.getItem("isCircle")) {
        sessionStorage.removeItem("isCircle");
      }
    }
  });
});
document.querySelectorAll("[name='partner-time-of-birth'] .rootSimpleButton button").forEach((el) => {
  el.addEventListener("click", (i) => {
    theyTBirth = i.target.textContent.toLowerCase();
    console.log(theyTBirth, `click`);
    if (i.target.textContent.toLowerCase() !== "") {
      sessionStorage.setItem("theyTBirth", theyTBirth);
      if (sessionStorage.getItem("isCircle")) {
        sessionStorage.removeItem("isCircle");
      }
    }
  });
});

document.querySelector(".continue.generic-button#button-28497955")?.addEventListener("click", (e) => {
  if (sessionStorage.getItem("isUnload")) {
    console.log(`isUnload`);

    document.head.insertAdjacentHTML("beforeend", `<style class="exp">body {opacity: 0 !important;}</style>`);
    window.location.reload();
    setTimeout(function () {
      if (document.querySelector(".exp")) {
        document.querySelector(".exp").remove();
      }
    }, 1000);
  }

  sessionStorage.setItem("isInfo", "true");
  setTimeout(() => {
    sessionStorage.setItem("isUnload", "true");
  }, 300);
  if (localStorage.getItem("zodiac")) {
    document.querySelectorAll(".your_name_var.name_var").forEach((el) => {
      if (el.textContent !== localStorage.getItem("zodiac")) {
        el.textContent = localStorage.getItem("zodiac");
      }
    });
  }
  if (localStorage.getItem("their_zodiac")) {
    document.querySelectorAll(".their_name_var.name_var").forEach((el) => {
      if (el.textContent !== localStorage.getItem("their_zodiac")) {
        el.textContent = localStorage.getItem("their_zodiac");
      }
    });
  }
});

//
if (sessionStorage.getItem("isInfo")) {
  document.querySelectorAll(".your_month_birth").forEach((month) => {
    month.textContent = sessionStorage.getItem("yourMonth");
  });
  document.querySelectorAll(".your_date_birth").forEach((date) => {
    date.textContent = sessionStorage.getItem("yourDate");
  });
  document.querySelectorAll(".their_month_birth").forEach((month) => {
    month.textContent = sessionStorage.getItem("theirMonth");
  });
  document.querySelectorAll(".their_date_birth").forEach((date) => {
    date.textContent = sessionStorage.getItem("theirDate");
  });
  document.querySelectorAll(".your_place_birth").forEach((place) => {
    place.textContent = sessionStorage.getItem("yourPlaceOfBirth");
  });
  document.querySelectorAll(".their_place_birth").forEach((place) => {
    place.textContent = sessionStorage.getItem("theyPlaceOfBirth");
  });
  document.querySelectorAll(".your_time_birth").forEach((time) => {
    if (sessionStorage.getItem("yourTimeHBorn") && sessionStorage.getItem("yourTimeMBorn")) {
      time.textContent = `${sessionStorage.getItem("yourTimeHBorn")}:${sessionStorage.getItem("yourTimeMBorn")} ${sessionStorage.getItem("yourTBirth")},`;
    } else {
      time.textContent = ``;
    }
  });
  document.querySelectorAll(".their_time_birth").forEach((time) => {
    if (sessionStorage.getItem("theyTimeHBorn") && sessionStorage.getItem("theyTimeMBorn")) {
      time.textContent = `${sessionStorage.getItem("theyTimeHBorn")}:${sessionStorage.getItem("theyTimeMBorn")} ${sessionStorage.getItem("theyTBirth")},`;
    } else {
      time.textContent = ``;
    }
  });
}
if (localStorage.getItem("zodiac")) {
  document.querySelectorAll(".your_name_var.name_var").forEach((el) => {
    if (el.textContent !== localStorage.getItem("zodiac")) {
      el.textContent = localStorage.getItem("zodiac");
    }
  });
}
if (localStorage.getItem("their_zodiac")) {
  if (document.querySelector(".rich-text span.variable-replace").textContent !== localStorage.getItem("their_zodiac")) {
    document.querySelector(".rich-text span.variable-replace").textContent = localStorage.getItem("their_zodiac");
  }
  document.querySelectorAll(".their_name_var.name_var").forEach((el) => {
    if (el.textContent !== localStorage.getItem("their_zodiac")) {
      el.textContent = localStorage.getItem("their_zodiac");
    }
  });
}

// progress
if (document.querySelectorAll(".circle-progress") && !sessionStorage.getItem("isCircle")) {
  const circle = document.querySelectorAll(".circle-progress");
  circle.forEach((el) => {
    el.style.strokeDasharray = `0 0`;
    el.style.strokeDashoffset = "0";
    const circleRadius = el.r.baseVal.value;
    const circumference = 2 * Math.PI * circleRadius;
    const circlePercent = document.querySelectorAll(".count_percent");

    el.style.strokeDasharray = `${circumference} ${circumference}`;
    el.style.strokeDashoffset = circumference;
    console.log(circumference);
    function setProgress(percent) {
      el.style.strokeDashoffset = circumference - (percent / 100) * circumference;
      circlePercent.forEach((i) => {
        i.innerHTML = percent + "%";
      });
      sessionStorage.setItem("isStrokeDasharray", `${circumference} ${circumference}`);
      sessionStorage.setItem("isStrokeDashoffset", circumference - (percent / 100) * circumference);
      sessionStorage.setItem("isCircle", percent);
    }
    setProgress(randomInteger(75, 95));

    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  });
}

if (sessionStorage.getItem("isCircle") && sessionStorage.getItem("isStrokeDashoffset") && sessionStorage.getItem("isStrokeDasharray")) {
  document.querySelectorAll(".count_percent").forEach((el) => {
    el.innerHTML = `${sessionStorage.getItem("isCircle")}%`;
  });
  document.querySelectorAll(".circle-progress").forEach((el) => {
    el.style.strokeDasharray = sessionStorage.getItem("isStrokeDasharray");
  });
  document.querySelectorAll(".circle-progress").forEach((el) => {
    el.style.strokeDashoffset = sessionStorage.getItem("isStrokeDashoffset");
  });
}
// review
let arrR = {
  1: [`I`, `Isaiah tommy`, `Precise needles, answers and explanations some thoughts about myself and often told me I was struggling with myself. And totally TRUE! Mindblowing but this app helps me throw more and more throws.`, ""],
  2: [`M`, `Mamafrauts`, `the best Vladana is the BEST astrologer I’ve gotten reading from! She is very thorough and gives detailed info based on what questions you ask her... highly recommend!!! :)`, ""],
  3: [`H`, `HappyFeeetz`, `Great app My astrologer guide is pretty communicative and informative. I do not know much about astrology so she helped me understand some concepts.`, ""],
  4: [`C`, `Cassandrats`, `Astrology insights with Vladana hint has been a wonderful portal to understanding more about my birth chart and current transits happening- my astrologer Vladana is patient with my questions and always has clear and helpful info connected with the sky!`, `is_hidden first_step first_scroll`],
  5: [`C`, `CeCe JuzMe`, `Rosanna is awesome She has been there every step of the way with my journey. She responses very quickly without hesitation. I would recommend her to anyone.`, `is_hidden first_step`],
  6: [`M`, `MrsMMiller`, `AKHO is a STAR herself! I’m so blessed to have found this app and Akho! She is a wonderful astrologist - very clear and extremely thorough with her analysis and answers to my many questions. I feel safe and comfortable communicating with her and I look forward to more time working with her!`, `is_hidden second_step second_scroll`],
  7: [`C`, `Christinamariemelanie`, `Amazing Astrologer!!!! Highly recommend!!!!!!`, `is_hidden second_step`],
  8: [`M`, `Mcookie7Mandy`, `Hint is amazing! This app is wonderful and is so easy to use. My personal guide Vladana is so on point with her insights and not fake suggestions that could fit to anyone. Everything is personalized to just you based on only your own information that you give so it can’t be misread or misleading. I love the compatibility insights as well. All in all I’m very pleased and recommend to anyone looking for a reputable website!`, `is_hidden third_step third_scroll`],
  9: [`S`, `StudemanSteve`, `What a lovely app! I've tried a number of horoscope apps, but this one is the most accurate by a long shot. There are days when the app's forecast is so in sync with my actual experience that it feels like the app is directly addressing me. I am really smitten with this app.`, `is_hidden third_step`],
  10: [`E`, `ElealonWhyse`, `A clear step by step approach I've been reading my daily horoscope since I was a youngster, so I can confidently say that they are the best horoscopes I've ever had access to. My friends who are unhappy with their horoscopes often come to me to find out what the ""good one"" predicts (aka. the one from this app).`, `is_hidden fourth_step fourth_scroll`],
  11: [`C`, `CelyanBasars`, `Best astrology experience I have a background in science, that's why I still have a healthy amount of skepticism. However, one of my friends advised that I check out Hint since I enjoy reading astrology as a tool that helps me to frame my thinking and the world in a viewpoint that is more neutral or positive. There are patterns, so the only thing I can think of is that there must be some kind of scientific basis that we haven't worked out yet. I don't have any belief in anything spiritual, but there are patterns. To sum it all up, I'm not someone who is easily swayed.`, `is_hidden fourth_step`],
  12: [`T`, `Thxrnhill`, `Christi at Hint. THE BEST. she’s the only astrologer i’ve matched up with that’s worked. my day to day horoscopes are very accurate and now finding her my questions are answered in a way that makes me feel satisfied. fav astro app fs.`, `is_hidden fifth_step fifth_scroll`],
  13: [`J`, `J1212121234567`, `Chelene Chelene has been with me for a couple of months now, her words has been supportive and uplifting to my situation. Thank you.`, `is_hidden fifth_step`],
  14: [`T`, `Tinkle when`, `The BEST!!!! ♐️🔮 Let me tell you, Hint is my go to app for astrology! So accurate, layout is super simple and easy to navigate. HUGE bonus is the personal astrologers on the site. If you can choose, my recommendation is Vladana. Oh my god, so accurate! She amazing! Very empathetic, and on point!.. and it's included in membership, you don't have to pay extra for learning about yourself. Vladana is very clear when reaching out, communication is through message or she'll send personalized video messages to you!. Reach out now!!!!!!!`, `is_hidden sixth_step sixth_scroll`],
};

function setList(img, name, text, hidden) {
  return `
<div class='review_card ${hidden}'>
  <div class="review_card_info">
    <p class="review_card_img">${img}</p>
    <div class="review_card_stars">
      <p class="review_card_name">${name}</p>
      <span class="review_card_star"></span>
    </div>
  </div>
  <p class="verified_txt">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0C3.14005 0 0 3.14005 0 7C0 10.86 3.14005 14 7 14C10.86 14 14 10.86 14 7C14 3.14005 10.86 0 7 0Z" fill="#75DB9C" />
      <path d="M11.1724 5.31321L6.48867 9.99677C6.34815 10.1373 6.1637 10.208 5.97925 10.208C5.7948 10.208 5.61035 10.1373 5.46984 9.99677L3.12805 7.65499C2.84623 7.3733 2.84623 6.91785 3.12805 6.63616C3.40974 6.35434 3.86506 6.35434 4.14689 6.63616L5.97925 8.46852L10.1535 4.29437C10.4352 4.01255 10.8905 4.01255 11.1724 4.29437C11.4541 4.57606 11.4541 5.03138 11.1724 5.31321Z" fill="white" /></svg
    >Verified customer
  </p>
  <p class="review_card_descr">${text}</p>
</div>
  `;
}

if (document.querySelector("#reviewsBlock") && !document.querySelector("#reviewsBlock .review_card")) {
  for (let key in arrR) {
    document.querySelectorAll(".reviews_wrap").forEach((el) => {
      el.insertAdjacentHTML("beforeend", setList(arrR[key][0], arrR[key][1], arrR[key][2], arrR[key][3]));
    });
  }
}

// click on load more btn
if (document.querySelector(".load_more_btn")) {
  document.querySelectorAll(".load_more_btn").forEach((link) => {
    link.addEventListener("click", (e) => {
      // e.target.style.display = "none";
      console.log(`load_more_btn`);

      link
        .closest("#reviewsBlock")
        .querySelectorAll(" .review_card")
        .forEach((el) => {
          if (el.classList.contains("is_hidden") && el.classList.contains("first_step")) {
            el.classList.remove("is_hidden");
            el.classList.remove("first_step");
            if (el.classList.contains("first_scroll")) {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            setTimeout(() => {
              e.target.classList.add("first_step");
            }, 10);
          }
          if (el.classList.contains("is_hidden") && el.classList.contains("second_step") && e.target.classList.contains("first_step")) {
            el.classList.remove("is_hidden");
            el.classList.remove("second_step");
            if (el.classList.contains("second_scroll")) {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            setTimeout(() => {
              e.target.classList.remove("first_step");
              e.target.classList.add("second_step");
            }, 10);
          }
          if (el.classList.contains("is_hidden") && el.classList.contains("third_step") && e.target.classList.contains("second_step")) {
            el.classList.remove("is_hidden");
            el.classList.remove("third_step");
            if (el.classList.contains("third_scroll")) {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            setTimeout(() => {
              e.target.classList.remove("second_step");
              e.target.classList.add("third_step");
            }, 10);
          }
          if (el.classList.contains("is_hidden") && el.classList.contains("fourth_step") && e.target.classList.contains("third_step")) {
            el.classList.remove("is_hidden");
            el.classList.remove("fourth_step");
            if (el.classList.contains("fourth_scroll")) {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            setTimeout(() => {
              e.target.classList.remove("third_step");
              e.target.classList.add("fourth_step");
            }, 10);
          }
          if (el.classList.contains("is_hidden") && el.classList.contains("fifth_step") && e.target.classList.contains("fourth_step")) {
            el.classList.remove("is_hidden");
            el.classList.remove("fifth_step");
            if (el.classList.contains("fifth_scroll")) {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            setTimeout(() => {
              e.target.classList.remove("fourth_step");
              e.target.classList.add("fifth_step");
            }, 10);
          }
          if (el.classList.contains("is_hidden") && el.classList.contains("sixth_step") && e.target.classList.contains("fifth_step")) {
            el.classList.remove("is_hidden");
            el.classList.remove("sixth_step");
            e.target.style.display = "none";
            if (el.classList.contains("sixth_scroll")) {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            }
            setTimeout(() => {
              e.target.classList.remove("fifth_step");
              e.target.classList.add("sixth_step");
            }, 10);
          }
        });
    });
  });
}
// accardionToggle
$(".accardion_link_unique_identities").click(function (e) {
  $(this).toggleClass("active_block");
  $(this).closest("li").toggleClass("active_block");
  $(this).next(".accardion_lists_unique_identities").slideToggle();
  if ($(".accardion_link_unique_identities").not(this)) {
    $(".accardion_link_unique_identities").not(this).next(".accardion_lists_unique_identities").css("display", "none");
    $(".accardion_link_unique_identities").not(this).removeClass("active_block");
    $(".accardion_link_unique_identities").not(this).closest("li").removeClass("active_block");
  }
});
// slick slider
let slickIntervalU = setInterval(() => {
  if (typeof jQuery(".slickInterval_u").slick === "function" && document.querySelectorAll(".slickInterval_a video").length > 3) {
    clearInterval(slickIntervalU);
    //  slider
    let slider = jQuery(".slickInterval_u").slick({
      arrows: false,
      slidesToShow: 1.4,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
    });
  }
}, 600);

let slickIntervalA = setInterval(() => {
  if (typeof jQuery(".slickInterval_a").slick === "function" && document.querySelectorAll(".slickInterval_a video").length > 3) {
    clearInterval(slickIntervalA);
    //  slider
    let slider = jQuery(".slickInterval_a").slick({
      arrows: false,
      slidesToShow: 1.4,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
    });
  }
}, 600);

//
document.querySelectorAll(".absol_txt span svg").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (!e.currentTarget.closest(".absol_txt").classList.contains("is_hidden")) {
      e.currentTarget.closest(".absol_txt").classList.add("is_hidden");
    }
    if (!e.currentTarget.closest(".absol_txt").nextElementSibling.classList.contains("is_hidden")) {
      e.currentTarget.closest(".absol_txt").nextElementSibling.classList.add("is_hidden");
    }
    el.closest(".video_wrap").querySelector("video").play();
  });
});
document.querySelectorAll(".video_slider .video_wrap > span").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.currentTarget.classList.add("is_hidden");
    if (!e.currentTarget.previousElementSibling.classList.contains("is_hidden")) {
      e.currentTarget.previousElementSibling.classList.add("is_hidden");
    }
    el.closest(".video_wrap").querySelector("video").play();
  });
});
document.querySelectorAll(".video_slider .video_wrap > .absol_txt").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.currentTarget.classList.add("is_hidden");
    if (!e.currentTarget.nextElementSibling.classList.contains("is_hidden")) {
      e.currentTarget.nextElementSibling.classList.add("is_hidden");
    }
    el.closest(".video_wrap").querySelector("video").play();
  });
});
