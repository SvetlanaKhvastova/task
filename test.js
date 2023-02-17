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
  "method": {
    "title": "Method of delivery",
    "descr": {
      "europe": ["For any orders from the UK, the parcels are shipped from Amazon's warehouses located in the UK with Amazon's selected carrier. Before delivering your order, the carrier will send you a SMS or Email, informing you of the day it will be delivered. You have the option of delaying delivery for up to 3 days. If you do not reply, the delivery date will be that proposed by the transporter."],
      "naus": ["Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage."],
      "naca": ["We work most often with Fulfilled-by-Amazon (FBA) logistics which has warehouses in Canada. We usually use the carrier Purolator to send the parcels. Before they deliver your package, the carrier sends you a email warning you of the day of its passage."],
      "oc": ["We usually work with the Belgian national postal service or with the Deutsche Post. Before delivering your order, the carrier will send you an email with a tracking link."],
      "other": ["Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage."]
    }
  },
  "times": {
    "delay": {
      "na": ["For USA and Canada:", "3 to 5 working days"],
      "oc": ["For Australia and New Zealand:", "5 to 7 working days"],
      "europe": {
        "line1": ["For <strong>Belgium</strong> and <strong>Luxembourg</strong> :", "<strong>1 to 3</strong> working days"],
        "line2": ["For <strong>France, Germany</strong> and <strong>the Netherlands :</strong>", "<strong>2 to 4</strong> working days"],
        "line3": ["For all <strong>other countries in Europe :</strong>", "<strong>2 to 5</strong> working days"]
      }
    },
    "countries": {
      "na": ["us", "ca"],
      "oc": ["au", "nz"],
      "europe": {
        "line1": ["fr", "de", "nl"],
        "line2": ["be", "lx", "en"],
        "line3": ["eu", "ch", "no"]
      }
    }
  }
}