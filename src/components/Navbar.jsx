// Navigation bar component with logo, nav links, and language switcher
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo placeholder */}
            <div className="flex-shrink-0">
              <img src="#" alt="EcoTrack Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Nav links */}
                <Link to="/report" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Report
                </Link>
                <Link to="/dashboard" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* Language switcher placeholder */}
            <div className="ml-6">
              <select className="border-gray-300 rounded-md">
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;