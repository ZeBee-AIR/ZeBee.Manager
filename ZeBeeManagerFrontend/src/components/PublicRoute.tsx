import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('authToken');

  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
