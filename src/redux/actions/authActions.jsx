// redux/actions/authActions.jsx
// import { loginUser as loginUserService } from '../services/authService';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

export const loginUser = (phone, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const data = await loginUserService(phone, password);
    dispatch({
      type: LOGIN_SUCCESS,
      accessToken: data.data.access_token,
      user: data.data.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message || 'Failed to fetch services',
    });
    console.error('Login failed:', error);
  }
};

export const logoutUser = () => (dispatch) => {
  console.log('Dispatching LOGOUT...');
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
  document.cookie = 'token=; path=/; max-age=0';
  dispatch({ type: LOGOUT });
};
