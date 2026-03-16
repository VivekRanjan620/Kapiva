import { useState, useRef } from "react";
import p1 from "../assets/products/Gym-P1.webp";
import p2 from "../assets/products/Gym-P2.jpg";
import p3 from "../assets/products/Gym-P3.jpg";
import p4 from "../assets/products/Gym-P3.jpg";

const newArrivals = [
  {
    id: 1,
    name: "Ghee Kumkumadi Body Butter - 200g",
    price: 499,
    originalPrice: 599,
    discount: 17,
    rating: 4.7,
    reviews: 47,
    coins: 25,
    image: p1,
    outOfStock: false,
  },
  {
    id: 2,
    name: "Aloe Rose Gel",
    price: 349,
    originalPrice: null,
    discount: null,
    rating: 4.2,
    reviews: 19,
    coins: 17,
    image: p2,
    outOfStock: false,
  },
  {
    id: 3,
    name: "Onion Brahmi Hair Oil",
    price: 599,
    originalPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 25,
    coins: 30,
    image: p3,
    outOfStock: true,
    bogo: true,
  },
  {
    id: 4,
    name: "Acne Control Tulsi Face Wash",
    price: 222,
    originalPrice: 299,
    discount: 26,
    rating: 4.7,
    reviews: 18,
    coins: 11,
    image: p4,
    outOfStock: false,
  },
  {
    id: 5,
    name: "Shilajit Gold Resin 40g",
    price: 1312,
    originalPrice: 1549,
    discount: 15,
    rating: 4.4,
    reviews: 1902,
    coins: 65,
    image: p1,
    outOfStock: false,
  },
  {
    id: 6,
    name: "Shilajit Gold Mix Preworkout",
    price: 1312,
    originalPrice: 1549,
    discount: 15,
    rating: 4.3,
    reviews: 32,
    coins: 65,
    image: p2,
    outOfStock: false,
  },
  {
    id: 7,
    name: "Testofuel Shilajit Whey Protein",
    price: 2899,
    originalPrice: 3599,
    discount: 19,
    rating: 4.4,
    reviews: 217,
    coins: 144,
    image: p3,
    outOfStock: false,
  },
  {
    id: 8,
    name: "Shilajit Gold Capsules 60 Caps",
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.4,
    reviews: 30,
    coins: 59,
    image: p4,
    outOfStock: false,
  },
];

const NewArrivals = () => {
  const [startIndex, setStartIndex] = useState(0);
  const VISIBLE = 4;

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + VISIBLE < newArrivals.length ? prev + 1 : prev,
    );
  };

  const visibleCards = newArrivals.slice(startIndex, startIndex + VISIBLE);

  return (
    <div className="bg-white py-10 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">New Arrivals</h2>
          <button className="text-sm text-green-700 font-semibold hover:underline">
            View all
          </button>
        </div>

        {/* Slider wrapper */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className={`absolute -left-8 z-10 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-md transition-all text-xl font-bold ${
              startIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:shadow-lg hover:border-gray-500"
            }`}
          >
            ‹
          </button>

          {/* Cards */}
          <div className="grid grid-cols-4 gap-4 w-full">
            {visibleCards.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                {/* Top badges */}
                <div className="flex items-center justify-between px-3 pt-3">
                  <div className="flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                    <span className="text-yellow-500 text-xs">★</span>
                    <span className="text-xs font-semibold text-gray-700">
                      {product.rating}/5
                    </span>
                    <span className="text-xs text-gray-400">
                      ({product.reviews})
                    </span>
                  </div>
                  {product.discount && (
                    <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>

                {/* Image */}
                <div
                  className="relative flex items-center justify-center px-4 py-4"
                  style={{ height: 180 }}
                >
                  {product.bogo && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded text-center leading-tight">
                      🎁 BOGO
                      <br />
                      Buy 1 Get 1
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                  <p
                    className="text-sm text-gray-800 font-medium leading-tight mb-2"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {product.name}
                  </p>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base font-black text-gray-900">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mb-1">
                    Earn{" "}
                    <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full text-[8px] text-center leading-3 mr-0.5">
                      ✦
                    </span>
                    <span className="font-semibold text-gray-700">
                      {product.coins} Coins
                    </span>
                  </p>

                  {!product.outOfStock && (
                    <p className="text-xs text-gray-400 mb-3">
                      Delivered by 19 - 20 Mar
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    {product.outOfStock ? (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-lg border border-gray-300 text-gray-400 text-xs font-bold cursor-not-allowed bg-gray-50"
                      >
                        OUT OF STOCK
                      </button>
                    ) : (
                      <>
                        <button className="flex-none w-10 h-10 border-2 border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                          🛒
                        </button>
                        <button className="flex-1 bg-gray-800 text-white text-xs font-bold py-2 rounded-lg hover:bg-black active:scale-95 transition-all">
                          BUY NOW
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={startIndex + VISIBLE >= newArrivals.length}
            className={`absolute -right-8 z-10 w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-md transition-all text-xl font-bold ${
              startIndex + VISIBLE >= newArrivals.length
                ? "opacity-30 cursor-not-allowed"
                : "hover:shadow-lg hover:border-gray-500"
            }`}
          >
            ›
          </button>
        </div>

        {/* View all link */}
        <div className="text-center mt-6">
          <button className="text-sm text-green-700 font-semibold hover:underline">
            View all New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
