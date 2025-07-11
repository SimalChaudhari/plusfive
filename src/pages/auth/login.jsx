import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CommonInput, CommonButton, SquaresAnim } from '../../components/index';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import LoginBG from '../../assets/LoginBG.png';
import FB from '../../assets/fb.svg';
import Google from '../../assets/Google.svg';

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
  const [form, setForm] = useState({ email: '', password: '' });
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
    <div className="relative min-h-screen flex flex-col items-center justify-center dark:bg-customBlack bg-white px-4 py-8">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <SquaresAnim speed={0.5} squareSize={50} direction='down' />
        {/* Left-bottom focused bubble/gradient */}
        <div className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_left_bottom,_var(--tw-gradient-stops))]
          from-pink-200/60 via-white/60 to-purple-200/80
          dark:from-[#232136]/80 dark:via-[#232136]/60 dark:to-[#232136]/0
          pointer-events-none"
        />
      </div>
      <div
        className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 dark:border-customBorderColor backdrop-blur-md p-8 bg-cover bg-center"
        style={{
          backgroundImage: `url(${LoginBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className="text-24 font-extrabold text-center text-white">
          Login
        </h2>
        <p className="text-14 mb-6 text-center text-white">
          Welcome back! Let's build something great.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <CommonInput
            label="Email"
            labelFontSize="text-16"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            error={error.email}
            textColor="text-white"
            labelColor="text-white"
            inputBg="bg-gray-100/10"
          />
          <div className="relative">
            <CommonInput
              label="Password"
              labelFontSize="text-16"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={error.password}
              textColor="text-white"
              labelColor="text-white"
              inputBg="bg-gray-100/10"
            />
            <button
              type="button"
              className="absolute right-4 top-[3.3rem] text-xl text-white hover:text-pink-500 transition-colors"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
            <div className="flex items-center justify-between absolute top-2 right-0">

              <Link to="/forgot-password" className="text-[#675DFF]  hover:underline transition-colors duration-200 font-semibold text-14">Forgot password?</Link>
            </div>
          </div>
          <CommonButton
            text="Login"
            type="submit"
            className="w-full !text-white rounded-lg py-3 text-xl shadow-lg"
          />
        </form>
        <div className="space-y-3 mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-[#ffffff29] hover:bg-[#232136]/90 transition-colors duration-200 text-white font-semibold text-16 shadow"
          >
            <img src={Google} alt="Google" className="w-6 h-6" />
            <span class="text-16">Signin with Google</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-[#ffffff29] hover:bg-[#232136]/90 transition-colors duration-200 text-white font-semibold text-16 shadow"
          >
            <img src={FB} alt="Facebook" className="w-6 h-6" />
            <span class="text-16">Signin with Facebook</span>
          </button>
        </div>
        <p className="mt-6 text-right text-[#7A828A] text-14">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-[#675DFF] hover:underline transition-colors duration-200">Register</Link>
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
