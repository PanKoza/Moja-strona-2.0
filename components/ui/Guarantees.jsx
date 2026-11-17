export const GUARANTEES = ['Bezpłatna wycena', 'Odpowiedź w 24 h', 'Stała cena', 'Zero zobowiązań']

/** Krótka linia „odwracaczy ryzyka" w stylu etykiet — bez ikon i zielonych ptaszków. */
export default function Guarantees({ items = GUARANTEES, className = '', dark = false }) {
  return (
    <ul className={`label flex flex-wrap gap-x-4 gap-y-2 ${dark ? 'text-mute-dark' : 'text-mute'} ${className}`}>
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-4">
          {i > 0 && <span aria-hidden="true">/</span>}
          {item}
        </li>
      ))}
    </ul>
  )
}
