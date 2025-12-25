import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleGraphQLError } from '@app/services/graphqlErrorHandler';
import { apiDebugger } from '@app/utils/apiDebugger';
import type { 
  CategoriesResponse, 
  CategoryFilterInput,
  PropertiesResponse,
  PropertyFilterInput,
  PropertySortInput
} from '@app/features/landing/types/index';
import { landingApi } from '@app/features/landing/api/landingApi';

export const getAllCategories = createAsyncThunk(
  'landing/getAllCategories',
  async (filterVariables: CategoryFilterInput = {}, { rejectWithValue }) => {
     const defaultFilters = {
        isPaginate: false,
        status: "active",
        ...filterVariables
      };
    const debugId = apiDebugger.logApiCall('LANDING_GET_ALL_CATEGORIES', defaultFilters);
    
    try {
      const response = await landingApi.getAllCategories(defaultFilters) as CategoriesResponse;
      if (response.categories?.data) {
        apiDebugger.logApiSuccess(debugId, response);
        return response;
      } else if (response.categories?.errors) {
        const errorMessage = response.categories.errors.join(', ');
        apiDebugger.logApiError(debugId, errorMessage);
        throw new Error(errorMessage);
      } else {
        const error = 'No categories data received';
        apiDebugger.logApiError(debugId, error);
        throw new Error(error);
      }
    } catch (error: unknown) {
      const errorResult = handleGraphQLError(error);
      const statusCode = 400;
      
      apiDebugger.logApiError(debugId, { error: errorResult, status: statusCode });
      
      return rejectWithValue({ 
        error: errorResult, 
        status: statusCode 
      });
    }
  }
);

export const getFeaturedItems = createAsyncThunk(
  'landing/getFeaturedItems',
  async (params: {
    filter?: PropertyFilterInput;
    sort?: PropertySortInput;
    limit?: number;
    offset?: number;
  } = {}, { rejectWithValue }) => {
     const defaultParams = {
        filter: {
          status: "PUBLISHED",
          isActive: true,
          ...params.filter
        },
        limit: params.limit || 6,
        offset: params.offset || 0
      };
    const debugId = apiDebugger.logApiCall('LANDING_GET_FEATURED_ITEMS', defaultParams);
    
    try {
     
      
      const response = await landingApi.getAllProperties(defaultParams) as PropertiesResponse;
      if (response.getAllProperties?.data) {
        apiDebugger.logApiSuccess(debugId, response);
        return response;
      } else if (response.getAllProperties?.errors) {
        const errorMessage = response.getAllProperties.errors.join(', ');
        apiDebugger.logApiError(debugId, errorMessage);
        throw new Error(errorMessage);
      } else {
        const error = 'No properties data received';
        apiDebugger.logApiError(debugId, error);
        throw new Error(error);
      }
    } catch (error: unknown) {
      const errorResult = handleGraphQLError(error);
      const statusCode = 400;
      
      apiDebugger.logApiError(debugId, { error: errorResult, status: statusCode });
      
      return rejectWithValue({ 
        error: errorResult, 
        status: statusCode 
      });
    }
  }
);
