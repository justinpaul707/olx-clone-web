// features/auth/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { login } from '@app/features/auth/store/authThunk';
import type { AuthState, AuthError } from '@app/features/auth/types';

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {        
        state.isLoading = false;
        state.user = {
          id: action.payload.user.id,
          email: action.payload.user.email,
          phone: action.payload.user.phone,
          role: action.payload.user.role,
          profile: action.payload.user.profile
        };
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AuthError;
        state.isAuthenticated = false;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;