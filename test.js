fetch("https://ipinfo.io/json?token=625d68b69a156c")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse)
    if (jsonResponse.postal) {
      console.log(jsonResponse)
    }
  })

//
getNewUser("_ga")

function getNewUser(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  let valueCookie
  let timeNewUser
  if (parts.length === 2 && !localStorage.getItem("newUser")) {
    valueCookie = parts.pop().split(";").shift()
    timeNewUser = +(valueCookie.split(".").pop() + "000")
    if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
      console.log(`New User`)
    } else {
      console.log(new Date(timeNewUser))
    }
  }
}

//
let a = {
  na_text: [
    {
      paragraph1_html: "For USA and Canada:",
      paragraph2_html: "3 to 5 working days",
      img: ["us", "ca"],
    },
  ],
  oc_text: [
    {
      paragraph1_html: "For Australia and New Zealand:",
      paragraph2_html: "5 to 7 working days",
      img: ["au", "nz"],
    },
  ],
  europe_text: [
    {
      paragraph1_html: "For <strong>Belgium</strong> and <strong>Luxembourg</strong> :",
      paragraph2_html: "<strong>1 to 3</strong> working days",
      img: ["be", "lx", "en"],
    },
    {
      paragraph1_html: "For <strong>France, Germany</strong> and <strong>the Netherlands :</strong>",
      paragraph2_html: "<strong>2 to 4</strong> working days",
      img: ["fr", "de", "nl"],
    },
    {
      paragraph1_html: "For all <strong>other countries in Europe :</strong>",
      paragraph2_html: "<strong>2 to 5</strong> working days",
      img: ["eu", "ch", "no"],
    },
  ],
}

let s = {
  team: [
    {
      first_name: "Eric",
      last_name: "Delloye",
      title: "general_manager",
      img: "eric_delloye_lucimed",
    },
    {
      first_name: "Louis",
      last_name: "Grauls",
      title: "marketing_manager",
      img: "louis_grauls_lucimed",
    },
    {
      first_name: "Laurence",
      last_name: "Andre",
      title: "sales_manager",
      img: "laurence_andre_lucimed",
    },
    {
      first_name: "Justine",
      last_name: "Wasterlain",
      title: "support",
      img: "justine_retamar_lucimed",
    },
  ],
  inventors: [
    {
      first_name: "Robert",
      last_name: "Poirrier",
      img: "robert_poirrier.png",
    },
    {
      first_name: "Yvon",
      last_name: "Renotte",
      img: "yvon_renotte.jpg",
    },
    {
      first_name: "Vincent",
      last_name: "Moreau",
      img: "vincent_moreau.png",
    },
    {
      first_name: "Gilles",
      last_name: "Vandewalle",
      img: "gilles_vandewalle.jpg",
    },
    {
      first_name: "Daniel",
      last_name: "Neu",
      img: "daniel_neu.jpg",
    },
  ],
}

let d = {
  form: {
    title: "Find a distributor",
    subjects: [
      { name: "Germany", value: "DE" },
      { name: "Australia", value: "AU" },
      { name: "Austria", value: "AT" },
      { name: "Belgium", value: "BE" },
      { name: "China", value: "CN" },
      { name: "Denmark", value: "DK" },
      { name: "Estonia", value: "EE" },
      { name: "France", value: "FR" },
      { name: "Latvia", value: "LV" },
      { name: "Luxembourg", value: "LU" },
      { name: "Norway", value: "NO" },
      { name: "Netherlands", value: "NL" },
      { name: "Czech", value: "CZ" },
      { name: "Unitedkindgom", value: "GB" },
      { name: "Switzerland", value: "CH" },
      { name: "Sweden", value: "SE" },
      { name: "Argentina", value: "AR" },
      { name: "Japan", value: "JP" },
      { name: "Ukraine", value: "UA" },
      { name: "Finland", value: "FI" },
      { name: "Poland", value: "PL" },
      { name: "Russia", value: "RU" },
      { name: "Lithuania", value: "LT" },
      { name: "Southkorea", value: "KR" },
      { name: "Ireland", value: "IE" },
      { name: "Turkey", value: "TR" },
      { name: "Colombia", value: "CO" },
    ],
  },
}
