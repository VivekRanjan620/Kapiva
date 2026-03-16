const navLinks = ["Products", "Him Foods", "Her Foods", "Juices", "Offers", "Blog"];

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-40 ${isOpen ? "visible" : "invisible pointer-events-none"}`}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-40" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="bg-black text-white font-black text-lg px-3 py-1.5 tracking-widest rounded">
            KAPIVA
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content — aap yahan apna content daalein */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">
            Menu
          </p>
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link}
                className="w-full text-left py-3 px-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors font-medium text-sm flex items-center justify-between group"
              >
                <span>{link}</span>
                <span className="text-gray-300 group-hover:text-green-500">›</span>
              </button>
            ))}
          </nav>

          {/* Yahan apna baaki content add karo */}
          <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-100">
            <p className="text-xs font-semibold text-green-700 mb-1">📦 Track Your Order</p>
            <p className="text-xs text-gray-500">Enter order ID to check status</p>
          </div>

          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-xs font-semibold text-amber-700 mb-1">🎁 Today's Offers</p>
            <p className="text-xs text-gray-500">Save up to ₹700 on products</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex gap-3">
            <button className="flex-1 bg-black text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
              LOGIN
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors">
              GET APP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;