// src/dashboard/pages/AnalyticsPage.tsx
import { MessageSquare, Calendar, Users, Clock } from 'lucide-react';
import StatsCard from '../components/stats/StatCard';
import { SubmissionLineChart,  type SubmissionData } from '../components/analytics/SubmissionLineChart';
import { SubmissionBarChart } from '../components/analytics/SubmissionBarChart';
import { FormDistributionPie, type DistributionData } from '../components/analytics/FormDistributionPie';

const submissionData: SubmissionData[] = [
  { month: 'Jul', messages: 45, bookings: 28, applications: 12 },
  { month: 'Aug', messages: 52, bookings: 35, applications: 18 },
  { month: 'Sep', messages: 61, bookings: 42, applications: 22 },
  { month: 'Oct', messages: 58, bookings: 38, applications: 25 },
  { month: 'Nov', messages: 71, bookings: 49, applications: 31 },
  { month: 'Dec', messages: 68, bookings: 45, applications: 28 }
];

const formDistribution: DistributionData[] = [
  { name: 'Contact Messages', value: 355, color: '#0066cc' },
  { name: 'Strategy Sessions', value: 237, color: '#1e90ff' },
  { name: 'Job Applications', value: 136, color: '#87ceeb' }
];

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard label="Total Messages" value={355} icon={MessageSquare} bgColor="bg-kta" />
        <StatsCard label="Strategy Sessions" value={237} icon={Calendar} bgColor="bg-indigo-500" />
        <StatsCard label="Applications" value={136} icon={Users} bgColor="bg-purple-500" />
        <StatsCard label="Avg Response Time" value="4.2h" icon={Clock} bgColor="bg-cyan-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SubmissionLineChart data={submissionData} />
        <FormDistributionPie data={formDistribution} />
      </div>

      <SubmissionBarChart data={submissionData} />
    </div>
  );
};

export default AnalyticsPage;
