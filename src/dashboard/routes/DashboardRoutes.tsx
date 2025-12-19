// src/dashboard/routes/DashboardRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import AnalyticsPage from '../pages/AnalyticsPage';
import ContactPage from '../pages/ContactPage';
import BookingPage from '../pages/BookingPage';
import CareerPage from '../pages/CareerPage';

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/dashboard" element={<AnalyticsPage />} />
        <Route path="/dashboard/contact" element={<ContactPage />} />
        <Route path="/dashboard/booking" element={<BookingPage />} />
        <Route path="/dashboard/career" element={<CareerPage />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
