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
