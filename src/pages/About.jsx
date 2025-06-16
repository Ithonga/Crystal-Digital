import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Crystal Digital | About</title>
        <meta
          name="description"
          content="Crystal Digital offers top-notch graphic design, printing, branding, and web development services. Elevate your brand with our creative solutions. Contact us today!"
        />
        <link rel="canonical" href="https://crystaldigital.co.ke/about" />
        <meta name="robots" content="index, follow" />


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About",
            url: "https://crystaldigital.co.ke",
            description:
              "Crystal Digital offers top-notch graphic design, printing, branding, and web development services. Elevate your brand with our creative solutions. Contact us today!",
          }, {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://crystaldigital.co.ke",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://crystaldigital.co.ke/about",
              },
            ],
          })}
        </script>
      </Helmet>
      <div>About</div>
    </>
  )
}

export default About