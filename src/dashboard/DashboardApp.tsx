// --------------------------------------------------
// src/dashboard/DashboardApp.tsx
import { BrowserRouter } from 'react-router-dom';
import DashboardRoutes from './routes/DashboardRoutes';


const DashboardApp = () => {
return (
<BrowserRouter>
<DashboardRoutes />
</BrowserRouter>
);
};


export default DashboardApp;