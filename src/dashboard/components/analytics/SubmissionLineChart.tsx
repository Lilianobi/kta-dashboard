// src/dashboard/components/analytics/SubmissionLineChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export interface SubmissionData {
  month: string;
  messages: number;
  bookings: number;
  applications: number;
}

interface Props {
  data: SubmissionData[];
}

export const SubmissionLineChart = ({ data }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Submissions Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="messages" stroke="#0066cc" strokeWidth={2} />
          <Line type="monotone" dataKey="bookings" stroke="#1e90ff" strokeWidth={2} />
          <Line type="monotone" dataKey="applications" stroke="#87ceeb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
