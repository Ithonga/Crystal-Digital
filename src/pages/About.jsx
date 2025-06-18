import { Award, Calendar, TrendingUp, Users } from 'lucide-react';
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
      <div>
        <section className="py-16 md:m-10 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010, Crystal Digital began as a small design studio with a vision to provide high-quality design and printing services to local businesses. What started as a passion project has grown into a comprehensive branding and print solutions business.
                </p>
                <p className="text-gray-700 mb-4">
                  Our journey has been defined by a commitment to excellence, attention to detail, and a deep understanding of our clients' needs. We believe in building lasting relationships with our clients, becoming partners in their growth stories.
                </p>
                <p className="text-gray-700">
                  Today, Crystal Digital combines traditional printing expertise with modern digital technologies to provide innovative solutions for businesses of all sizes.
                </p>
              </div>

              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Our company story"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are guided by core principles that shape everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="hover:shadow-lg transition-shadow bg-slate-100 border rounded-lg p-6">
                <div className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-[#00afef] rounded-full mb-4">
                      <Award size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-gray-600">
                      We strive for excellence in every project we undertake, from concept to completion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:shadow-lg transition-shadow bg-slate-100 border rounded-lg p-6">
                <div className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-[#00afef] rounded-full mb-4">
                      <Users size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                    <p className="text-gray-600">
                      We believe in working closely with our clients to understand their vision and bring it to life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:shadow-lg transition-shadow bg-slate-100 border rounded-lg p-6">
                <div className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-[#00afef] rounded-full mb-4">
                      <TrendingUp size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We continuously explore new technologies and techniques to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover:shadow-lg transition-shadow bg-slate-100 border rounded-lg p-6">
                <div className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-[#00afef] rounded-full mb-4">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Reliability</h3>
                    <p className="text-gray-600">
                      We are committed to meeting deadlines and delivering consistent quality with every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-fixed bg-cover bg-center h-[300px] text-white flex items-center justify-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
          
        </section>

        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Crystal Digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 italic">
                  "Crystal Digital transformed our brand identity with their exceptional design work and high-quality print materials. Their team was professional, responsive, and delivered beyond our expectations."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="Client" 
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Rebecca Martinez</h4>
                    <p className="text-sm text-gray-500">Marketing Director, TechSolutions Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 italic">
                  "Working with Crystal Digital has been a game-changer for our business. Their attention to detail and creative solutions have helped us stand out in a competitive market. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/41.jpg" 
                      alt="Client" 
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">David Thompson</h4>
                    <p className="text-sm text-gray-500">Owner, The Green Café</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 italic">
                  "The team at Crystal Digital went above and beyond to create stunning promotional materials for our event. Their expertise and professionalism made the process smooth and stress-free."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="Client" 
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Jennifer Patel</h4>
                    <p className="text-sm text-gray-500">Event Coordinator, City Foundation</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      </div>
    </>
  )
}

export default About