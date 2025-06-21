import React, { useState } from 'react';
import { CommonButton, CommonInput } from '../index';

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Password changed successfully:', formData);
      // Handle password change logic here
    }
  };

  return (
    <div className="dark:bg-customBrown bg-white dark:text-white border border-gray-200 dark:border-customBorderColor p-8 rounded-2xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-8">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <CommonInput
            label="Current Password"
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            error={errors.currentPassword}
            placeholder="current password"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <CommonInput
            label="New Password"
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            error={errors.newPassword}
            placeholder="new password"
          />
          <CommonInput
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="confirm password"
          />
        </div>
        <div className="mt-8">
          <CommonButton
            text="Save Change"
            className=" !text-white rounded-lg px-8 py-2"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
