import { NavLink } from 'react-router';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-6" />
          <span className="font-bold text-lg">Detroit</span>
        </div>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }: any) =>
              isActive
                ? 'bg-blue-800 px-3 py-1 rounded text-white'
                : 'hover:bg-blue-800 px-3 py-1 rounded'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-800 px-3 py-1 rounded text-white'
                : 'hover:bg-blue-700 px-3 py-1 rounded'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-800 px-3 py-1 rounded text-white'
                : 'hover:bg-blue-700 px-3 py-1 rounded'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-800 px-3 py-1 rounded text-white'
                : 'hover:bg-blue-700 px-3 py-1 rounded'
            }
          >
            Contact Us
          </NavLink>

          {/* Language button */}
          <button className="flex items-center bg-white text-black px-3 py-1 rounded ml-4 shadow-sm">
            🌐 EN
          </button>
        </nav>
      </div>
    </header>
  );
}