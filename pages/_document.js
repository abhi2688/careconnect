import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins&family=Raleway&family=Roboto&display=swap" rel="stylesheet" />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
          async
        ></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
