import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import QRManagement from '../pages/qrManagement'
import ReferralManagement from '../pages/ReferralManagement'
import CustomerManagement from '../pages/customerManagement'
import Analytics from '../pages/analytics'
import SubscriptionAndBilling from '../pages/subscriptionAndBilling'
import AccountSettings from '../pages/accountSettings'
import SupportAndHelp from '../pages/supportAndHelp'
import UpdatePaymentPage from '../pages/updatePayment'
import AddCard from '../pages/addCard'
import Notifications from '../pages/notifications'

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/qr-management" element={<QRManagement />} />
      <Route path="/referral" element={<ReferralManagement />} />
      <Route path="/customers" element={<CustomerManagement />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/subscription-and-billing" element={<SubscriptionAndBilling />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/support-and-help" element={<SupportAndHelp />} />
      <Route path="/update-payment" element={<UpdatePaymentPage />} />
      <Route path="/add-card" element={<AddCard />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  )
}

export default UserRoutes
