import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData, hjInterval } from '../../libraries'
import { paywallInfoBlock, wellDoneSection } from './blocks'
import { content, svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class Personalization {
  device: 'mobile' | 'desktop'
  goal: string | null
  gender: string | null
  relationshipStatus: string | null
  astrologicalSign: string | null
  resonatedElement: string | null
  favoriteColor: string | null
  ageGroups: '18-35' | '36-55' | '56+' | 'unknown' | null

  constructor(device) {
    this.device = device
    this.goal = null
    this.gender = null
    this.relationshipStatus = null
    this.astrologicalSign = null
    this.resonatedElement = null
    this.favoriteColor = null
    this.favoriteColor = null
    this.ageGroups = null

    this.init()
  }

  init() {
    startLog({ name: 'Personalization (Paywall/Separate Page)', dev: 'SKh' })
    this.observeMain()

    if (!$el('.crs_inter')) {
      document.head.insertAdjacentHTML(
        'afterbegin',
        `<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`
      )
    }

    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    if (this.checkPage() === 'paywall') {
      console.log(`paywall`)
      $el('#wellDoneSection')?.remove()
      $el('body').classList.add('paywall_page')
      if ($el('body').classList.contains('subscription_plan_page')) {
        $el('body').classList.remove('subscription_plan_page')
      }
      this.renderPaywallInfoBlockHandler()
    } else if (this.checkPage() === 'subscriptionPlan') {
      console.log(`subscriptionPlan`)
      $el('body').classList.add('subscription_plan_page')
      if ($el('body').classList.contains('paywall_page')) {
        $el('body').classList.remove('paywall_page')
      }
      this.renderWellDoneSection()
    } else {
      console.log(this.checkPage())
      $el('#wellDoneSection')?.remove()
      if ($el('body').classList.contains('paywall_page')) {
        $el('body').classList.remove('paywall_page')
      }
      if ($el('body').classList.contains('subscription_plan_page')) {
        $el('body').classList.remove('subscription_plan_page')
      }
    }
  }

  // paywall
  // __________________________________________________________________________________________
  renderPaywallInfoBlockHandler() {
    const data = this.getParsedHintState()
    if (data.birthday === null) return
    const year: number = data.birthday.year
    const goalHandler = this.getGoalHandler()
    const relationshipStatusHandler = this.getRelationshipStatusHandler()
    const age = this.calculateAge(year)

    if (goalHandler && relationshipStatusHandler && relationshipStatusHandler) {
      for (const key in content) {
        if (content.hasOwnProperty(key) && goalHandler.match(key)) {
          const s = content[key]
          s.forEach(i => {
            if (relationshipStatusHandler.includes(i.relationshipStatus)) {
              const ageGroup = i.ageGroups[age]
              if (ageGroup) {
                waitForElement('.trusted_wrapper__Qlbcw').then((element: HTMLElement) => {
                  if (!$el('.paywall_info_block')) {
                    element.insertAdjacentHTML(
                      'afterend',
                      paywallInfoBlock(ageGroup.title, ageGroup.txt, ageGroup.img, ageGroup.name, ageGroup.descr)
                    )
                  }
                })
              }
            }
          })
        }
      }
    }
  }
  // subscription-plan
  // __________________________________________________________________________________________
  renderWellDoneSection() {
    const data = this.getParsedHintState()
    if (!data.emailUser) return

    const email: string = data.emailUser
    const emailTxtFirtsLetter = email.charAt(0).toUpperCase()
    const { day, month, year } = data.birthday
    const goalHandler = this.getGoalHandler()
    let relationshipStatusHandler = this.getRelationshipStatusHandler() || 'unknown'
    const gender = this.gender?.includes('female') ? 'female' : 'male'
    const zodiacSign = this.getZodiacSign(day, month, year)
    const resonatedElementHandler = this.getResonatedElementHandler()
    const genderHandler = this.getGenderHandler()
    const favoriteColorHandler = this.getFavoriteColorHandler()

    if (
      !goalHandler ||
      !relationshipStatusHandler ||
      !resonatedElementHandler ||
      !genderHandler ||
      !favoriteColorHandler
    )
      return

    if (goalHandler.includes('Love & Relationship')) {
      relationshipStatusHandler = 'unknown'
    }
    for (const key in content) {
      if (content.hasOwnProperty(key) && goalHandler.includes(key)) {
        const s = content[key]
        s.forEach(i => {
          console.log(i, relationshipStatusHandler, i.relationshipStatus)
          if (relationshipStatusHandler.includes(i.relationshipStatus)) {
            console.log(`>>>>>>`)
            const genderGroup = i.genderGroups[gender]
            const { imgBefore, imgAfter } = genderGroup

            waitForElement('main').then((element: HTMLElement) => {
              if (!$el('.wellDoneSection')) {
                element.insertAdjacentHTML(
                  'afterend',
                  wellDoneSection(
                    emailTxtFirtsLetter,
                    email,
                    imgBefore,
                    imgAfter,
                    goalHandler,
                    relationshipStatusHandler,
                    resonatedElementHandler,
                    genderHandler,
                    zodiacSign,
                    favoriteColorHandler
                  )
                )
              }
            })

            console.log(genderGroup, `genderGroup`)
          }
        })
      }
    }
  }

  // main
  // __________________________________________________________________________________________
  checkPage(): string {
    const url = window.location.href
    switch (true) {
      case url.includes('paywall'):
        return 'paywall'
      case url.includes('subscription-plan'):
        return 'subscriptionPlan'
      case url.includes('email'):
        return 'email'
      default:
        if ($el('body').classList.contains('paywall_page')) {
          $el('body').classList.remove('paywall_page')
        }
        return 'other'
    }
  }
  observeMain() {
    let observer = new MutationObserver(mutations => {
      for (let mutation of mutations) {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          if (node.tagName === 'MAIN') {
            console.log(node)
            if (this.checkPage() === 'paywall') {
              console.log(`paywall`)
              $el('#wellDoneSection')?.remove()
              $el('body').classList.add('paywall_page')
              if ($el('body').classList.contains('subscription_plan_page')) {
                $el('body').classList.remove('subscription_plan_page')
              }
              this.renderPaywallInfoBlockHandler()
            } else if (this.checkPage() === 'subscriptionPlan') {
              console.log(`subscriptionPlan`)
              $el('body').classList.add('subscription_plan_page')
              if ($el('body').classList.contains('paywall_page')) {
                $el('body').classList.remove('paywall_page')
              }
              this.renderWellDoneSection()
            } else {
              console.log(this.checkPage())
              $el('#wellDoneSection')?.remove()
              if ($el('body').classList.contains('paywall_page')) {
                $el('body').classList.remove('paywall_page')
              }
              if ($el('body').classList.contains('subscription_plan_page')) {
                $el('body').classList.remove('subscription_plan_page')
              }
            }
          }
        }
      }
    })

    observer.observe($el('body'), { childList: true, subtree: true })
  }

  getParsedHintState(): any | null {
    const hintState = localStorage.getItem('hint-state')
    if (hintState) {
      try {
        const data = JSON.parse(hintState)
        return data.state
      } catch (error) {
        console.error('Error parsing hint-state from localStorage', error)
        return null
      }
    }
    return null
  }
  getGoalHandler() {
    const data = this.getParsedHintState()
    switch (data.wish) {
      case '1':
        this.goal = `${svg.loveRelationshipIcon} Love & Relationship`
        break
      case '2':
        this.goal = `${svg.healthVitalityIcon} Health & Vitality`
        break
      case '3':
        this.goal = `${svg.careerDestinyIcon} Career & Destiny`
        break

      default:
        break
    }

    return this.goal
  }
  getRelationshipStatusHandler() {
    const data = this.getParsedHintState()
    switch (data.relationship) {
      case '1':
        const data = this.getParsedHintState()
        if (data.gender === '1') {
          this.relationshipStatus = `${svg.singleMaleIcon} Single`
        } else {
          this.relationshipStatus = `${svg.singleFemaleIcon} Single`
        }
        break
      case '2':
        this.relationshipStatus = `${svg.inRelationshipIcon} In relationship`
        break
      case null:
        this.relationshipStatus = 'unknown'
        break

      default:
        break
    }

    return this.relationshipStatus
  }
  getGenderHandler() {
    const data = this.getParsedHintState()
    switch (data.gender) {
      case '1':
        this.gender = `${svg.maleIcon} Male`
        break
      case '2':
        this.gender = `${svg.femaleIcon} Female`
        break

      default:
        break
    }

    return this.gender
  }
  getResonatedElementHandler() {
    const data = this.getParsedHintState()
    switch (data.resonatedElement) {
      case 'air':
        this.resonatedElement = `${svg.airIcon} Air`
        break
      case 'earth':
        this.resonatedElement = `${svg.earthIcon} Earth`
        break
      case 'fire':
        this.resonatedElement = `${svg.fireIcon} Fire`
        break
      case 'water':
        this.resonatedElement = `${svg.waterIcon} Water`
        break

      default:
        break
    }

    return this.resonatedElement
  }
  getFavoriteColorHandler() {
    const data = this.getParsedHintState()
    switch (data.colorYouLike) {
      case 'blue':
        this.favoriteColor = `${svg.blueIcon} Blue`
        break
      case 'green':
        this.favoriteColor = `${svg.greenIcon} Green`
        break
      case 'orange':
        this.favoriteColor = `${svg.orangeIcon} Orange`
        break
      case 'red':
        this.favoriteColor = `${svg.redIcon} Red`
        break
      case 'violet':
        this.favoriteColor = `${svg.violetIcon} Violet`
        break
      case 'yellow':
        this.favoriteColor = `${svg.yellowIcon} Yellow`
        break

      default:
        break
    }

    return this.favoriteColor
  }

  calculateAge(birthYear: number): string {
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear

    if (age <= 35) {
      return '18-35'
    } else if (age >= 36 && age <= 55) {
      return '36-55'
    } else if (age >= 56) {
      return '56+'
    } else {
      return 'unknown'
    }
  }
  getZodiacSign(day: number, month: number, year: number): string {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
      this.astrologicalSign = `${svg.aquariusIcon} Aquarius`
      return this.astrologicalSign
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      this.astrologicalSign = `${svg.piscesIcon} Pisces`
      return this.astrologicalSign
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
      this.astrologicalSign = `${svg.ariesIcon} Aries`
      return this.astrologicalSign
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
      this.astrologicalSign = `${svg.taurusIcon} Taurus`
      return this.astrologicalSign
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      this.astrologicalSign = `${svg.geminiIcon} Gemini`
      return this.astrologicalSign
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      this.astrologicalSign = `${svg.cancerIcon} Cancer`
      return this.astrologicalSign
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      this.astrologicalSign = `${svg.leoIcon} Leo`
      return this.astrologicalSign
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      this.astrologicalSign = `${svg.virgoIcon} Virgo`
      return this.astrologicalSign
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      this.astrologicalSign = `${svg.libraIcon} Libra`
      return this.astrologicalSign
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      this.astrologicalSign = `${svg.scorpioIcon} Scorpio`
      return this.astrologicalSign
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
      this.astrologicalSign = `${svg.sagittariusIcon} Sagittarius`
      return this.astrologicalSign
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
      this.astrologicalSign = `${svg.capricornIcon} Capricorn`
      return this.astrologicalSign
    } else {
      return 'Invalid date'
    }
  }
}

new Personalization(device)
