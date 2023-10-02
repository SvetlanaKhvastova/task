onClickBtnOfQuiz();

function onClickBtnOfQuiz() {
  let btnStart = setInterval(() => {
    let arr = [];
    let text;
    let experienceLevel = [],
      preferredDuration = [],
      yogaType = [],
      areasOfFocus = [];
    if (document.querySelector(".quiz_wrapp")) {
      clearInterval(btnStart);
      // btn start quiz
      document.querySelector(".btn_personalize_my_exp").addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.currentTarget);

        if (e.currentTarget.closest("#quizForYou").getAttribute("count") === "start") {
          e.currentTarget.closest("#quizForYou").setAttribute("count", "1");
        }
        if (e.currentTarget.closest(".start_page").classList.contains("active_page")) {
          e.currentTarget.closest(".start_page").classList.remove("active_page");
        }
        document.querySelector(".first_page").classList.add("active_page");
      });
      // btn Skip personalization
      document.querySelector(".btn_skip_personalization").addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
          window.location.href = "https://www.doyogawithme.com/yogi/register?destination=/become-a-subscriber";
        } else {
          window.location.href = "https://www.doyogawithme.com/yoga-classes";
        }
      });
      //btn Back
      document.querySelectorAll(".btn_back").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          if (!e.target.getAttribute("data-test")) {
            console.log(e.target.closest("#quizForYou").getAttribute("count"));
            if (e.target.closest("#quizForYou").querySelector(".first_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "1") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".first_page").classList.remove("active_page");
                document.querySelector(".start_page").classList.add("active_page");
                e.target.closest("#quizForYou").setAttribute("count", "start");
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".second_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "2") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".second_page").classList.remove("active_page");
                document.querySelector(".first_page").classList.add("active_page");
                if (document.querySelectorAll(".steps_link")[1].classList.contains("active")) {
                  document.querySelectorAll(".steps_link")[1].classList.remove("active");
                }
                document.querySelector(".active_step").textContent = "1";
                e.target.closest("#quizForYou").setAttribute("count", "1");

                if (document.querySelector(".first_page .custom_checkbox:checked + label")) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                }
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".third_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "3") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".third_page").classList.remove("active_page");
                document.querySelector(".second_page").classList.add("active_page");
                if (document.querySelectorAll(".steps_link")[2].classList.contains("active")) {
                  document.querySelectorAll(".steps_link")[2].classList.remove("active");
                }
                document.querySelector(".active_step").textContent = "2";
                e.target.closest("#quizForYou").setAttribute("count", "2");
                if (document.querySelector(".second_page .custom_checkbox:checked + label")) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                }
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".fourth_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "4") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".fourth_page").classList.remove("active_page");
                document.querySelector(".third_page").classList.add("active_page");
                if (document.querySelectorAll(".steps_link")[3].classList.contains("active")) {
                  document.querySelectorAll(".steps_link")[3].classList.remove("active");
                }
                document.querySelector(".active_step").textContent = "3";
                e.target.closest("#quizForYou").setAttribute("count", "3");
                if (document.querySelector(".third_page .custom_checkbox:checked + label")) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                }
              }, 200);
            }
          }

          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 300);
        });
      });
      // btn Skip this question
      document.querySelectorAll(".btn_skip_question").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          if (!e.target.getAttribute("data-test")) {
            console.log(e.target);
            if (e.target.closest("#quizForYou").querySelector(".first_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "1") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".first_page").classList.remove("active_page");
                document.querySelector(".second_page").classList.add("active_page");
                document.querySelectorAll(".steps_link")[1].classList.add("active");
                document.querySelector(".active_step").textContent = "2";
                e.target.closest("#quizForYou").setAttribute("count", "2");
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".second_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "2") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".second_page").classList.remove("active_page");
                document.querySelector(".third_page").classList.add("active_page");
                document.querySelectorAll(".steps_link")[2].classList.add("active");
                document.querySelector(".active_step").textContent = "3";
                e.target.closest("#quizForYou").setAttribute("count", "3");
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".third_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "3") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".third_page").classList.remove("active_page");
                document.querySelector(".fourth_page").classList.add("active_page");
                document.querySelectorAll(".steps_link")[3].classList.add("active");
                document.querySelector(".active_step").textContent = "4";
                e.target.closest("#quizForYou").setAttribute("count", "4");
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".fourth_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "4") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".fourth_page").classList.remove("active_page");
                document.querySelector(".finish_page").classList.add("active_page");
                e.target.closest("#quizForYou").setAttribute("count", "finish");
                arr.push({
                  experienceLevel: experienceLevel,
                  preferredDuration: preferredDuration,
                  yogaType: yogaType,
                  areasOfFocus: areasOfFocus,
                });

                if (localStorage.getItem("perfectYogaJourney")) {
                  localStorage.removeItem("perfectYogaJourney");
                  localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                } else {
                  localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                }

                setPersonalizedBox();
              }, 200);
            }
          }

          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 300);
        });
      });
      // btn Next
      document.querySelectorAll(".btn_next").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          if (!e.target.getAttribute("data-test")) {
            console.log(e.target);
            if (e.target.closest("#quizForYou").querySelector(".first_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "1" && e.target.getAttribute("disabled") !== "1") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".first_page").classList.remove("active_page");
                document.querySelector(".second_page").classList.add("active_page");
                document.querySelectorAll(".steps_link")[1].classList.add("active");
                document.querySelector(".active_step").textContent = "2";
                e.target.closest("#quizForYou").setAttribute("count", "2");
                if (!document.querySelector(".second_page .custom_checkbox:checked + label")) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                }

                experienceLevel = [];
                document.querySelectorAll(".first_page .custom_checkbox:checked + label").forEach((el) => {
                  console.log(el.getAttribute("for"));
                  text = el.getAttribute("data-name");
                  experienceLevel.push(text);
                });
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".second_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "2" && e.target.getAttribute("disabled") !== "1") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".second_page").classList.remove("active_page");
                document.querySelector(".third_page").classList.add("active_page");
                document.querySelectorAll(".steps_link")[2].classList.add("active");
                document.querySelector(".active_step").textContent = "3";
                e.target.closest("#quizForYou").setAttribute("count", "3");
                if (!document.querySelector(".third_page .custom_checkbox:checked + label")) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                }

                yogaType = [];
                document.querySelectorAll(".second_page .custom_checkbox:checked + label").forEach((el) => {
                  text = el.getAttribute("data-name");
                  yogaType.push(text);
                });
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".third_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "3" && e.target.getAttribute("disabled") !== "1") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".third_page").classList.remove("active_page");
                document.querySelector(".fourth_page").classList.add("active_page");
                document.querySelectorAll(".steps_link")[3].classList.add("active");
                document.querySelector(".active_step").textContent = "4";
                e.target.closest("#quizForYou").setAttribute("count", "4");
                if (!document.querySelector(".fourth_page .custom_checkbox:checked + label")) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                }
                areasOfFocus = [];
                document.querySelectorAll(".third_page .custom_checkbox:checked + label").forEach((el) => {
                  text = el.getAttribute("data-name");
                  areasOfFocus.push(text);
                });
              }, 200);
            }
            if (e.target.closest("#quizForYou").querySelector(".fourth_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "4" && e.target.getAttribute("disabled") !== "1") {
              setTimeout(() => {
                e.target.closest("#quizForYou").querySelector(".fourth_page").classList.remove("active_page");
                document.querySelector(".finish_page").classList.add("active_page");
                e.target.closest("#quizForYou").setAttribute("count", "finish");
                preferredDuration = [];
                document.querySelectorAll(".fourth_page .custom_checkbox:checked + label").forEach((el) => {
                  text = el.getAttribute("data-name");
                  preferredDuration.push(text);
                });

                arr.push({
                  experienceLevel: experienceLevel,
                  preferredDuration: preferredDuration,
                  yogaType: yogaType,
                  areasOfFocus: areasOfFocus,
                });

                if (localStorage.getItem("perfectYogaJourney")) {
                  localStorage.removeItem("perfectYogaJourney");
                  localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                } else {
                  localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                }

                if (!localStorage.getItem("createdPersonalizedList")) {
                  localStorage.setItem("createdPersonalizedList", "yes");
                }

                setPersonalizedBox();
              }, 200);
            }
          }

          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 300);
        });
      });

      //click on custom_checkbox
      document.querySelectorAll(".custom_checkbox + label").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.currentTarget.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");

          if (e.currentTarget.getAttribute("for") === "noneStylesYoga" && e.currentTarget.closest(".second_page")) {
            console.log(`noneStylesYoga`);
            document.querySelectorAll(".second_page .custom_checkbox").forEach((i) => {
              if (i.getAttribute("for") !== "noneStylesYoga") {
                i.checked = false;
              }
            });
          }
          if (e.currentTarget.getAttribute("for") !== "noneStylesYoga" && e.currentTarget.closest(".second_page")) {
            document.querySelectorAll(".second_page .custom_checkbox").forEach((i) => {
              console.log(i);
              if (i.getAttribute("name") === "noneStylesYoga") {
                console.log(`object`);
                i.checked = false;
              }
            });
          }
        });
      });
    }
  }, 100);
}

let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.async = false;
document.head.appendChild(script);
// cdn pagination
let scriptCustomPagination = document.createElement("script");
scriptCustomPagination.src = "https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.6.0/pagination.min.js";
scriptCustomPagination.async = false;
document.head.appendChild(scriptCustomPagination);

let scriptCustomPaginationStyle = document.createElement("link");
scriptCustomPaginationStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.6.0/pagination.css";
scriptCustomPaginationStyle.rel = "stylesheet";
document.head.appendChild(scriptCustomPaginationStyle);
//set personalized_box
function setPersonalizedBox() {
  if (localStorage.getItem("perfectYogaJourney")) {
    temp = JSON.parse(localStorage.getItem("perfectYogaJourney"));
    temp.forEach((list) => {
      for (var key in list) {
        document.querySelectorAll(".personalized_list").forEach((i) => {
          if (i.getAttribute("data-name") === key) {
            let arrList = list[key];
            arrList.forEach((link) => {
              i.querySelector(".personalized_txt_wrapp").insertAdjacentHTML("beforeend", `<p class="personalized_list_tag" data-tag='${link}'>${link}</p>`);
              console.log(link);
            });
            // console.log(list[key]);
          }
        });
      }
    });

    document.querySelectorAll(".personalized_list .personalized_txt_wrapp").forEach((el) => {
      if (el.children.length === 0) {
        el.closest(".personalized_list").style.display = "none";
      }
    });
  }
}

function getPagination() {
  $("#demo").pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 35],
    pageSize: 5,
    pageNumber: 3,
    callback: function (data, pagination) {
      // template method of yourself
      var html = template(data);
      dataContainer.html(html);
    },
  });
}

getPdpShorterProduction();
function getPdpShorterProduction() {
  let product;
  let levelBeginner = "Beginner";
  let levelIntermediate = "Intermediate";
  let levelAdvanced = "Advanced";

  let typeOfYoga1 = "Vinyasa Flow";
  let typeOfYoga2 = "Hatha";
  let typeOfYoga3 = "Power Yoga";
  let typeOfYoga4 = "Restorative/Yin";
  let typeOfYoga5 = "Kundalini Yoga";
  let typeOfYoga6 = "Yoga for Meditation and Mindfulness";

  let focusOn1 = "Core strength and stability";
  let focusOn2 = "Back strength and pain relief";
  let focusOn3 = "Upper body strength and toning";
  let focusOn4 = "Flexibility and joint mobility";
  let focusOn5 = "Relaxation and and sleep improvement";
  let focusOn6 = "Mindfulness and meditation techniques";
  let focusOn7 = "Women’s health, Prenatal and Postnatal practices";
  let focusOn8 = "Techniques to increase energy";

  let durationTwentyTxt = "10-20 minutes";
  let durationFortyFiveTxt = "30-45 minutes";
  let durationSixtyTxt = "60 minutes or more";

  fetch(`videos-metadata-crs.json`)
    .then((response) => response.json())
    .then((json) => {
      product = json;
      console.log(product.length);

      for (const key of Object.keys(product)) {
        // console.log(product[key].tags);
        document.querySelector(".new_list_yoga_classes").insertAdjacentHTML("beforeend", setListYogaClasses(product[key].view_node, product[key].title, product[key].field_difficulty, product[key].thumbnail__target_id, product[key].field_instructor, product[key].field_media_duration, product[key].rating, product[key].tags));

        if (localStorage.getItem("perfectYogaJourney") && document.querySelector(".new_list_yoga_classes").children.length === product.length) {
          temp = JSON.parse(localStorage.getItem("perfectYogaJourney"));
          console.log(document.querySelector(".new_list_yoga_classes").children.length);
          // console.log(temp);
          temp.forEach((list) => {
            for (let link in list) {
              document.querySelectorAll(".new_list_yoga_classes li").forEach((i) => {
                let arrList = list[link];
                arrList.forEach((link) => {
                  // difficulty
                  if (link === levelBeginner) {
                    if (i.getAttribute("data-difficulty") === "Beginner" || i.getAttribute("data-difficulty") === "Beginner I" || i.getAttribute("data-difficulty") === "Beginner II") {
                      if (!i.classList.contains("is_visible")) {
                        i.classList.add("is_visible");
                        i.style.display = "block";
                      }
                    }
                  }
                  if (link === levelIntermediate) {
                    if (i.getAttribute("data-difficulty") === "Intermediate" || i.getAttribute("data-difficulty") === "Intermediate I" || i.getAttribute("data-difficulty") === "Intermediate II" || i.getAttribute("data-difficulty") === "Intermediate III") {
                      if (!i.classList.contains("is_visible")) {
                        i.classList.add("is_visible");
                        i.style.display = "block";
                      }
                    }
                  }
                  if (link === levelAdvanced) {
                    if (i.getAttribute("data-difficulty") === "Advanced") {
                      if (!i.classList.contains("is_visible")) {
                        i.classList.add("is_visible");
                        i.style.display = "block";
                      }
                    }
                  }
                  // tags
                  let tagsArr = i.getAttribute("data-tags").split(",");
                  tagsArr.forEach((tag) => {
                    // typeOf
                    if (link === typeOfYoga1) {
                      if (tag === "Vinyasa/Power Yoga" || tag === "Pilates" || tag === "Jivamukti") {
                        if (!i.classList.contains("is_visible")) {
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === typeOfYoga2) {
                      if (tag === "Hatha Yoga" || tag === "Prenatal/Postnatal Yoga" || tag === "Pranayama Yoga" || tag === "Slow Flow" || tag === "PNF" || tag === "Gentle Yoga" || tag === "Yoga at Work") {
                        if (!i.classList.contains("is_visible")) {
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === typeOfYoga3) {
                      if (tag === "Ashtanga Yoga" || tag === "Vinyasa/Power Yoga" || tag === "Yoga for Athletes" || tag === "Yoga for Runners") {
                        if (!i.classList.contains("is_visible")) {
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === typeOfYoga4) {
                      if (tag === "Restorative Yoga" || tag === "Yin and Yin/Yang Yoga" || tag === "Prenatal/Postnatal Yoga" || tag === "Mom and Baby Yoga" || tag === "Chair Yoga" || tag === "Yoga for Seniors" || tag === "Yoga Therapy" || tag === "Yoga for Back Care" || tag === "Yoga at Work") {
                        if (!i.classList.contains("is_visible")) {
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === typeOfYoga5) {
                      if (tag === "Kundalini Yoga" || tag === "Pranayama Yoga") {
                        if (!i.classList.contains("is_visible")) {
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === typeOfYoga6) {
                      if (tag === "Guided Meditation" || tag === "Kundalini Yoga" || tag === "Pranayama Yoga" || tag === "Values-based Education") {
                        if (!i.classList.contains("is_visible")) {
                          2;

                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    //focusOn
                    if (link === focusOn1) {
                      if (tag === "Core Strength" || tag === "Balance" || tag === "Legs and Feet" || tag === "Spine" || tag === "Strength" || tag === "Whole Body" || tag === "Inversions") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn2) {
                      if (tag === "Backbends" || tag === "Lower Back" || tag === "Neck/Shoulders" || tag === "Spine") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn3) {
                      if (tag === "Core Strength" || tag === "Arms/Hands") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn4) {
                      if (tag === "Flexibility" || tag === "Hips" || tag === "Legs and Feet" || tag === "Twists" || tag === "Whole Body") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn5) {
                      if (tag === "Sleep/Relaxation" || tag === "Stress/Anxiety") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn6) {
                      if (tag === "Meditation") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn7) {
                      if (tag === "Prenatal/Postnatal Yoga" || tag === "Gentle Yoga" || tag === "Mom and Baby Yoga" || tag === "Yoga for Kids") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                    if (link === focusOn8) {
                      if (tag === "Morning" || tag === "Travel" || tag === "Vigorous/Energy") {
                        if (!i.classList.contains("is_visible")) {
                          console.log(tag);
                          i.classList.add("is_visible");
                          i.style.display = "block";
                        }
                      }
                    }
                  });
                  // duration
                  if (document.querySelectorAll(".is_visible").length > 0) {
                    document.querySelectorAll(".is_visible").forEach((visib) => {
                      if (link === durationTwentyTxt) {
                        if (i.getAttribute("data-duration") <= 1200) {
                          if (!i.classList.contains("is_visible_duration") && i.classList.contains("is_visible")) {
                            console.log(i.getAttribute("data-duration"), `durationTwentyTxt`);
                            i.classList.add("is_visible_duration");
                            i.style.display = "block";
                          }
                        } else {
                          if (!i.classList.contains("is_visible_duration")) {
                            // i.classList.remove("is_visible");
                            i.style.display = "none";
                          }
                        }
                      }
                      if (link === durationFortyFiveTxt) {
                        if (i.getAttribute("data-duration") >= 1800 && i.getAttribute("data-duration") <= 2700) {
                          if (!i.classList.contains("is_visible_duration") && i.classList.contains("is_visible")) {
                            console.log(i.getAttribute("data-duration"), `durationFortyFiveTxt`);
                            i.classList.add("is_visible_duration");
                            i.style.display = "block";
                          }
                        } else {
                          if (!i.classList.contains("is_visible_duration")) {
                            // i.classList.remove("is_visible");
                            i.style.display = "none";
                          }
                        }
                      }
                      if (link === durationSixtyTxt) {
                        if (i.getAttribute("data-duration") >= 3600) {
                          if (!i.classList.contains("is_visible_duration") && i.classList.contains("is_visible")) {
                            console.log(i.getAttribute("data-duration"), "durationSixtyTxt");
                            i.classList.add("is_visible_duration");
                            i.style.display = "block";
                          }
                        } else {
                          if (!i.classList.contains("is_visible_duration")) {
                            // i.classList.remove("is_visible");
                            i.style.display = "none";
                          }
                        }
                      }
                    });
                  } else {
                    // console.log(link);
                    if (link === durationTwentyTxt) {
                      if (i.getAttribute("data-duration") <= 1200) {
                        if (!i.classList.contains("is_visible_duration")) {
                          // console.log(i.getAttribute("data-duration"), `durationTwentyTxt NONE >>>>>>>>>>>>>>>>>>>>>`);
                          // console.log("NONE is_visible");
                          i.classList.add("is_visible_duration");
                          i.style.display = "block";
                        }
                      } else {
                        if (!i.classList.contains("is_visible_duration")) {
                          // i.classList.remove("is_visible");
                          i.style.display = "none";
                        }
                      }
                    }
                    if (link === durationFortyFiveTxt) {
                      if (i.getAttribute("data-duration") >= 1800 && i.getAttribute("data-duration") <= 2700) {
                        if (!i.classList.contains("is_visible_duration")) {
                          // console.log(i.getAttribute("data-duration"), `durationFortyFiveTxt NONE !!!!!!!!!!!!!!!!!!!!!!!!!!`);
                          i.classList.add("is_visible_duration");
                          i.style.display = "block";
                        }
                      } else {
                        if (!i.classList.contains("is_visible_duration")) {
                          // i.classList.remove("is_visible");
                          i.style.display = "none";
                        }
                      }
                    }
                    if (link === durationSixtyTxt) {
                      if (i.getAttribute("data-duration") >= 3600) {
                        if (!i.classList.contains("is_visible_duration")) {
                          console.log(i.getAttribute("data-duration"), "durationSixtyTxt NONE +++++++++++++++++++");
                          i.classList.add("is_visible_duration");
                          i.style.display = "block";
                        }
                      } else {
                        if (!i.classList.contains("is_visible_duration")) {
                          // i.classList.remove("is_visible");
                          i.style.display = "none";
                        }
                      }
                    }
                  }
                });
              });
            }
          });
        }
      }

      if (document.querySelectorAll(".is_visible_duration").length <= 0) {
        document.querySelector(".list_yoga_classes_count").textContent = document.querySelectorAll(".is_visible").length;
      } else {
        document.querySelector(".list_yoga_classes_count").textContent = document.querySelectorAll(".is_visible_duration").length;
      }
    });

  getPagination();
}

function setListYogaClasses(link, title, difficulty, img, instructorName, duration, rating, tags, count) {
  // duration
  let sec = +duration;
  let h = (sec / 3600) ^ 0;
  let m = ((sec - h * 3600) / 60) ^ 0;
  let s = sec - h * 3600 - m * 60;
  let result;
  // ${new Date(+duration * 1000).toUTCString().split(/ /)[4]}
  if (h === 0) {
    result = `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  } else {
    result = `${h < 10 ? "" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  }

  // rating
  let ratingSvg = "";
  if (rating === 5) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating < 5 && rating > 4) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"></path></svg>`;
  } else if (rating === 4) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating === 3) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating < 4 && rating > 3) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating < 3 && rating > 2) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating === 2) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating === 1) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>n<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else if (rating === 0) {
    ratingSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="1.04em" height="1em" viewBox="0 0 1664 1600"><path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46z"></path></svg>`;
  } else {
    console.log(`object`, rating);
  }

  // difficulty
  let difficultySvg = "";
  if (difficulty === "Advanced") {
    difficultySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg>`;
  } else if (difficulty === "Beginner I") {
    difficultySvg = `<span style="--svg: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='2'%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M3 21V20C3 17.7909 4.79086 16 7 16H11C13.2091 16 15 17.7909 15 20V21'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' dur='0.4s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='20' stroke-dashoffset='20' d='M9 13C7.34315 13 6 11.6569 6 10C6 8.34315 7.34315 7 9 7C10.6569 7 12 8.34315 12 10C12 11.6569 10.6569 13 9 13Z'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='0.5s' dur='0.4s' values='20;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M15 6H21'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3Cpath stroke-dasharray='8' stroke-dashoffset='8' d='M18 3V9'%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.2s' dur='0.2s' values='8;0'/%3E%3C/path%3E%3C/g%3E%3C!-- 1695998333412 --%3E%3C/svg%3E&quot;); width: 1em; height: 1em; background-color: currentcolor; -webkit-mask-image: var(--svg); -webkit-mask-repeat: no-repeat; -webkit-mask-size: 100% 100%;"></span>`;
  }

  return `
  <li data-difficulty='${difficulty}' data-duration='${duration}' data-tags='${tags}'>
    <a href="https://www.doyogawithme.com${link}">
      <div>
        <img src="https://www.doyogawithme.com${img}" alt="${title}" class="field_media_img" />
        <span class="field_difficulty_txt">${difficultySvg}${difficulty}</span>
        <p class="field_media_duration_txt">${result}</p>
      </div>
      <div>
        <h2 class="field_title">${title}</h2>
        <p class="field_instructor_name">${instructorName}</p>
        <div>

          <p class="rating_icon">${ratingSvg}</p>
        </div>
      </div>
    </a>
  </li>
          `;
}
