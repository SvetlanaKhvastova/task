class BannerCounter {
  constructor(url) {
    this.url = url
    this.bannerShown = false
    this.targetTime = null
    this.timezone = this.detectTimezone()
    this.bannerElement = document.getElementById('bDAYBanner')

    this.init()
  }

  detectTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  init() {
    //   && this.timezone === 'AEDT'
    if (this.url.includes('/simsdirect')) {
      this.setTargetTime('2024-02-11T00:00:00+11:00', '2024-02-13T23:59:59+11:00')
    } else if (this.url.includes('/simify')) {
      //    && this.timezone === 'PST'
      this.setTargetTime('2024-02-11T00:00:00-08:00', '2024-02-13T23:59:59-08:00')
    }

    this.startCountdown()
  }

  setTargetTime(start, end) {
    this.targetTime = {
      start: new Date(start),
      end: new Date(end)
    }
  }

  startCountdown() {
    const intervalId = setInterval(() => {
      const currentTime = new Date()
      if (currentTime >= this.targetTime.start && currentTime <= this.targetTime.end) {
        if (!this.bannerShown) {
          this.showBanner()
        }
        this.updateCountdown(currentTime)
      } else {
        this.hideBanner()
        clearInterval(intervalId)
        if (currentTime > this.targetTime.end) {
          this.updateCountdownZero()
        }
      }
    }, 1000)
  }

  showBanner() {
    this.bannerElement.style.display = 'flex'
    this.bannerShown = true
  }

  hideBanner() {
    this.bannerElement.style.display = 'none'
    this.bannerShown = false
  }

  updateCountdown(currentTime) {
    const timeLeft = this.targetTime.end - currentTime
    const days = Math.max(Math.floor(timeLeft / (1000 * 60 * 60 * 24)), 0)
    const hours = Math.max(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0)
    const minutes = Math.max(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), 0)
    const seconds = Math.max(Math.floor((timeLeft % (1000 * 60)) / 1000), 0)

    this.bannerElement.innerHTML = `<p><b>🎂 BDAY SALE 25% OFF ⏰</b> <span>${days}D ${hours}H ${minutes}M ${seconds}S</span> LEFT</p>`
  }

  updateCountdownZero() {
    this.bannerElement.innerHTML = `🎂 BDAY SALE 25% OFF ⏰ <span>0D 0H 0M 0S</span> LEFT`
  }
}

// Создаем экземпляр класса и передаем в конструктор URL текущей страницы
const bannerCounter = new BannerCounter(window.location.href)
