import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      icon: "favicon.png",
      name: "Design",
      description: "this the services description",
    },
    {
      id: 2,
      icon: "favicon.png",
      name: "Printing",
      description: "this the services description",
    },
    {
      id: 3,
      icon: "favicon.png",
      name: "Branding",
      description: "this the services description",
    },
    {
      id: 4,
      icon: "favicon.png",
      name: "Web Development",
      description: "this the services description",
      link: "https://ronnieithonga.com",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-8 px-9 md:px-20 py-[80px] h-screen w-full">
      {/* <div className="flex gap-8 p-9 bg-green-300 h-full"> */}
        <img src="/bg.jpg" alt="" className="rounded-3xl object-cover w-[400px] h-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full w-full ">
          {services.map((item) => (
            <div key={item.id} className=" shadow-2xl rounded-3xl flex flex-col items-center justify-center ">
                <img src={item.icon} alt={item.name} className="h-12 "/>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <Link to={item.link} className="text-blue-500">Learn more</Link>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Services;
