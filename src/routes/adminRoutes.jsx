import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHome from '../pages/admin/home';
import UserManagement from '../pages/admin/userManagement';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/dashboard" element={<AdminHome />} />
      <Route path="/user-management" element={<UserManagement />} />
      {/* Yahan future me aur admin routes add kar sakte hain */}
    </Routes>
  );
}

export default AdminRoutes;
