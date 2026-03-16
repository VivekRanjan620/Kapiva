import { useState } from "react";
import { concernProducts, bestsellers } from "../data/products";
import { reviews } from "../data/reviews";

const ProductGrid = ({ activeCategory }) => {
  const [added, setAdded] = useState(null);

  const currentProducts = concernProducts[activeCategory] || [];
  const currentReviews = reviews[activeCategory] || [];

  const handleAdd = (id) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <div className="bg-white">

      {/* ══════════════════════════════
          1. CONCERN PRODUCTS — 4 cards
      ══════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">{activeCategory}</h2>
          <button className="text-sm text-green-700 font-semibold hover:underline">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              added={added}
              onAdd={handleAdd}
            />
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="text-sm text-green-700 font-semibold hover:underline">
            View all {activeCategory} products
          </button>
        </div>
      </div>

      {/* ══════════════════════════════
          2. REAL PEOPLE REAL STORIES
      ══════════════════════════════ */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Real people, real stories
          </h2>

          {/* Single row, no wrap, horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 rounded-xl bg-white p-4 shrink-0"
                style={{ width: 200 }}
              >
                {/* Review image */}
                <div className="w-full h-28 rounded-lg bg-gray-100 mb-3 overflow-hidden flex items-center justify-center">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">🧴</span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Name */}
                <p className="text-sm font-bold text-gray-800 mb-1">{review.name}</p>

                {/* Comment */}
                <p className="text-xs text-gray-500 leading-relaxed"
                  style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          3. KAPIVA BESTSELLERS — fixed 4
      ══════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900">Kapiva Bestsellers</h2>
          <button className="text-sm text-green-700 font-semibold hover:underline">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              added={added}
              onAdd={handleAdd}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

// ── Reusable Product Card ──
const ProductCard = ({ product, added, onAdd }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col">

      {/* Badges */}
      <div className="flex items-center justify-between px-3 pt-3">
        <div className="flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
          <span className="text-yellow-500 text-xs">★</span>
          <span className="text-xs font-semibold text-gray-700">{product.rating}/5</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
          {product.discount}% OFF
        </div>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center px-4 py-4" style={{ height: 180 }}>
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
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {product.name}
        </p>

        <div className="flex items-center gap-2 mb-1">
          <span className="text-base font-black text-gray-900">₹{product.price}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>

        <p className="text-xs text-gray-500 mb-1">
          Earn 🪙 <span className="font-semibold text-gray-700">{Math.floor(product.price * 0.05)} Coins</span>
        </p>

        <p className="text-xs text-gray-400 mb-3">Delivered by 18 - 19 Mar</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onAdd(product.id)}
            className="flex-none w-10 h-10 border-2 border-green-700 rounded-lg flex items-center justify-center hover:bg-green-50 transition-colors"
          >
            🛒
          </button>
          <button className="flex-1 bg-green-700 text-white text-sm font-bold py-2 rounded-lg hover:bg-green-800 active:scale-95 transition-all">
            {added === product.id ? "✓ ADDED!" : "BUY NOW"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductGrid;