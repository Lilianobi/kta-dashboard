// src/dashboard/data/analyticsData.ts
import type { SubmissionData } from '../components/analytics/SubmissionLineChart';
import type { DistributionData } from '../components/analytics/FormDistributionPie';

export const submissionData: SubmissionData[] = [
  { month: 'Jul', messages: 45, bookings: 28, applications: 12 },
  { month: 'Aug', messages: 52, bookings: 35, applications: 18 },
  { month: 'Sep', messages: 61, bookings: 42, applications: 22 },
  { month: 'Oct', messages: 58, bookings: 38, applications: 25 },
  { month: 'Nov', messages: 71, bookings: 49, applications: 31 },
  { month: 'Dec', messages: 68, bookings: 45, applications: 28 }
];

export const formDistribution: DistributionData[] = [
  { name: 'Contact Messages', value: 355, color: '#0066cc' },
  { name: 'Strategy Sessions', value: 237, color: '#1e90ff' },
  { name: 'Job Applications', value: 136, color: '#87ceeb' }
];