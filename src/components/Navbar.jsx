import { useState } from "react";
import { useScroll } from "../hooks/useScroll";
import SideDrawer from "./SideDrawer";

const navLinks = ["Products", "Him Foods", "Her Foods", "Juices", "Offers", "Blog"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState(null);
  const scrolled = useScroll(20);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-9999 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Top Row */}
        <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between gap-4">

          {/* Logo + Location */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-black text-white font-black text-lg px-3 py-1.5 tracking-widest rounded">
              KAPIVA
            </div>
            <div className="hidden sm:block text-[10px] text-gray-500 leading-tight">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span className="font-semibold text-gray-700">140119, Chandigarh</span>
              </div>
              <button className="text-green-600 hover:underline">
                Verify pincode for accurate delivery »
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:flex items-center gap-2 bg-gray-50 border border-gray-500 rounded-full px-4 py-2 hover:border-green-400 focus-within:border-green-500 focus-within:bg-white transition-all duration-200">
            <span className="text-gray-400">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search for "Energy"'
              className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600 text-xs">
                ✕
              </button>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 shrink-0">
            <button className="hidden md:block border border-[#1b1b1b] text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              GET APP
            </button>
            <button className="hidden md:block border border-[#1b1b1b] text-gray-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              LOGIN
            </button>
            <button className="text-gray-600 hover:text-black p-2 text-xl rounded-full hover:bg-gray-100 transition-colors">
              🚚
            </button>
            <button className="relative text-gray-600 hover:text-black p-2 text-xl rounded-full hover:bg-gray-100 transition-colors">
              🛒
              <span className="absolute top-1 right-1 bg-green-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Nav Links Row */}
        {/* <div className="hidden md:flex max-w-7xl mx-auto px-4 pb-2 gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-sm font-medium pb-0.5 border-b-2 transition-all duration-200 ${
                activeLink === link
                  ? "text-green-700 border-green-600"
                  : "text-gray-600 border-transparent hover:text-green-700 hover:border-green-400"
              }`}
            >
              {link}
            </button>
          ))}
        </div> */}
      </nav>

      <SideDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;