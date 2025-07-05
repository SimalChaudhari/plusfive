// src/components/layout/UserNavLinks.js
import {
    MdQrCode2, MdShare, MdPeople, MdAnalytics,
    MdCreditCard, MdSettings, MdHelp
  } from 'react-icons/md';
  import { IoHomeOutline } from 'react-icons/io5';
  import React from 'react';
  
  const userNavLinks = [
    { to: '/app/dashboard', icon: IoHomeOutline, label: 'Dashboard', specialPaths: ['/','/app'] },
    { to: '/app/qr-management', icon: MdQrCode2, label: 'QR Management' },
    { to: '/app/referral', icon: MdShare, label: 'Referral Program' },
    { to: '/app/customers', icon: MdPeople, label: 'Customer Management' },
    { to: '/app/analytics', icon: MdAnalytics, label: 'Analytics' },
    { to: '/app/subscription-and-billing', icon: MdCreditCard, label: <>Subscription <span className="font-sans">&</span> Billing</>, specialPaths: ['/app/update-payment', '/app/add-card'] },
    { to: '/app/account-settings', icon: MdSettings, label: 'Account Settings' },
    { to: '/app/support-and-help', icon: MdHelp, label: <>Support <span className="font-sans">&</span> Help</> },
  ];

  // Special page titles for specific URLs
  const specialPageTitles = {
    '/app/update-payment': 'Update Payment',
    '/app/add-card': 'Add New Card'
  };

  export { userNavLinks, specialPageTitles };
  
  export default userNavLinks;