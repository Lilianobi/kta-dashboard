// src/dashboard/components/analytics/StatsCard.tsx
import type { LucideIcon } from 'lucide-react';


export interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  bgColor: string; // tailwind class
}

const StatsCard = ({ label, value, icon: Icon, bgColor }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className={`${bgColor} p-3 rounded-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

// --------------------------------------------------

// --------------------------------------------------

// --------------------------------------------------
// src/dashboard/components/analytics/FormDistributionPie.tsx


// --------------------------------------------------
