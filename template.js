/** Variables */
/* document shortcuts */
const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const getId = document.getElementById.bind(document)

/* other variables  */
const intervalTimeout = 200

const imgFolderUrl = 'https://conversionratestore.github.io/projects/carid/img/'
const style = /*html*/`
    <style>
    </style>
`

/** Functions */
const runObserver = () => { // Mutation Observer
    const target = document.body
    const config = {
        childList: true,
        subtree: true,
    }

    let observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue

                // TODO: uncomment this line if we need to handle the mutation
                // if (node.matches('.')) { 
                    // console.log(node);
                // }
            }
        }
    })

    observer.observe(target, config)
}

const sliderInit = () => { // Tiny Slider
    const scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)

    const scriptCustom = document.createElement("script")
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    const sliderInterval = setInterval(() => {
        if (typeof tns === 'function' && queryAll('.slide')[5]) {
            clearInterval(sliderInterval)

            const slider = tns({
                container: '.slider',
                items: 1,
                center: true,
                speed: 600,
                mouseDrag: true,
                swipeAngle: 30,
                controls: false,
                nav: true,
                navPosition: 'bottom',
                loop: false,
                autoplay: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                autoHeight: true
            })

            // add dataLayer events
            slider.events.on('touchEnd', () => {
                callEvent('Swipe', 'Swipe')
            })

            const waitForBullets = setInterval(() => {
                if (query('.tns-nav')) {
                    clearInterval(waitForBullets)

                    query('.tns-nav').addEventListener('click', (e) => {
                        if (e.target.closest('.tns-nav button')) {
                            callEvent('Swipe Slider', 'Click on the dot')
                        }
                    })
                }
            }, intervalTimeout);
        }
    }, intervalTimeout)
}

const callEvent = (eventAction, eventLabel = '') => { // GO Event
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: ',
        eventAction,
        eventLabel
    })
}

/* HTML elements */
const el = /*html*/``

/** Parse HTML, CSS and run functions. */
document.head.insertAdjacentHTML('beforeend', style)

const waitForDOM = setInterval(() => {
    if (
        (document.readyState == 'interactive' || document.readyState == 'complete')
        // && document.querySelector('.e159ls2j0')
    ) {
        clearInterval(waitForDOM)

        console.log('DOM is loaded');
        // document.querySelector('.e159ls2j0').insertAdjacentHTML('afterend', el)
    }
}, intervalTimeout)

callEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', '', 'variant_1')
    }
}, intervalTimeout)