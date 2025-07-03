// import axios from 'axios';
// import { setAuthCookie } from '@/utils/auth';

// const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export const loginUser = async (phone, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/auth/login`, { phone, password });

//     const { access_token, user } = response.data.data;

//     // Store the token and user data in localStorage
//     localStorage.setItem('token', access_token);
//     localStorage.setItem('userData', JSON.stringify(user));

//     // Set token in a cookie for middleware usage
//     setAuthCookie(access_token);

//     return response.data;
//   } catch (error) {
//     console.error('Error in loginUser:', error);
//     throw (error.response && error.response.data) || error.message;
//   }
// };
