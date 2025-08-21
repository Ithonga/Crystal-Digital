import React, { useEffect } from "react";
import Achievements from "../Components/Achievements";
import Services from "../Components/Services";
import { ArrowRight, Printer, Palette, Tag, Award, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <>
      <Helmet>
        <title>Crystal Digital</title>
        <meta
          name="description"
          content="Crystal Digital offers top-notch graphic design, printing, branding, and web development services. Elevate your brand with our creative solutions. Contact us today!"
        />
        <link rel="canonical" href="https://crystaldigital.co.ke/" />
        <meta name="robots" content="index, follow" />


        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Home",
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
            ],
          })}
        </script>
      </Helmet>

      <div
        // style={{ backgroundImage: "url('/bg.jpg')" }}
        className="w-full h-full items-center flex flex-col "
      >
        <div className="flex  px-3 md:px-20 py-10 shadow-md justify-start items-start">
          <div className="flex flex-col gap-8 md:items-start items-center justify-center ">
            <p className="text-lg font-light text-[#00afef] ">
              Elevate your brand with our creative excellence.
            </p>
            <h1 className="text-[40px] font-bold">
              UNLEASHING THE POWER OF GRAPHICS DESIGN!
            </h1>
            <p className="text-[20px] ">
              Welcome to a world where visual storytelling meets innovation, and
              creativity knows no bounds. From sleek logos that speak volumes to
              immersive web experiences.
            </p>
            <div className="flex md:flex-row flex-col gap-1">
              <a
                href="/services"
                className="bg-white
               hover:bg-[#00afef] hover:text-white hover:border-none text-black border border-black py-2 px-4 "
              >
                Our Services
              </a>
              <a
                href="/contact"
                className="bg-[#00afef] text-white hover:bg-white hover:text-black border hover:border-black py-2 px-4"
              >
                Get in touch
              </a>
            </div>
            {/* <div className="w-full h-[200px] rounded-b-3xl bg-[#00afef]"></div> */}

          </div>
          <img src="/design.png" alt="Company logo" className="hidden md:block w-1/2" />
        </div>
        <section className="bg-fixed bg-cover bg-center h-[150px] w-full text-white flex items-center justify-center" style={{ backgroundImage: "url('/bg2.jpg')" }}>
          
        </section>
        <Achievements />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                <h2 className="text-3xl font-bold mb-6">Why Choose Crystal Digital?</h2>
                <p className="text-gray-600 mb-8">
                  At Crystal Digital, we combine creativity with technical expertise to deliver exceptional results for your business.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Expert Design Team</h3>
                      <p className="text-gray-600">Our designers are skilled professionals with years of industry experience.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Premium Quality</h3>
                      <p className="text-gray-600">We use only top-quality materials and advanced printing technology.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Fast Turnaround</h3>
                      <p className="text-gray-600">Meet your deadlines with our efficient and timely delivery.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Competitive Pricing</h3>
                      <p className="text-gray-600">Get excellent value for your investment with our affordable services.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Our workspace"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="bg-fixed bg-cover bg-center h-screen w-full text-white flex items-center justify-center" style={{ backgroundImage: "url('/design.png')" }}>
          <div>
            <h1 className="text-4xl font-bold">Welcome to Crystal Digital</h1>
            <p className="mt-4">Your brand, beautifully designed.</p>
          </div>
        </section> */}
        <Services />
      </div></>
  );
}

export default Home;
