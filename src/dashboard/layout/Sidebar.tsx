// src/dashboard/layout/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { TrendingUp, MessageSquare, Calendar, Briefcase, X } from 'lucide-react';
import ktaLogo from '../../assets/kta-logo.webp';

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: 'Analytics', path: '/dashboard', icon: TrendingUp },
  { name: 'Contact Forms', path: '/dashboard/contact', icon: MessageSquare },
  { name: 'Strategy Sessions', path: '/dashboard/booking', icon: Calendar },
  { name: 'Career Forms', path: '/dashboard/career', icon: Briefcase }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-200 
          flex flex-col transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-br from-kta-600 to-indigo-700 rounded-lg flex items-center justify-center">
             <img
              src={ktaLogo}
              alt="KonfirmTechAfrica"
              className="w-7 h-7 object-contain"
              />
             </div>

            <div>
              <h1 className="text-lg font-bold text-gray-900">Konfirm Tech Africa</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>

          {/* Close button - Mobile only */}
          <button 
            onClick={onClose}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;