import SplitHeading from '@/components/motion/SplitHeading'
import Reveal from '@/components/motion/Reveal'
import ConsultButton from '@/components/ui/ConsultButton'
import ConsultSticker from '@/components/ui/ConsultSticker'
import Guarantees from '@/components/ui/Guarantees'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/consult'

/**
 * Ciemny blok wezwania do działania. title może zawierać <em> (akcent szeryfowy).
 */
export default function CTABand({
  eyebrow = 'Bezpłatna konsultacja',
  title = (
    <>
      Porozmawiajmy o <em className="serif-accent">Twojej</em> stronie.
    </>
  ),
  description = '15 minut rozmowy wystarczy, żeby ustalić, czego potrzebujesz i ile to będzie kosztować. Bez zobowiązań.',
  source = 'cta-band',
  topic = '',
  buttonLabel = 'Umów konsultację',
}) {
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 border-t border-line-dark pt-8 lg:grid-cols-12">
          <p className="label flex items-center gap-3 text-mute-dark lg:col-span-3">
            <span className="live-dot" aria-hidden="true" />
            {eyebrow}
          </p>
          <div className="lg:col-span-9">
            <SplitHeading className="display mb-8 text-[clamp(2.6rem,6.5vw,6.5rem)]">{title}</SplitHeading>
            <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <Reveal y={24}>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-mute-dark">{description}</p>
                <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <ConsultButton size="lg" source={source} topic={topic}>
                    {buttonLabel}
                  </ConsultButton>
                  <a href={PHONE_HREF} className="u-link font-display text-xl font-semibold">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <Guarantees dark />
              </Reveal>
              <div className="hidden md:block">
                <ConsultSticker source={`${source}-naklejka`} size={168} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
