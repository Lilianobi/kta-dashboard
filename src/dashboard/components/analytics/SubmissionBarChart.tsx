// src/dashboard/components/analytics/SubmissionBarChart.tsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Define the shape of the data for TypeScript
export interface SubmissionData {
  month: string;
  messages: number;
  bookings: number;
  applications: number;
}

interface Props {
  data: SubmissionData[];
}

export const SubmissionBarChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Legend />
          <Bar dataKey="messages" fill="#0066cc" />
          <Bar dataKey="bookings" fill="#1e90ff" />
          <Bar dataKey="applications" fill="#87ceeb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
