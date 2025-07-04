import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Header from "./Components/Header";
import TopHeader from "./Components/TopHeader";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Whatsapp from "./Components/Whatsapp";

function App() {
  const validRoutes = ["/", "/about", "/services", "/contact"];
  const isValidRoute = validRoutes.includes(location.pathname); // Check if current path is valid
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    // Clean up
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  if (loading) {
    return (<div className="flex flex-col gap-3 font-bold text-2xl text-center items-center justify-center h-screen bg-[#00afef]">
      <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-white"></div>
      {/* <div className="w-4 h-4 bg-green rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce "></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.2s]"></div>
      <div className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.4s]"></div> */}
      <p className="text-white text-[15px]">Loading...</p>
    </div >)
  }

  return (
    <>
      {isValidRoute && <TopHeader />}
      {isValidRoute && <Header />}
      <Whatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isValidRoute && <Footer />}
    </>
  );
}

function NotFound() {
  return (
    <h1 className="flex font-bold text-2xl text-center items-center justify-center h-screen">
      404 | Page Not Found
    </h1>
  );
}

export default App;
