'use client'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { CONSENT_EVENT, getConsent } from '@/lib/consent'

const FB_PIXEL_ID = '1594029715571073'

export default function ConsentScripts() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setAccepted(getConsent() === 'accepted')
    const onChange = (e) => setAccepted(e.detail === 'accepted')
    window.addEventListener(CONSENT_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_EVENT, onChange)
  }, [])

  if (!accepted) return null

  return (
    <Script id="fb-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  )
}
