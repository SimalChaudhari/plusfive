import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
// import ForgotPassword from '../pages/auth/forgotPassword'; // Uncomment if you have this page
import NotFound from '../pages/404';
import { useSelector } from 'react-redux';
import LandingPage from '../pages/landingpage';

function PublicRouteGuard({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const location = useLocation();

  if (isAuthenticated) {
    if (user && user.role === 'admin') {
      return <Navigate to="/admin" state={{ from: location }} replace />;
    }
    return <Navigate to="/app" state={{ from: location }} replace />;
  }
  return children;
}

function PublicRoutes() {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="login" element={
        <PublicRouteGuard>
          <Login />
        </PublicRouteGuard>
      } />
      <Route path="register" element={
        <PublicRouteGuard>
          <Register />
        </PublicRouteGuard>
      } />
      {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
      {/* Add more public routes here in the future */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PublicRoutes;
