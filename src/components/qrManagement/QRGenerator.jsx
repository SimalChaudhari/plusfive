import React, { useState } from 'react';
import { CommonButton, CommonOutlineButton } from '../index';
import { FaDownload } from 'react-icons/fa';
import { PiShareFatBold } from 'react-icons/pi';

function QRGenerator() {
  const [formData, setFormData] = useState({
    customerMessage: '',
    directMessage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerateQR = () => {
    // TODO: Implement QR generation logic
    console.log('Generating QR with:', formData);
  };

  return (
    <div className="bg-[#1B1B1B] rounded-2xl p-8">
      <h2 className="text-[22px] text-white font-medium mb-8">QR Generator</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-white text-[15px] mb-3">Message for Customer</label>
          <input
            type="text"
            name="customerMessage"
            value={formData.customerMessage}
            onChange={handleChange}
            placeholder="The message your customer shares with friends..."
            className="w-full bg-[#232323] text-white border-0 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-[15px]"
          />
        </div>

        <div>
          <label className="block text-white text-[15px] mb-3">Direct Message</label>
          <input
            type="text"
            name="directMessage"
            value={formData.directMessage}
            onChange={handleChange}
            placeholder="The message your customer's friends will send you..."
            className="w-full bg-[#232323] text-white border-0 rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-[15px]"
          />
        </div>

        <CommonButton
          text="Generate QR Code"
          onClick={handleGenerateQR}
          className="w-full py-3"
        />
      </div>

      <div className="flex gap-3 mt-6">
        <CommonButton 
          text="Download QR Code"
          className="flex-1 !py-2.5 !text-[15px]"
          icon={<FaDownload className="text-lg" />}
        />
        <CommonOutlineButton
          text="Share WhatsApp"
          className="flex-1 !py-2.5 !text-[15px]"
          icon={<PiShareFatBold className="text-lg" />}
        />
      </div>
    </div>
  );
}

export default QRGenerator; 