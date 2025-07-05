import {
  MdQrCode2, MdShare, MdPeople, MdAnalytics,
  MdCreditCard, MdSettings, MdHelp
} from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import React from 'react';

const adminNavLinks = [
  { to: '/admin/dashboard', icon: IoHomeOutline, label: 'Dashboard', specialPaths: ['/','/admin'] },
  { to: '/admin/qr-management', icon: MdQrCode2, label: 'QR Management' },
  { to: '/admin/referral-management', icon: MdShare, label: 'Referral Program' },
  { to: '/admin/user-management', icon: MdPeople, label: 'User Management' },
  { to: '/admin/analytics', icon: MdAnalytics, label: 'Analytics' },
  { to: '/admin/subscription-and-billing', icon: MdCreditCard, label: <>
    Subscription <span className="font-sans">&</span> Billing
  </>, specialPaths: ['/admin/update-payment', '/admin/add-card'] },
  { to: '/admin/account-settings', icon: MdSettings, label: 'Account Settings' },
  { to: '/admin/support-and-help', icon: MdHelp, label: <>
    Support <span className="font-sans">&</span> Help
  </> },
];

// Special page titles for specific URLs
const specialPageTitles = {
  '/admin/update-payment': 'Update Payment',
  '/admin/add-card': 'Add New Card',
  '/admin/new-feature': 'New Feature',
  '/admin/settings': 'Settings'
};

export { adminNavLinks, specialPageTitles };
export default adminNavLinks;
