// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import Footer from "@/common/footer/Footer";
import Header from "@/common/header/Header";
import "@/styles/globals.scss";
import "@/styles/theme.scss"
import "@/styles/container.scss"
import "@/styles/buttons.scss"
import type { AppProps } from "next/app";
import { Helmet } from 'react-helmet';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | AI Company</title>
        <link rel="canonical" href="https://autono-car.netlify.app/" />

        {/* Favicon Links */}
        <link rel="icon" href="/public/favicons/favicon.ico" />
        <link rel="apple-touch-icon" href="/public/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/public/favicons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Meta Tags for SEO */}
        <meta name="description" content="AI Company: Leading the future of artificial intelligence with innovative solutions and cutting-edge technologies." />
        <meta name="keywords" content="AI, artificial intelligence, technology, machine learning, innovation" />
        <meta name="author" content="AI Company" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta property="og:title" content="Home | AI Company" />
        <meta property="og:description" content="AI Company: Leading the future of artificial intelligence with innovative solutions and cutting-edge technologies." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://autono-car.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AI Company" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AICompany" />
        <meta name="twitter:title" content="Home | AI Company" />
        <meta name="twitter:description" content="AI Company: Leading the future of artificial intelligence with innovative solutions and cutting-edge technologies." />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Additional Platform Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;