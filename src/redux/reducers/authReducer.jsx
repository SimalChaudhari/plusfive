const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  token: null,
  error: null,
};

const safelyParseJSON = (data) => {
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
    return null;
  }
};

const isBrowser = typeof window !== "undefined";

let persistedState = initialState;

if (isBrowser) {
  const userData = localStorage.getItem('userData');
  const token = localStorage.getItem('token');

  if (userData && token) {
    persistedState = {
      ...initialState,
      isAuthenticated: true,
      user: safelyParseJSON(userData),
      token: token,
    };
  } else {
    console.log("No data in localStorage");
  }
}

export default function authReducer(state = persistedState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };

    case 'LOGIN_SUCCESS': {
      const newState = {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.user,
        token: action.accessToken,
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(newState.user));
        localStorage.setItem('token', newState.token);
      }
      return newState;
    }

    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'LOGOUT':
      if (isBrowser) {
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        document.cookie = 'token=; path=/; max-age=0';
      }
      return { ...state, isAuthenticated: false, user: null, error: null, token: null };

    default:
      return state;
  }
}
