import React, { useState } from 'react';
import { CommonButton, CommonOutlineButton } from '../../components';
import { FaDownload } from 'react-icons/fa';
import { PiShareFatBold } from 'react-icons/pi';
import { MdQrCode2 } from 'react-icons/md';

function QRPage() {
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
    <div className="p-8 max-w-[1400px] mx-auto">
      {/* Main content boxes */}
      <div className="bg-[#1B1B1B] rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* QR Generator Section */}
          <div>
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
          </div>

          {/* QR Code Display Section */}
          <div>
            <h2 className="text-[22px] text-white font-medium mb-8">My QR Codes</h2>
            <div className="flex flex-col items-center justify-center h-[320px] rounded-lg bg-[#232323]">
              <MdQrCode2 className="text-6xl text-gray-600 mb-4" />
              <p className="text-gray-400 text-[15px]">
                Generated QR codes will appear here
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <CommonButton 
          text="Download QR Code"
          className="!py-2.5 !text-[15px] max-w-[180px]"
          icon={<FaDownload className="text-lg" />}
        />
        <CommonOutlineButton
          text="Share WhatsApp"
          className="!py-2.5 !text-[15px] max-w-[180px]"
          icon={<PiShareFatBold className="text-lg" />}
        />
      </div>
    </div>
  );
}

export default QRPage; 