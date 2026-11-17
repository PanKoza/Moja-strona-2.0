export const CONSENT_KEY = 'cookieConsent'
export const CONSENT_EVENT = 'cookie-consent-change'
export const OPEN_SETTINGS_EVENT = 'cookie-consent-open'

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* tryb prywatny / zablokowany storage */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))
}
