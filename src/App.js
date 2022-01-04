import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <meta name="author" content="OmniboyOk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LinkedClean" />
        <meta property="og:description" content="LinkedClean Plugin Web." />
        <meta
          name="image"
          property="og:image"
          content="%PUBLIC_URL%/static/media/banner.80e62266.svg"
        />
        <meta
          property="og:url"
          content="https://omniboyok.github.io/linkedclean-web"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Landing />
    </>
  );
}
