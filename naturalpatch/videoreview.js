let scriptCustom = document.createElement("script")
scriptCustom.src = "https://www.videoask.com/embed/embed.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

let widget = null
let modal = null

window.addEventListener("load", () => {
  console.log(`>>>>>>>>>>>>>>>>>>>>`)
  const config = {
    kind: "widget",
    url: "https://www.videoask.com/fn5pz0q1v",
    options: {
      widgetType: "VideoThumbnailExtraLarge",
      text: "",
      backgroundColor: "#7D00FE",
      position: "bottom-right",
      dismissable: false,
    },
  }

  const callbacks = {
    onMessage: ({ element }) => {
      modal = element
    },
  }

  window.videoask.loadEmbed(config, callbacks).then((element) => {
    widget = element
  })

  const isVideoaskMessage = (message) => message.origin === "https://www.videoask.com" && message.data && message.data.type && message.data.type.startsWith("videoask_")

  window.addEventListener("message", (message) => {
    if (!isVideoaskMessage(message)) {
      return
    }

    console.log("got videoask message", message.data)
  })
})
