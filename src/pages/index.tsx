import Homeherobanner from "@/components/homepagecomponents/herobanner";
import Servicessection from "@/components/homepagecomponents/servicessection";
import Visionsection from "@/components/homepagecomponents/visionsection";
import Carimage2 from "@/assets/images/carimage2.webp";
import Carimage3 from "@/assets/images/carimage3.webp";
import React from "react";
import { Helmet } from "react-helmet";
import Realtimeinfosection from "@/components/homepagecomponents/realtimeinfosection";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | AI Company</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Homeherobanner />
      <Visionsection />
      <Servicessection
        title="autonomous driving"
        paragraph="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        buttonlink={"/"}
        image={Carimage2}
        style={{ display: "block" }}
      />
      <Realtimeinfosection />
      <Servicessection
        title="perception enabled"
        paragraph="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        buttonlink={"/"}
        image={Carimage3}
        style={{ display: "none" }}
      />
    </>
  );
}
