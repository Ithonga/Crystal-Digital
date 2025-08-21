import { ArrowRight, Printer, Palette,LayoutTemplate, Figma } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      icon: Figma,
      name: "Design",
      description:
        "Graphic Design transforms ideas into captivating visual stories, unlocking expressive evolution.",
      link: "/services",
    },
    {
      id: 2,
      icon: Printer,
      name: "Printing",
      description:
        "Unleash vivid prints: where colors merge with lasting impressions.",
      link: "/services",
    },
    {
      id: 3,
      icon: Palette,
      name: "Branding",
      description:
        "Brand your world with stickers that speak volumes.Identity meets memorable impressions.",
      link: "/services",
    },
    {
      id: 4,
      icon: LayoutTemplate,
      name: "Web Development",
      description:
        "Elevate your online presence with our top-notch web development services.",
      link: "https://ronnieithonga.com",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center gap-4 ">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="px-4 md:text-lg">
          We provide comprehensive design, printing, and <br/>branding solutions
          tailored to meet your business needs.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 px-4 md:px-20 py-[80px] md:h-screen w-full">
        {/* <div className="flex gap-8 p-9 bg-green-300 h-full"> */}
        <img
          src="/bg2.jpg"
          alt="background"
          className="rounded-3xl object-cover w-[400px] h-full px-"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full ">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-slate-200 p-5 space-y-5 shadow-md hover:shadow-xl rounded-3xl flex flex-col items-center justify-center "
            >
              {/* <img src={item.icon} alt={item.name} className="h-12 " /> */}
              <div className="flex items-center justify-center bg-cyan w-14 p-2 rounded-full "><item.icon className="text-white h-12"/></div>
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="text-center">{item.description}</p>
              <Link to={item.link} className="text-blue-500 flex">
                Learn more
                <ArrowRight />
              </Link>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Services;
