/** Wstawia dane strukturalne JSON-LD. Escapuje "<", żeby treść nie mogła zamknąć tagu <script>. */
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data]
  return items.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
    />
  ))
}
