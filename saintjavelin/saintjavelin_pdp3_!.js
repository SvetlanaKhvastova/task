let startFunk = setInterval(() => {
    if (document.body && document.querySelector(".product-single__meta") != null) {
        clearInterval(startFunk)

        /* other variables  */
        const imgFolderUrl = "https://conversionratestore.github.io/projects/saintjavelin/img/"

        let eventVar = "desktop"

        if (window.innerWidth <= 768) {
            eventVar = "mobile"
        }

        function pushDataLayer(actionDataLayer, labelDataLayer) {
            window.dataLayer = window.dataLayer || []
            if (labelDataLayer) {
                console.log(actionDataLayer + " : " + labelDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp — New design pdp' ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp — New design pdp' ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let style = /*html */ ``


        fetch("https://conversionrate.top/api/saint-javelin/total-donorbox", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                // add on page
                // document.body.insertAdjacentHTML("afterbegin", style)
                // document.body.insertAdjacentHTML("afterbegin", progressBarHTML)

                let donated = +data[0]["total_raised"],
                    sum = +data[0]["goal_amt"],
                    rangeDonated = (donated * 100) / sum,
                    wand = (rangeDonated * 90) / 100,
                    indexWand = donated < 15000 ? 0 : Math.floor(wand)

                let step = ``

                for (let i = 0; i < 91; i++) {
                    step += `<div class="step ${i <= indexWand ? "active" : ""} ${i % 9 ? "step-small" : "step-big"}"></div>`
                }

                document.querySelectorAll(".steps").forEach((el) => {
                    el.innerHTML = step
                })
                document.querySelectorAll(".range-donated").forEach((el) => {
                    el.style = `width: ${donated <= 10000 ? 0 : donated < 15000 ? 0.5 : rangeDonated}%`
                    if (el.style.width >= "80%") {
                        console.log(el.style.width)
                        if (document.querySelector(".container_popup")) {
                            document.querySelector(".container_popup").classList.add("is_full")
                            document.querySelector(".donation_inform").classList.add("is_full")
                        }
                    }
                })
                document.querySelectorAll(".sum").forEach((el) => {
                    el.innerHTML = "$" + new Intl.NumberFormat("ru-RU").format(sum.toFixed(0))
                })

                let stepActive = document.querySelectorAll(".step.active")
                let totalDonate = document.querySelectorAll(".total-raised")
                if (donated > (sum * 88) / 100) {
                    stepActive[79].setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
                    totalDonate.forEach((el) => {
                        el.setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
                    })
                } else {
                    stepActive[indexWand].setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
                    totalDonate.forEach((el) => {
                        el.setAttribute("data-price", "$" + new Intl.NumberFormat("ru-RU").format(donated))
                    })
                }
                if (donated >= sum) {
                    document.querySelectorAll(".range-wrapper").forEach((el) => {
                        el.classList.add("active")
                    })
                }
            })
            .catch((error) => {
                console.error("Error:", error)
            })

        pushDataLayer("loaded")
        clarity("set", "new_design_pdp", "variant_1")
    }
}, 100)
