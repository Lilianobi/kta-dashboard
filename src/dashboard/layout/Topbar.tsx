// src/dashboard/layout/Topbar.tsx
import { Menu } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-gray-100 md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="w-8 h-8 rounded-full bg-kta text-white flex items-center justify-center font-semibold">
          A
        </div>
      </div>
    </header>
  );
};

export default Topbar;