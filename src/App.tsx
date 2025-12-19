// src/App.tsx
import { BrowserRouter } from 'react-router-dom';
import DashboardRoutes from './dashboard/routes/DashboardRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DashboardRoutes />
    </BrowserRouter>
  );
}

export default App;
