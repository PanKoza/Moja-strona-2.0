'use client'
import { useState } from 'react'

/**
 * FAQ w formie listy z liniami. Odpowiedzi są zawsze w HTML (zwijane przez CSS grid),
 * więc treść zgadza się ze schematem FAQPage.
 */
export default function FaqAccordion({ items, defaultOpen = 0, dark = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`border-b ${dark ? 'border-line-dark' : 'border-line'}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        const id = `faq-${i}-${item.q.length}`
        return (
          <div key={item.q} className={`border-t ${dark ? 'border-line-dark' : 'border-line'}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 text-left md:grid-cols-[4rem_1fr_auto] md:py-7"
              >
                <span className={`label ${dark ? 'text-mute-dark' : 'text-mute'}`}>{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">{item.q}</span>
                <span
                  className={`relative mt-1 h-4 w-4 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : 'group-hover:rotate-90'}`}
                  aria-hidden="true"
                >
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <div id={id} className="accordion-panel" data-open={isOpen}>
              <div>
                <p className={`max-w-3xl pb-7 pl-[3.5rem] text-lg leading-relaxed md:pl-[5rem] ${dark ? 'text-mute-dark' : 'text-mute'}`}>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
