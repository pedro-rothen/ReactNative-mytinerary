import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isUserLoggedIn: boolean;
}

const initialState: AuthState = {
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isUserLoggedIn = true;
    },
    logout: (state) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;