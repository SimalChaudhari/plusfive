import React from 'react';
import CurrentActiveSubscription from '../../components/subscriptionAndBilling/CurrentActiveSubscription';
import Pricing from '../../components/subscriptionAndBilling/Pricing';
import PaymentHistoryTable from '../../components/subscriptionAndBilling/PaymentHistoryTable';

const SubscriptionAndBilling = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      <CurrentActiveSubscription />
      <Pricing />
      <PaymentHistoryTable />
    </div>
  );
};

export default SubscriptionAndBilling;
