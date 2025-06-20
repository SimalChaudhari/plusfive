import React from 'react';
import { CommonButton, CommonCustomOutlineButton } from '../index';
import { FaCreditCard } from 'react-icons/fa';
import { CgCreditCard } from 'react-icons/cg';

const SubscriptionDetail = ({ title, value }) => (
  <div>
    <p className="text-xl dark:text-white text-black">{title}</p>
    <p className="mt-1 text-xl dark:text-white text-black font-medium">{value}</p>
  </div>
);

const StatusBadge = ({ status }) => (
  <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-300">
    {status}
  </span>
);

function CurrentActiveSubscription() {
  return (
    <div className="font-ttcommons dark:bg-customBrown bg-white border border-gray-200 dark:border-customBorderColor rounded-2xl p-6 dark:text-white">
      <h2 className="text-xl font-semibold mb-6">Current Active Subscription</h2>

      <div className="p-6 rounded-xl border border-gray-800">
        <div className="grid grid-cols-4 gap-6 items-center pb-6 border-b border-gray-800">
          <SubscriptionDetail title="Subscription" value="Premium" />
          <SubscriptionDetail title="Start Date" value="1/15/2025" />
          <SubscriptionDetail title="End Date" value="6/15/2025" />
          <div>
            <p className="text-xl dark:text-white text-black">Status</p>
            <div className="mt-1">
              <StatusBadge status="Active" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <CommonButton
            text="Update Payment"
            icon={<CgCreditCard className='rotate-180' />}
            className="bg-gradient-to-r from-pink-500 to-red-500 !text-white rounded-xl"
          />
          <CommonCustomOutlineButton text="Cancel Subscription" className='text-customRed border-customRed' />
        </div>
      </div>
    </div>
  );
}

export default CurrentActiveSubscription;
