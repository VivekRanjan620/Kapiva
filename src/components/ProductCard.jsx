import { products } from "../data/products";
import { useState } from "react";

const ProductGrid = () => {
  const [added, setAdded] = useState(null);

  const handleAdd = (id) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 2000);
  };

  return (
    <div className="bg-white py-8 px-4 max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-gray-900">Gym Foods</h2>
        <button className="text-sm text-green-700 font-semibold hover:underline">
          View all
        </button>
      </div>

      {/* Grid — sirf pehle 4 products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
          >
            {/* Top badges */}
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
              <p className="text-sm text-gray-800 font-medium leading-tight mb-2"
                style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
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
                  onClick={() => handleAdd(product.id)}
                  className="flex-none w-10 h-10 border-2 border-green-700 rounded-lg flex items-center justify-center hover:bg-green-50 transition-colors"
                >
                  <span className="text-lg">🛒</span>
                </button>
                <button className="flex-1 bg-green-700 text-white text-sm font-bold py-2 rounded-lg hover:bg-green-800 active:scale-95 transition-all">
                  {added === product.id ? "✓ ADDED!" : "BUY NOW"}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* View all link */}
      <div className="text-center mt-6">
        <button className="text-sm text-green-700 font-semibold hover:underline">
          View all Gym Foods products
        </button>
      </div>

    </div>
  );
};

export default ProductGrid;