import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      icon: "favicon.png",
      name: "services",
      description: "this the services description",
    },
    {
      id: 2,
      icon: "favicon.png",
      name: "services",
      description: "this the services description",
    },
    {
      id: 3,
      icon: "favicon.png",
      name: "services",
      description: "this the services description",
    },
    {
      id: 4,
      icon: "favicon.png",
      name: "services",
      description: "this the services description",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-8 h-screen w-full bg-blue-300">
      {/* <div className="flex gap-8 p-9 bg-green-300 h-full"> */}
        <img src="/bg.jpg" alt="" className="rounded-3xl object-cover w-[400px] h-[600px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div key={item.id} className="bg-red-500 rounded-3xl flex flex-col items-center justify-center w-[400px] h-[350px] ">
                <img src={item.icon} alt={item.name} className="h-12 "/>
              <h1>{item.name}</h1>
              <p>{item.description}g</p>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}

export default Services;
