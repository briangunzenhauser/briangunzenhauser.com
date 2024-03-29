import '../styles/globals.css'
import Script from 'next/script'
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
// import "../styles/prism-overrides.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
