import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="hover:shadow-lg transition-shadow border shadow-md">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="p-3 bg-indigo-100 rounded-full mb-4">
                <Phone size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us directly</p>
              <a
                href="tel:+254722 855 767"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                +254 722 855 767
              </a>
            </div>
          </div>

          <div className="hover:shadow-lg transition-shadow border shadow-md">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="p-3 bg-indigo-100 rounded-full mb-4">
                <Mail size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a
                href="mailto:cdigitalent@gmail.com"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                cdigitalent@gmail.com
              </a>
            </div>
          </div>

          <div className="hover:shadow-lg transition-shadow border shadow-md">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="p-3 bg-indigo-100 rounded-full mb-4">
                <MapPin size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Visit our office</p>
              <address className="text-indigo-600 not-italic">
                123 Business Avenue,
                <br />
                Design District, City,
                <br />
                Country
              </address>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible. We're excited to hear about your project!
            </p>
            <form onSubmit={""} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <label>Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    placeholder="0712 345 678"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label>Send a message...</label>
                  <textarea
                    id="message"
                    name="message"
                    type="message"
                    placeholder="write your message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <p className="text-gray-600 mb-8">
              We're conveniently located in the Design District. Feel free to
              stop by during business hours or schedule an appointment.
            </p>

            <div className="rounded-lg overflow-hidden h-96 bg-gray-300">
              {/* Placeholder for an actual map integration */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200 relative">
                <MapPin size={60} className="text-indigo-600" />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white">
                  <div className="text-center p-4">
                    <p className="font-bold text-lg">Map placeholder</p>
                    <p className="text-sm">
                      An actual map integration would be here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
