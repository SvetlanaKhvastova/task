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
  method: [
    {
      title: "Method of delivery",
      paragraph:
        "For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter.",
    },
  ],
  delay: [
    { paragraph1: "For <strong>Belgium</strong> and <strong>Luxembourg</strong> :", paragraph2: "<strong>1 to 3</strong> working days" },
    { paragraph1: "For <strong>France, Germany</strong> and <strong>the Netherlands :</strong>", paragraph2: "<strong>2 to 4</strong> working days" },
    { paragraph1: "For all <strong>other countries in Europe :</strong>", paragraph2: "<strong>2 to 5</strong> working days" },
  ],
}
