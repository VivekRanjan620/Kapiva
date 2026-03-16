import { categories } from "../data/categories";

const CategoryBar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-6 shadow-sm px-22">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start gap-2 flex-wrap">
          {/* Label */}
          <div className="flex items-center gap-1.5  font-bold text-sm py-2 shrink-0">
            <svg
              className="w-7 h-6 text-green-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 4h18v2l-7 7v7l-4-2v-5L3 6V4z" />
            </svg>
            <span className="whitespace-nowrap text-rgb(0,0,0)">
              SELECT CONCERN:
            </span>
          </div>

          {/* Category buttons */}
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => onCategoryChange(cat.label)}
              className={`flex items-center gap-2 pl-2 pr-4 py-2 border text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-md cursor-pointer
                  ${
                    activeCategory === cat.label
                      ? "bg-[#ecf1e2] border-[#a3ba72] text-gray-800"
                      : "bg-white border-[#a3ba72] text-gray-700 hover:bg-[hsl(0,0%,100%)]"
                  }`}
            >
              {/* Photo or placeholder */}
              <div className="w-10 h-10 rounded-sm overflow-hidden bg-gray-200 shrink-0 flex items-center justify-center">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-xs">👤</span>
                )}
              </div>

              {/* Checkmark if active */}
              {activeCategory === cat.label && (
                <span className="text-green-600 font-bold text-xs bg-rgb(236,241,226)">
                  ✓
                </span>
              )}

              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
