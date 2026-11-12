import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

// Matches the base URL used by the sitemap and robots.txt, so the canonical
// never disagrees with what those files declare.
const SITE_URL = 'https://www.briangunzenhauser.com'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const path = router.asPath.split(/[?#]/)[0]
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`

  return (
    <>
      <Head>
        {/* Keyed so an individual page can override it with its own canonical. */}
        <link rel="canonical" href={canonical} key="canonical" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MWM6P4W');
            `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
