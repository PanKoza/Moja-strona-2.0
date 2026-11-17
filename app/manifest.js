export default function manifest() {
  return {
    name: 'WebGoat – Tworzenie Stron Internetowych',
    short_name: 'WebGoat',
    description: 'Strony internetowe, sklepy online i SEO dla firm z Dolnego Śląska.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1628',
    theme_color: '#0a1628',
    lang: 'pl',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/logo_WebGoat.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
