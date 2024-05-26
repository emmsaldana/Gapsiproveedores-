import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import {
  DashboardPage,
  SuppliersPage,
 
} from './pages';

import { ROUTES } from './constants';

export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.main} />} />
      <Route path={ROUTES.main} element={<DashboardPage />} />
      <Route path={ROUTES.suppliers} element={<SuppliersPage />} />
     
    </Routes>
  </Layout>
);
