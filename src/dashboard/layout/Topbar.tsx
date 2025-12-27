// src/dashboard/layout/Topbar.tsx
import { Menu } from 'lucide-react';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-100 md:hidden"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          A
        </div>
      </div>
    </header>
  );
};

export default Topbar;