console.log("initExp")

/********* Settings **********/
const settings = {
  dir: "https://flopsi69.github.io/crs/zenithprepacademy/webinar",
  clarity: true,
  observe: false,
}

//Hotjar
if (settings.clarity) {
  const clarityInterval = setInterval(function () {
    if (typeof clarity == "function") {
      clearInterval(clarityInterval)
      clarity("set", "9_steps_timeline", "variant_1")
    }
  }, 1000)
}

// Alalytic
function pushDataLayer(action = "", label = "") {
  try {
    var objData = {
      event: "event-to-ga",
      eventCategory: "Exp: 9 steps timeline",
      eventAction: action,
      eventLabel: label,
    }
    console.log("eventFire", objData)

    window.dataLayer = window.dataLayer || []
    dataLayer.push(objData)
  } catch (e) {
    console.log("Event Error:", e)
  }
}

// Observe
if (settings.observe) {
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue

        // Code Here
      }
    }
  })

  let demoElem = document.body

  observer.observe(demoElem, { childList: true, subtree: true })
}

// Styles
const styles = `
  .elVideoWrapper {
    display: flex;
    height: 505px;
    margin-top: 20px!important;
  }
  @media(max-width: 1310px) {
    .elVideoWrapper {
      height: 38.5vw;
    }
  }
  @media(max-width: 768px) {
    .elVideoWrapper {
      height: auto;
      display: block;
    }
  }
  .elVideo {
    flex-grow: 1;
  }
  .fullContainer .containerInner {
    width: 1315px;
  }
  .elHeadlineWrapper .elHeadline {
    text-align: left!important;
  }
  .elButton {
    margin-top: 32px;
    background: #51AF97!important;
    font-size: 18px!important;
    line-height: 24px!important;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: none;
    border: none;
    padding-top: 12px!important;
    padding-bottom: 12px!important;
    text-shadow: none;
  }
  .timeline {
    width: 335px;
    background: #E9EDF3;
    border: 1px solid #D9D9D9;
    border-radius: 8px;
    margin-left: 12px;
    padding: 20px;
    overflow: auto;
  }
  .timeline__title {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  .timeline__list {
    position: relative;
    margin-top: 20px;
  }
  .timeline__list:before {
    content: '';
    position: absolute;
    left: 11px;
    top: 0;
    bottom: 0;
    background: #D9D9D9;
    width: 2px;
    height: 100%;
  }
  @media(min-width: 992px) {
    .timeline__list:before {
      width: 2px;
      left: 11px;
    }
  }
  .timeline__item {
    position: relative;
    padding-left: 36px;
    color: #5B5B5B;
  }
  .timeline__item-title {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .timeline__item-time {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-top: 4px;
  }
  .timeline__item + .timeline__item {
    margin-top: 16px;
  }
  .timeline__item:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #999999;
    background-color: #fff;
    transition: 0.35s;
  }
  .timeline__item-note:not(.active):not(.done):before {
    border-color: #9E0031;
  }
  .timeline__item-note:not(.active):not(.done):after {
    width: 4px;
    height: 13px;
    background: url('${settings.dir}/img/icon-note.svg') center no-repeat;
    background-size: contain;
    border-radius: 0;
    top: 6px;
    left: 10px;
  }
  .timeline__item:after {
    content: '';
    position: absolute;
    z-index: 2;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #999;
    left: 9px;
    top: 9px;
    transition: 0.35s;
  }
  .timeline__note {
    background: #FFFFFF;
    border: 1px solid #999999;
    border-radius: 8px;
    padding: 8px 16px;
  }
  .timeline__note .timeline__item-title {
    font-weight: 600;
    color: #5B5B5B;
  }
  .timeline__note .timeline__item-time {
    font-weight: 700;
    color: #9E0031;
    font-family: "Open Sans", Helvetica, sans-serif !important;
  }
  .timeline__note .timeline__item-caption {
    font-weight: 600;
    font-size: 12px;
    line-height: 21px;
    color: #9E0031;
    marign-top: 4px;
  }

  .active .timeline__note {
    border-color: #51AF97;
  }
  .active .timeline__note .timeline__item-title {
    font-weight: 700;
    color: #51AF97;
  }
  .active .timeline__note .timeline__item-time {
    color: #5B5B5B;
  }
  .active .timeline__note .timeline__item-caption {
    color: #5B5B5B;
  }

  .done .timeline__note {
    border-color: #888;
  }
  .done .timeline__note .timeline__item-title {
    color: #888;
  }
  .done .timeline__note .timeline__item-time {
    color: #888;
  }
  .done .timeline__note .timeline__item-caption {
    color: #888;
  }
  
  .timeline__item.active:before {
    background-color: #51AF97;
    border-color: #51AF97;
  }
  .timeline__item.active:after {
    background-color: #fff;
  }
  .timeline__item.active .timeline__item-title {
    color: #51AF97;
    font-weight: 700;
  }
  .timeline__item.active .timeline__item-title:before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    background-color: #51AF97;
    width: 2px;
  }
  .timeline__item:last-child .timeline__item-title:before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    height: 100%;
    background-color: #E9EDF3!important;
    width: 2px;
  }
  .timeline__item.done:before {
    border-color: #51AF97;
  }
  .timeline__item.done:after {
    width: 12px;
    height: 9px;
    background: url('${settings.dir}/img/icon-check.svg') center no-repeat;
    background-size: contain;
    border-radius: 0;
    top: 7.5px;
    left: 6px;
  }
  .timeline__item.done .timeline__item-title:before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    background-color: #51AF97;
    width: 2px;
    height: 100%;
  }
  @media(min-width: 992px) {
    .timeline__item.active .timeline__item-title:before, .timeline__item:last-child .timeline__item-title:before, .timeline__item.done .timeline__item-title:before  {
      width: 2px;
      left: 11px;
    }
  }
  .timeline__item.done .timeline__item-title, .timeline__item.done .timeline__item-time {
    color: #888;
  }
  
  @media(max-width: 768px) {
    #headline-15195 > div > font > b {
      font-weight: 700!important;
      font-size: 20px!important;
      line-height: 24px!important;
    }
    .iframeblocked:not(.active) iframe {
      pointer-events: none;
    }
    #row--47405 {
      padding-bottom: 20px!important;
    }
    .timeline {
      width: 100%;
      margin: 28px 0 0;
      border: none;
      padding: 0;
      border-radius: 0;
      background: none;
      overflow: initial;
    }
    .timeline__title {
      line-height: 31px;
    }
    #row--66119 {
      position: fixed;
      z-index: 10;
      bottom: 0;
      left: 0;
      right: 0;
      background: #FFFFFF;
    }
    .elButton {
      margin-top: 0;
      font-weight: 700;
      text-shadow: none;
    }
    .timeline__item:last-child .timeline__item-title:before {
      background-color: #f7f7f7!important;
    }
    .fullContainer {
      padding-bottom: 120px!important;
    }
    .full-mode font{
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #5B5B5B!important;
    }
    .full-mode font b  {
      color: #5B5B5B!important;
    }
  }
`

const stylesEl = document.createElement("style")
stylesEl.innerHTML = styles
document.body.appendChild(stylesEl)
/*** STYLES / end ***/

/********* Custom Code **********/
init()
function init() {
  pushDataLayer("loaded")
  console.log("init")

  let timelineEl = `
    <div class='timeline'>
      <div class='timeline__title'>What you will discover in this free webinar:</div>

      <div class='timeline__list'>
        <div class='timeline__item'>
          <div class='timeline__item-title'>Intro</div>
          <div class='timeline__item-time'>(0:50)</div>
        </div>

        <div class='timeline__item'>
          <div class='timeline__item-title'>What kind of students we can help to be accepted to top universities</div>
          <div class='timeline__item-time'>(2:30)</div>
        </div>

        <div class='timeline__item'>
          <div class='timeline__item-title'>Strategies and 5 factors that сontrol сollege application process</div>
          <div class='timeline__item-time'>(9:15)</div>
        </div>

        <div class='timeline__item timeline__item-note lav-observe'>
          <div class='timeline__note'>
            <div class='timeline__item-title'>3 factors that prevent 6th - 12th graders from getting into the colleges they deserve</div>
            <div class='timeline__item-time'>(13:45) — Critical information.</div>
            <div class='timeline__item-caption'>If there is one thing you need to know, this is it.</div>
          </div>
        </div>

        <div class='timeline__item'>
          <div class='timeline__item-title'>Understanding what universities really want, their KPIs, and what they look for in future students</div>
          <div class='timeline__item-time'>(18:00)</div>
        </div>

        <div class='timeline__item'>
          <div class='timeline__item-title'>How does Zenith Prep Academy can help students</div>
          <div class='timeline__item-time'>(30:00)</div>
        </div>

        <div class='timeline__item'>
          <div class='timeline__item-title'>How to play a strong offense </div>
          <div class='timeline__item-time'>(40:49)</div>
        </div>

        <div class='timeline__item'>
          <div class='timeline__item-title'>How to get into Zenith Prep Academy</div>
          <div class='timeline__item-time'>(56:37)</div>
        </div>
      </div>
    </div>
  `

  if (window.innerWidth > 768) {
    document.querySelector(".elVideoWrapper").insertAdjacentHTML("beforeend", timelineEl)

    document.querySelector(".elVideoWrapper").insertAdjacentElement("beforebegin", document.querySelector("#headline-61284"))
  } else {
    document.querySelector(".elVideoWrapper").insertAdjacentHTML("beforebegin", timelineEl)

    document.querySelector(".elCustomJs").insertAdjacentElement("beforebegin", document.querySelector("#headline-61284"))
  }

  document.querySelector("#headline-61284").classList.add("full-mode")

  document.querySelector(".elButton").innerText = "Schedule A Free College Planning Session Now"

  document.querySelector(".elButton").addEventListener("click", function () {
    pushDataLayer("Click on Schedule button", "Under timeline")
  })

  // let cloneVideo = `
  //   <video>
  //     <source src="https://player.vimeo.com/video/767570952?muted=1&autoplay=1&&title=0&byline=0&wmode=transparent&autopause=0">
  //   </video>
  // `;
  // document.querySelector('body').insertAdjacentHTML('afterbegin', cloneVideo);
  // document.querySelector('.fluid-width-video-wrapper').insertAdjacentHTML('afterbegin', cloneVideo);

  if (window.innerWidth > 768) {
    let waitVideo = setInterval(() => {
      if (document.querySelector(".start-session")) {
        clearInterval(waitVideo)
        document.querySelector(".start-session").addEventListener("click", function (e) {
          if (!this.classList.contains("active")) {
            e.preventDefault()
            e.stopPropagation()

            this.classList.add("active")
            this.click()
            handleTimeline()
            return false
          }
        })
      }
    }, 200)

    document.querySelector(".timeline__item-note").addEventListener("mouseenter", function () {
      pushDataLayer("Hover on 3 factors block Initial state", "Timeline")
    })

    let isScrolled = false

    document.querySelector(".timeline").onscroll = function () {
      if (isScrolled) return false
      isScrolled = true
      pushDataLayer("Scroll 3 factors block Initial state", "Timeline")
    }
  } else {
    let intervalVimeo = setInterval(() => {
      if (typeof Vimeo == "object") {
        clearInterval(intervalVimeo)
        const iframe = document.querySelector(".elCustomJs iframe")
        const player = new Vimeo.Player(iframe)

        if (player.setVolume) {
          player.setVolume(1)
        }
        player.on("play", function () {
          console.log("played the video!")
          handleTimeline()
        })
      }
    }, 200)
    let isScrolled = false
    let waitVideo = setInterval(() => {
      if (document.querySelector(".elCustomJs iframe")) {
        clearInterval(waitVideo)
        document.querySelector(".elCustomJs iframe").scrollIntoView({ block: "start", behavior: "smooth" })

        setTimeout(() => {
          window.onscroll = function () {
            if (isScrolled) return false
            isScrolled = true
            pushDataLayer("Scroll on 3 factors block Initial state", "Timeline")
          }
        }, 1500)
      }
    }, 200)
  }

  document.querySelector(".timeline__item-note").addEventListener("click", function () {
    pushDataLayer("Click on 3 factors block Initial state", "Timeline")
  })

  initObserver()
}

function initObserver() {
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -25% 0px",
  }

  let isNormal,
    isActive,
    isDone = false

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        console.log(entry.target)
        if (entry.target.classList.contains("timeline__item-note") && entry.target.classList.contains("active") && !isActive) {
          isActive = true
          pushDataLayer("Visibility 3 factors block Initial state. Active", "Timeline")
        } else if (entry.target.classList.contains("timeline__item-note") && entry.target.classList.contains("done") && !isDone) {
          isDone = true
          pushDataLayer("Visibility 3 factors block Initial state. Not Active", "Timeline")
        } else if (entry.target.classList.contains("timeline__item-note") && !isNormal) {
          isNormal = true
          pushDataLayer("Visibility 3 factors block Initial state", "Timeline")
        }

        // entry.target.classList.add('in-view');
        // observer.unobserve(entry.target);
      }
    })
  }, observerOptions)

  for (let section of Array.from(document.querySelectorAll(".lav-observe"))) {
    observer.observe(section)
  }
}

function handleTimeline() {
  if (!document.querySelector(".timeline__item.active")) {
    document.querySelector(".timeline__item").classList.add("active")
  }

  let iframe = document.querySelector(".fluid-width-video-wrapper iframe")
  if (window.innerWidth < 768) {
    iframe = document.querySelector(".elCustomJs iframe")
  }

  let playerEl = new Vimeo.Player(iframe)

  let isActive,
    isDone = false

  setInterval(() => {
    playerEl.getCurrentTime().then(function (time) {
      if (!document.querySelector(".timeline__item.active")) return false

      if (time >= 50 && time < 2 * 60 + 30) {
      } else if (time >= 2 * 60 + 30 && time < 9 * 60 + 15) {
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(2)").classList.add("active")
      } else if (time >= 9 * 60 + 15 && time < 13 * 60 + 45) {
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(3)").classList.add("active")
      } else if (time >= 13 * 60 + 45 && time < 18 * 60) {
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(4)").classList.add("active")
        if (window.innerWidth > 768 && !isActive) {
          isActive = true
          pushDataLayer("Visibility 3 factors block Initial state. Active", "Timeline")
        }
      } else if (time >= 18 * 60 && time < 30 * 60) {
        if (window.innerWidth > 768 && !isDone) {
          isDone = true
          pushDataLayer("Visibility 3 factors block Initial state. Not Active", "Timeline")
        }
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(5)").classList.add("active")
      } else if (time >= 30 * 60 && time < 40 * 60 + 49) {
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(6)").classList.add("active")
      } else if (time >= 40 * 60 + 49 && time < 56 * 60 + 37) {
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(7)").classList.add("active")
      } else if (time > 56 * 60 + 37 && time < 3495) {
        document.querySelector(".timeline__item.active").classList.remove("active")
        document.querySelector(".timeline__item:nth-child(8)").classList.add("active")
      } else if (time >= 3495) {
        document.querySelector(".timeline__item:nth-child(8)").classList.add("done")
        document.querySelector(".timeline__item.active").classList.remove("active")
      }
      clearOtherTimelines()
    })
  }, 2000)
}

function clearOtherTimelines() {
  if (document.querySelector(".timeline__item.active")) {
    document.querySelector(".timeline__item.active").classList.remove("done")

    let nextEl = document.querySelector(".timeline__item.active").nextElementSibling

    let prevEl = document.querySelector(".timeline__item.active").previousElementSibling

    while (nextEl) {
      nextEl.classList.remove("done", "active")
      nextEl = nextEl.nextElementSibling
    }

    while (prevEl) {
      prevEl.classList.remove("active")
      prevEl.classList.add("done")
      prevEl = prevEl.previousElementSibling
    }
  }
}
