import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/admin/home';
import UserManagement from '../pages/admin/userManagement';
import AdminQRManagement from '../pages/admin/qrManagement';
import AdminReferralManagement from '../pages/admin/ReferralManagement';
import Analytics from '../pages/admin/analytics';
import AccountSettings from '../pages/admin/accountSettings';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/dashboard" element={<AdminHome />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/qr-management" element={<AdminQRManagement />} />
      <Route path="/referral-management" element={<AdminReferralManagement />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      {/* Add more admin routes here in the future */}
    </Routes>
  );
}

export default AdminRoutes;
