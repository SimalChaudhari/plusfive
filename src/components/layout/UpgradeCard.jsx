import React from 'react';
import { MdStars, MdClose } from 'react-icons/md';
import { CommonButton } from '../index';

const UpgradeCard = () => {
  return (
    <div className="bg-gray-100 dark:bg-customBrown border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <MdStars className="text-blue-500 text-[22px]" />
        <button className="ml-auto text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white">
          <MdClose className="text-[20px]" />
        </button>
      </div>
      <div className="mb-2">
        <div className="flex items-center">
          <span className="font-medium text-gray-900 dark:text-white">Upgrade Plan</span>
          <span className="ml-2 text-xs bg-gray-200 dark:bg-[#3C3C3C] text-gray-700 dark:text-white px-2 py-1 rounded">20% OFF</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-white mt-1">Unlock Full access of data, and advanced reporting</p>
      </div>
      <CommonButton 
        text="Upgrade now"
        className="w-full rounded-lg px-4 py-2"
      />
    </div>
  );
};

export default UpgradeCard; 