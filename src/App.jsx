import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoryBar from "./components/CategoryBar";
import ProductGrid from "./components/ProductGrid";
import WhyKapiva from "./components/WhyKapiva";
import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import LearnAyurveda from "./components/LearnAyurveda";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("Gym Foods");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <HeroSection />
        <CategoryBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProductGrid activeCategory={activeCategory} />
        <WhyKapiva />
        <NewArrivals />
        <LearnAyurveda />
      </main>
      <Footer />

     {/* WhatsApp FAB */}
      <a href="https://wa.me/918010000000"
        
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-xl hover:scale-110 hover:bg-green-600 active:scale-95 transition-all duration-200"
      >
        💬
    </a>
    </div>
  );
};

export default App;

