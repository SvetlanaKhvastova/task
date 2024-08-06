declare global {
  interface Window {
    dataLayer: any[]
    Shopify: any
    clarity: any
  }
}

type eventType = 'click' | 'view' | 'submit' | 'input' | 'change' | 'error' | 'success' | 'other'

export const pushData = (name: string, desc: string, type: eventType, loc: string = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} | ${desc} | ${type} | ${loc}`)
}

interface StartLog {
  name: string
  dev: string
}

export const waitEl = (selector: string, callback: () => void) => {
  const interval = setInterval(() => {
    const element = document.querySelector(selector)
    if (element) {
      clearInterval(interval)
      callback()
    }
  }, 100)
}

export const startLog = ({ name, dev }: StartLog) => {
  console.log(
    `%c EXP: ${name} (DEV: ${dev})`,
    `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`
  )
}
type Handler = (event: Event) => void
type EachCallback = (element: HTMLElement, index: number) => void

class NativeQuery {
  elements: NodeListOf<Element> | Element[]
  constructor(element: string | HTMLElement | NodeListOf<Element> | Element[]) {
    this.elements =
      typeof element === 'string'
        ? document.querySelectorAll(element)
        : element instanceof Element
        ? [element]
        : element
  }

  on(events: string, delegateSelector: string | Handler, handler?: Handler) {
    if (typeof delegateSelector === 'function') {
      handler = delegateSelector
      delegateSelector = ''
    }
    this.elements.forEach(function (element: Element) {
      element.addEventListener(events, function (event: Event) {
        if (delegateSelector) {
          let targetElement = (event.target as Element)?.closest(delegateSelector as string)
          if (element.contains(targetElement)) {
            handler?.call(targetElement, event)
          }
        } else {
          handler?.call(element, event)
        }
      })
    })
    return this
  }

  addClass(className: string) {
    this.elements.forEach(function (element: Element) {
      element.classList.add(className)
    })
    return this
  }

  removeClass(className: string) {
    this.elements.forEach(function (element: Element) {
      element.classList.remove(className)
    })
    return this
  }

  toggleClass(className: string) {
    this.elements.forEach(function (element: Element) {
      element.classList.toggle(className)
    })
    return this
  }

  each(callback: EachCallback) {
    this.elements.forEach((element: Element, index: number) => {
      callback(element as HTMLElement, index)
    })
    return this
  }

  style(key: string, value: string) {
    const jsKey = key
      .split('-')
      .map((item, index) => {
        return index === 0 ? item : item.charAt(0).toUpperCase() + item.slice(1)
      })
      .join('')
    this.elements.forEach(function (element: Element) {
      ;(element as HTMLElement).style[jsKey] = value
    })
    return this
  }
}

export const $el = (selector: string | HTMLElement | NodeListOf<Element> | Element[]) => {
  return new NativeQuery(selector)
}

// load list of scripts
export const loadScriptsOrStyles = async (urls: string[]) => {
  const loadScriptOrStyle = (url: string) => {
    return new Promise((resolve, reject) => {
      // check script by document.scripts
      const type = url.split('.').pop()
      if (type === 'js') {
        const loadedScripts = Array.from(document.scripts).map(script => script.src.toLowerCase())
        if (loadedScripts.includes(url.toLowerCase())) {
          console.log(`Script ${url} allready downloaded!`)
          return resolve('')
        }
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      } else if (type === 'css') {
        const loadedStyles = Array.from(document.styleSheets).map(style => style.href?.toLowerCase())
        if (loadedStyles.includes(url.toLowerCase())) {
          console.log(`Style ${url} allready downloaded!`)
          return resolve('')
        }
        const style = document.createElement('link')
        style.rel = 'stylesheet'
        style.href = url
        style.onload = resolve
        style.onerror = reject
        document.head.appendChild(style)
      }
    })
  }

  for (const url of urls) {
    console.log(url)
    await loadScriptOrStyle(url)
    console.log(`Loaded librari ${url}`)
  }
  console.log('All libraries loaded!')
}

// clarity
export const clarityInterval = name => {
  let int = setInterval(function () {
    if (typeof window.clarity == 'function') {
      clearInterval(int)
      window.clarity('set', name, 'variant_1')
    }
  }, 1000)
}

// visibility element

export const visibilityOfTime = (
  selector: string | HTMLElement | Element,
  eventName: string,
  visiblePlace: string,
  description?: string,
  time = 1000,
  threshold = 0.5
) => {
  let observer: IntersectionObserver
  let timer: NodeJS.Timeout

  observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        timer = setTimeout(() => {
          pushData(
            eventName,
            (entries[0].target as HTMLElement).dataset.visible || description || '',
            'view',
            visiblePlace
          )
          observer.disconnect()
        }, time)
      } else {
        console.log('Element is not fully visible')
        clearTimeout(timer) // Clear the timer if the element is not visible
      }
    },
    { threshold: [threshold] }
  )

  if (typeof selector === 'string') {
    const element = document.querySelector(selector)

    if (element) {
      observer.observe(element)
    }
  } else {
    observer.observe(selector)
  }
}

// smooth scroll to element

export const scrollToElement = (selector: string) => {
  const element = document.querySelector(selector)
  if (!element) return
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition - 100
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

export const checkScrollSpeed = (selector, callback) => {
  const block = selector === window ? window : document.querySelector(selector)
  let lastPos, newPos, timer, delta, direction
  function clear() {
    lastPos = null
    delta = 0
  }
  clear()
  block.addEventListener('scroll', function () {
    newPos = selector === window ? this.scrollY : this.scrollTop
    direction = newPos > lastPos ? 'down' : 'up'
    if (lastPos != null) {
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, 50)
    callback(Math.abs(delta), direction)
  })
}

// evetnts on dynamic elements
