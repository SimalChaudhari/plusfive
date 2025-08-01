import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import ThankYou from '../pages/auth/thankYou';
// import ForgotPassword from '../pages/auth/forgotPassword'; // Uncomment if you have this page
import NotFound from '../pages/404';
import { useSelector } from 'react-redux';
import LandingPage from '../pages/landingpage';
import ContactSales from '../pages/contactSales';
import { useLanguage } from '../context/LanguageContext';

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
  const { language } = useLanguage();
  // Demo: language ko console.log ya UI me dikha sakte hain
  // console.log('Current language (context):', language);
  return (
    <>
      {/* Demo ke liye language show kar rahe hain */}
      {/* <div>Current language: {language}</div> */}
      <Routes>
        <Route path="/" element={<LandingPage language={language} />} />
        <Route path="contact-sales" element={<ContactSales language={language} />} />
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
        <Route path="thank-you" element={<ThankYou />} />
        {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
        {/* Add more public routes here in the future */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default PublicRoutes;
