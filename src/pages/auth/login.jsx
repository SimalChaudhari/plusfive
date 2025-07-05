import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonInput from '../../components/commonComponent/CommonInput';
import CommonButton from '../../components/commonComponent/CommonButton';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

// 2 static users
const users = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin"
  },
  {
    email: "user@example.com",
    password: "user123",
    role: "user"
  }
];

function Login() {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    if (!form.email) newError.email = "Enter email";
    if (!form.password) newError.password = "Enter password";
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    const foundUser = users.find(
      u => u.email === form.email && u.password === form.password
    );
    if (foundUser) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: { email: foundUser.email, role: foundUser.role },
        accessToken: 'static-token',
      });
      if (foundUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      toast.error("Invalid email or password");
      setError({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-customBlack bg-white px-4 py-8">
      <div className="w-full max-w-md bg-white dark:bg-customBrown rounded-2xl shadow-2xl border border-gray-200 dark:border-customBorderColor backdrop-blur-md p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 drop-shadow">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your password"
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
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2 accent-pink-500"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-pink-500 hover:underline text-sm transition-colors duration-200">Forgot password?</Link>
          </div>
          <CommonButton
            text="Login"
            type="submit"
            className="w-full !text-white rounded-lg py-3 text-xl shadow-lg"
          />
        </form>
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Don't have an account?{' '}
          <Link to="/register" className="text-pink-500 hover:underline font-medium transition-colors duration-200">Register</Link>
        </p>
      </div>
      {/* Test credentials box */}
      <div className="mt-8 w-full max-w-md bg-gray-100 dark:bg-customGray/30 border border-gray-200 dark:border-customBorderColor rounded-xl p-4 text-sm text-gray-700 dark:text-gray-200 shadow">
        <div><b>Test Admin:</b> <span className="font-mono">admin@example.com / admin123</span></div>
        <div><b>Test User:</b> <span className="font-mono">user@example.com / user123</span></div>
      </div>
    </div>
  );
}

export default Login;
