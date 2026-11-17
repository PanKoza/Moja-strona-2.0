import Link from 'next/link'

const SIZES = {
  sm: 'pl-5 pr-2 py-2 text-sm',
  md: 'pl-6 pr-2.5 py-2.5 text-[0.95rem]',
  lg: 'pl-7 pr-3 py-3 text-base sm:text-lg',
}
const SIZES_NO_ICON = {
  sm: 'px-5 py-3 text-sm',
  md: 'px-6 py-3.5 text-[0.95rem]',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

export function Arrow({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  )
}

/** Zawartość przycisku: napis „przewija się" przy najechaniu, strzałka obraca się o 45°. */
export function ButtonInner({ children, icon = true }) {
  return (
    <>
      <span className="btn-roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      {icon && (
        <span className="btn-arrow">
          <Arrow className="h-3.5 w-3.5" />
        </span>
      )}
    </>
  )
}

/**
 * Przycisk-link. variant: signal | ink | ghost | paper. href zewnętrzny → <a>, wewnętrzny → <Link>.
 */
export default function Button({ href, children, variant = 'ink', size = 'md', icon = true, className = '', ...props }) {
  const cls = `btn btn-${variant} ${icon ? SIZES[size] : SIZES_NO_ICON[size]} ${className}`
  const external = href?.startsWith('http') || href?.startsWith('tel:') || href?.startsWith('mailto:')
  if (external) {
    return (
      <a href={href} className={cls} {...props}>
        <ButtonInner icon={icon}>{children}</ButtonInner>
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...props}>
      <ButtonInner icon={icon}>{children}</ButtonInner>
    </Link>
  )
}

export { SIZES, SIZES_NO_ICON }
