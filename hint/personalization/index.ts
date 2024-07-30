import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData, hjInterval } from '../../libraries'
import {} from './blocks'
import { svg } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class Personalization {
  device: 'mobile' | 'desktop'
  goal: 'Love & Relationship' | 'Health & Vitality' | 'Career & Destiny' | null
  gender: 'male' | 'female' | null
  relationshipStatus: 'In relationship' | 'Single' | null
  astrologicalSign:
    | 'Cancer'
    | 'Aries'
    | 'Taurus'
    | 'Gemini'
    | 'Leo'
    | 'Virgo'
    | 'Libra'
    | 'Scorpio'
    | 'Sagittarius'
    | 'Capricorn'
    | 'Aquarius'
    | 'Pisces'
    | null
  resonatedElement: 'Earth' | 'Water' | 'Fire' | 'Air' | null
  favoriteColor: 'Red' | 'Yellow' | 'Blue' | 'Orange' | 'Green' | 'Violet' | null
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
  }

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
        return 'other'
    }
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
      return 'Aquarius'
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      return 'Pisces'
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
      return 'Aries'
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
      return 'Taurus'
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      return 'Gemini'
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
      return 'Cancer'
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
      return 'Leo'
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
      return 'Virgo'
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
      return 'Libra'
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
      return 'Scorpio'
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
      return 'Sagittarius'
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
      return 'Capricorn'
    } else {
      return 'Invalid date'
    }
  }
}

new Personalization(device)
