import React, { useState } from 'react';
import CommonInput from '../../components/commonComponent/CommonInput';
import CommonButton from '../../components/commonComponent/CommonButton';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { toast } from 'react-toastify';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newError = {};
    if (!form.name) newError.name = 'Enter your name';
    if (!form.email) newError.email = 'Enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newError.email = 'Enter a valid email';
    if (!form.password) newError.password = 'Enter password';
    else if (form.password.length < 6) newError.password = 'Password must be at least 6 characters';
    if (!form.confirmPassword) newError.confirmPassword = 'Confirm your password';
    else if (form.password !== form.confirmPassword) newError.confirmPassword = 'Passwords do not match';
    return newError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = validate();
    setError(newError);
    if (Object.keys(newError).length > 0) return;
    toast.success('Registration successful!');
    setForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-customBlack bg-white px-4 py-8">
      <div className="w-full max-w-md bg-white dark:bg-customBrown rounded-2xl shadow-2xl border border-gray-200 dark:border-customBorderColor backdrop-blur-md p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 drop-shadow">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <CommonInput
            label="Name"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            error={error.name}
          />
          <CommonInput
            label="Email"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            error={error.email}
          />
          <div className="relative">
            <CommonInput
              label="Password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              error={error.password}
            />
            <button
              type="button"
              className="absolute right-4 top-[3.3rem] text-xl dark:text-white text-black hover:text-pink-500 transition-colors"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <div className="relative">
            <CommonInput
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              error={error.confirmPassword}
            />
            <button
              type="button"
              className="absolute right-4 top-[3.3rem] text-xl dark:text-white text-black hover:text-pink-500 transition-colors"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
          <CommonButton text="Register" type="submit" className="w-full !text-white rounded-lg py-3 text-xl shadow-lg" />
        </form>
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 hover:underline font-medium transition-colors duration-200">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
