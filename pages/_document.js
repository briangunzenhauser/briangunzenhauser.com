import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWM6P4W" height="0" width="0" style="display: none; visibility: hidden;" />`,
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument