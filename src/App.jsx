import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";

function App() {
  const validRoutes = ["/", "/about", "/services", "/contact"];
  const isValidRoute = validRoutes.includes(location.pathname); // Check if current path is valid

  return (
    <>
        {isValidRoute && <TopHeader />}
        {isValidRoute && <Header />}
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
    <h1 className="flex text-center items-center justify-center h-screen">
      404 | Page Not Found
    </h1>
  );
}

export default App;
