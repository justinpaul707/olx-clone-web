import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '@app/features/auth/services/authService';
import { handleGraphQLError } from '@app/services/graphqlErrorHandler';
import { apiDebugger } from '@app/utils/apiDebugger';
import type { LoginData, SignupRequest } from '../types';
import { authApi } from '@app/features/auth/api/authApi';

export const login = createAsyncThunk(
  'auth/login',
  async (data: LoginData, { rejectWithValue }) => {
    const debugId = apiDebugger.logApiCall('AUTH_LOGIN', data);
    
    try {
      const response = await authApi.login(data);
      if (response.login?.data) {
        const { token, user } = response.login.data;
        authService.setAuthData({ token, user });
        
        apiDebugger.logApiSuccess(debugId, { token, user });
        return { token, user };
      } else if (response.login?.errors) {
        const errorMessage = response.login.errors.join(', ');
        apiDebugger.logApiError(debugId, errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error: unknown) {
      const errorResult = handleGraphQLError(error);
      const statusCode = 400;
      apiDebugger.logApiError(debugId, { error: errorResult.message, status: statusCode });
      return rejectWithValue({ 
        error: errorResult.message, 
        status: statusCode 
      });
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (data: SignupRequest, { rejectWithValue }) => {
    const debugId = apiDebugger.logApiCall('AUTH_SIGNUP', data);
    
    try {
      const response = await authApi.signup(data);
      if (response.signup?.success) {
        apiDebugger.logApiSuccess(debugId, response);
        return response;
      } else if (response.signup?.errors) {
        const errorMessage = response.signup.errors.join(', ');
        apiDebugger.logApiError(debugId, errorMessage);
        throw new Error(errorMessage);
      } else {
        const error = 'No signup data received';
        apiDebugger.logApiError(debugId, error);
        throw new Error(error);
      }
    } catch (error: unknown) {
      const errorResult = handleGraphQLError(error);
      const statusCode = 400;
      
      apiDebugger.logApiError(debugId, { error: errorResult.message, status: statusCode });
      
      return rejectWithValue({ 
        error: errorResult.message, 
        status: statusCode 
      });
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    authService.clearAuthData();
    return { success: true };
  }
);
