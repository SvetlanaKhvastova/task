class BannerCounter {
  constructor(url, startdDate, endtDate) {
    this.url = url;
    this.startdDate = startdDate;
    this.endtDate = endtDate;
    this.bannerShown = false;
    this.targetTime = null;
    this.timezone = this.detectTimezone();
    this.bannerElement = document.getElementById("bDAYBanner");

    this.init();
  }

  detectTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  init() {
    // 'AEDT'
    if (this.url.includes("/simsdirect") || this.url.includes("/simify")) {
      this.setTargetTime(this.startdDate, this.endtDate);
    }

    this.startCountdown();
  }

  setTargetTime(start, end) {
    this.targetTime = {
      start: new Date(start),
      end: new Date(end),
    };
  }

  startCountdown() {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= this.targetTime.start && currentTime <= this.targetTime.end) {
        if (!this.bannerShown) {
          this.showBanner();
        }
        this.updateCountdown(currentTime);
      } else {
        this.hideBanner();
        clearInterval(intervalId);
        if (currentTime > this.targetTime.end) {
          this.updateCountdownZero();
        }
      }
    }, 1000);
  }

  showBanner() {
    this.bannerElement.style.display = "flex";
    this.bannerShown = true;
  }

  hideBanner() {
    this.bannerElement.style.display = "none";
    this.bannerShown = false;
  }

  updateCountdown(currentTime) {
    const timeLeft = this.targetTime.end - currentTime;
    const days = Math.max(Math.floor(timeLeft / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
    const minutes = String(Math.max(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)), 0));
    const seconds = String(Math.max(Math.floor((timeLeft % (1000 * 60)) / 1000), 0)).padStart(2, "0");

    this.bannerElement.querySelector(".days_txt").textContent = `${days}D`;
    this.bannerElement.querySelector(".hours_txt").textContent = `${hours}H`;
    this.bannerElement.querySelector(".minutes_txt").textContent = `${minutes}M`;
    this.bannerElement.querySelector(".seconds_txt").textContent = `${seconds}S`;
  }

  updateCountdownZero() {
    this.bannerElement.querySelector(".days_txt").textContent = `0D`;
    this.bannerElement.querySelector(".hours_txt").textContent = `0H`;
    this.bannerElement.querySelector(".minutes_txt").textContent = `0M`;
    this.bannerElement.querySelector(".seconds_txt").textContent = `0S`;
  }
}

// Создаем экземпляр класса и передаем в конструктор URL текущей страницы
waitForElement("#bDAYBanner").then((el) => {
  const bannerCounter = new BannerCounter(window.location.href, "2024-02-19T00:00:00+11:00", "2024-02-23T23:59:59+11:00");
});
