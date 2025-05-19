import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">MyApp</Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link to="/chat" className="hover:text-yellow-400">Chat</Link>
          <Link to="/auth" className="hover:text-yellow-400">Login</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-gray-700">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/chat" onClick={() => setIsOpen(false)}>Chat</Link>
          <Link to="/auth" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}
