import React, { useState } from 'react';
import { CommonInput, CommonButton, SquaresAnim, CommonNormalDropDown } from '../../components/index';
import { Link, useNavigate } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { toast } from 'react-toastify';
import LoginBG from '../../assets/LoginBG.png';
import FB from '../../assets/fb.svg';
import Google from '../../assets/google.svg';
import { emailService } from '../../services/emailService';

const businessTypes = [
  { value: '', label: 'Select business type' },
  { value: 'salon', label: 'Salon' },
  { value: 'barbershop', label: 'Barbershop' },
  { value: 'nails-salon', label: 'Nails Salon' },
  { value: 'spa', label: 'Spa' },
  { value: 'medspa', label: 'Medspa' },
  { value: 'massage', label: 'Massage' },
  { value: 'tattoo-piercing', label: 'Tattoo & Piercing' },
  { value: 'tanning-studio', label: 'Tanning Studio' },
];

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessType: '',
  });
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newError = {};
    if (!form.firstName.trim()) newError.firstName = 'Enter first name';
    if (!form.lastName.trim()) newError.lastName = 'Enter last name';
    if (!form.email.trim()) newError.email = 'Enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newError.email = 'Enter a valid email';
    if (!form.phone.trim()) newError.phone = 'Enter phone number';
    if (!form.password) newError.password = 'Enter password';
    else if (form.password.length < 6) newError.password = 'Password must be at least 6 characters';
    if (!form.confirmPassword) newError.confirmPassword = 'Confirm your password';
    else if (form.password !== form.confirmPassword) newError.confirmPassword = 'Passwords do not match';
    if (!form.businessName.trim()) newError.businessName = 'Enter business name';
    if (!form.businessType) newError.businessType = 'Select business type';
    return newError;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError(prev => ({ ...prev, [name]: undefined })); // error hatao jab user type kare
  };

  const handleDropDownChange = (value) => {
    setForm({ ...form, businessType: value });
    setError(prev => ({ ...prev, businessType: undefined })); // error hatao jab user select kare
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = validate();
    setError(newError);
    if (Object.keys(newError).length > 0) return;
    
    // Success message
    toast.success('Registration successful!');
    
    // Prepare user data with actual form values
    const userData = {
      email: form.email,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      businessName: form.businessName,
      businessType: form.businessType
    };
    
    // Navigate to thank you page with real user data
    navigate('/thank-you', {
      state: { userData }
    });
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
      <div className="w-full max-w-4xl mx-auto bg-white dark:bg-customBrown rounded-2xl shadow-2xl border border-gray-200 dark:border-customBorderColor backdrop-blur-md p-8"
        style={{
          backgroundImage: `url(${LoginBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        >
        <h2 className="text-24 font-extrabold text-center text-white">
          Sign Up
        </h2>
        <p className="text-14 mb-6 text-center text-white">
          Welcome back! Let's build something great.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CommonInput
              label="First Name"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              error={error.firstName}
              textColor="text-white"
              labelColor="text-white"
              inputBg="bg-gray-100/10"
              labelFontSize="text-16"
            />
            <CommonInput
              label="Last Name"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last name"
              error={error.lastName}
              textColor="text-white"
              labelColor="text-white"
              inputBg="bg-gray-100/10"
              labelFontSize="text-16"
            />
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CommonInput
              label="Email"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              error={error.email}
              textColor="text-white"
              labelColor="text-white"
              inputBg="bg-gray-100/10"
              labelFontSize="text-16"
            />
            <CommonInput
              label="Phone Number"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              error={error.phone}
              textColor="text-white"
              labelColor="text-white"
              inputBg="bg-gray-100/10"
              labelFontSize="text-16"
            />
          </div>

          {/* Row 3: Password & Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <CommonInput
                label="Password"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                error={error.password}
                textColor="text-white"
                labelColor="text-white"
                inputBg="bg-gray-100/10"
                labelFontSize="text-16"
              />
              <button
                type="button"
                className="absolute right-4 top-[3rem] text-xl text-white hover:text-pink-500 transition-colors"
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
                placeholder="Enter confirm password"
                error={error.confirmPassword}
                textColor="text-white"
                labelColor="text-white"
                inputBg="bg-gray-100/10"
                labelFontSize="text-16"
              />
              <button
                type="button"
                className="absolute right-4 top-[3rem] text-xl text-white hover:text-pink-500 transition-colors"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
              </button>
            </div>
          </div>

          {/* Row 4: Business Name & Business Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CommonInput
              label="Business Name"
              id="businessName"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Enter business name"
              error={error.businessName}
              textColor="text-white"
              labelColor="text-white"
              inputBg="bg-gray-100/10"
              labelFontSize="text-16"
            />
            <div>
              <label className="block text-16 font-medium mb-2 text-white">Business Type</label>
              <CommonNormalDropDown
                options={businessTypes}
                value={form.businessType}
                onChange={handleDropDownChange}
                bgColor="bg-gray-100/10"
                textColor="text-white"
                fontSize="text-16"
                showIcon={false}
                borderRadius="rounded-xl"
                width="w-full"
                inputWidth="w-full"
                inputBorderRadius="rounded-lg"
              />
              {error.businessType && <p className="text-customRed text-lg mt-1">{error.businessType}</p>}
            </div>
          </div>

          {/* Sign Up Button */}
          <CommonButton text="Sign Up" type="submit" className="w-auto px-20 !text-white rounded-lg py-3 text-16 shadow-lg" />
        </form>
        {/*
          <div className="space-y-3 mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-[#ffffff29] hover:bg-[#232136]/90 transition-colors duration-200 text-white font-semibold text-16 shadow"
            >
              <img src={Google} alt="Google" className="w-6 h-6" />
              <span>SignUp with Google</span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-[#ffffff29] hover:bg-[#232136]/90 transition-colors duration-200 text-white font-semibold text-16 shadow"
            >
              <img src={FB} alt="Facebook" className="w-6 h-6" />
              <span>SignUp with Facebook</span>
            </button>
          </div>
        */}
        <p className="mt-6 text-right text-[#7A828A] text-14">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-[#675DFF] hover:underline transition-colors duration-200">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
