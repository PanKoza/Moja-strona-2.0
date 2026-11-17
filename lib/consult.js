export const OPEN_CONSULT_EVENT = 'consult-open'
export const LEAD_SENT_KEY = 'leadSent'

export const PHONE_DISPLAY = '+48 883 821 301'
export const PHONE_HREF = 'tel:+48883821301'

/**
 * Otwiera globalne okno konsultacji z dowolnego miejsca strony.
 * source — skąd kliknięto (trafia do treści zgłoszenia i analityki),
 * topic — wstępnie wybrany temat, variant — 'default' | 'exit'.
 */
export function openConsult({ source = 'strona', topic = '', variant = 'default' } = {}) {
  window.dispatchEvent(new CustomEvent(OPEN_CONSULT_EVENT, { detail: { source, topic, variant } }))
}

export function markLeadSent() {
  try {
    localStorage.setItem(LEAD_SENT_KEY, String(Date.now()))
  } catch {
    /* storage niedostępny */
  }
}

export function wasLeadSent() {
  try {
    return Boolean(localStorage.getItem(LEAD_SENT_KEY))
  } catch {
    return false
  }
}

export function sessionFlag(key, value) {
  try {
    if (value === undefined) return sessionStorage.getItem(key)
    sessionStorage.setItem(key, value)
  } catch {
    return null
  }
  return value
}
