import { Link } from "react-router-dom";
import { Printer, Palette, Tag, FileText, Image, Layout, Briefcase, Calendar, Receipt, Sticker, Flag, CreditCard } from "lucide-react";


const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Business Cards",
      description: "Professional business cards with premium paper stocks and finishes to make a lasting impression."
    },
    {
      icon: FileText,
      title: "Brochures",
      description: "Informative brochures with eye-catching designs to effectively communicate your message."
    },
    {
      icon: Image,
      title: "Flyers",
      description: "Vibrant flyers to promote events, sales, and services with impactful designs."
    },
    {
      icon: Calendar,
      title: "Calendars",
      description: "Custom calendars featuring your brand, products, or promotional content."
    },
    {
      icon: Receipt,
      title: "Receipts & Forms",
      description: "Professional receipts, invoices, and business forms designed with clear layouts."
    },
    {
      icon: Flag,
      title: "Banners",
      description: "Large format banners for indoor and outdoor use with vivid colors and durable materials."
    },
    {
      icon: Sticker,
      title: "Stickers & Labels",
      description: "Custom stickers and labels with various shapes, sizes, and adhesive options."
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative graphic design services for all your marketing and branding needs."
    },
    {
      icon: Tag,
      title: "Brand Identity",
      description: "Complete brand identity development including logos, color schemes, and brand guidelines."
    },
    {
      icon: Layout,
      title: "Marketing Materials",
      description: "Cohesive marketing materials designed to strengthen your brand presence."
    },
    {
      icon: Briefcase,
      title: "Corporate Stationery",
      description: "Professional stationery packages including letterheads, envelopes, and folders."
    },
    {
      icon: Printer,
      title: "Custom Printing",
      description: "Specialized printing services tailored to your unique requirements and specifications."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design, printing, and branding solutions to elevate your business.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of services designed to meet all your printing and design needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a streamlined process to ensure your project is completed efficiently and meets your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your project requirements, goals, and timeline to understand your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">
                Our designers create concepts based on your requirements and refine them with your feedback.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Production</h3>
              <p className="text-gray-600">
                Once the design is approved, we proceed to high-quality production using top-grade materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-600">
                We ensure timely delivery of your completed project, with quality checks at every step.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Call to Action */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life with our professional design and printing services.
          </p>
          <div className="bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700 text-lg px-8 py-3">
            <Link to="/contact">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;