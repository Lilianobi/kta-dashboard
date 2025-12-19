// src/dashboard/layout/Sidebar.tsx
import { NavLink } from 'react-router-dom';
import { TrendingUp, MessageSquare, Calendar, Briefcase } from 'lucide-react';

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

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-br  from-kta-600 to-indigo-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Konfirm Tech Africa</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors $
              ${isActive ? 'bg-[rgba(0,94,166,0.08)] text-kta-blue' : 'text-gray-600 hover:bg-gray-100'}`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;