import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Import this
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import CareerPage from "./pages/CareerPage";

function App() {
  return (
    <div className="bg-[#FFF9F1] min-h-screen text-gray-800 flex flex-col">
      {/* SEO Tags */}
      <Helmet>
        <title>Daivatam Dairy | Fresh & Pure Dairy Products</title>
        <meta
          name="description"
          content="Farm fresh milk, curd, paneer, ghee & more. Delivered directly from Daivatam Dairy to your home."
        />
        <meta property="og:title" content="Daivatam Dairy" />
        <meta
          property="og:description"
          content="Pure, fresh and ethical dairy products delivered to your home."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ✅ Scroll to top on route change */}
      <ScrollToTop />

      {/* Navbar always visible */}
      <Navbar />

      {/* Main routed content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
