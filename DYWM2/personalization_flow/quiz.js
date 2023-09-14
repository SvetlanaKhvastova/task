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
