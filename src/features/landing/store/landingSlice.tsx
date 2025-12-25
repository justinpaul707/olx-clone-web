import { createSlice } from '@reduxjs/toolkit';
import { getAllCategories, getFeaturedItems } from '@app/features/landing/store/landingThunk';
import type { Category, Property } from '@app/features/landing/types';

export interface LandingError {
  error: string;
  status?: number;
}

export interface LandingState {
  categories: Category[];
  featuredItems: Property[];
  isLoading: boolean;
  featuredItemsLoading: boolean;
  error: LandingError | null;
  featuredItemsError: LandingError | null;
  totalItems: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  // Featured items pagination
  featuredItemsTotal: number;
  featuredItemsHasMore: boolean;
  featuredItemsLimit: number;
  featuredItemsOffset: number;
}

const initialState: LandingState = {
  categories: [],
  featuredItems: [],
  isLoading: false,
  featuredItemsLoading: false,
  error: null,
  featuredItemsError: null,
  totalItems: 0,
  perPage: 10,
  currentPage: 1,
  totalPages: 0,
  hasNextPage: false,
  hasPreviousPage: false,
  featuredItemsTotal: 0,
  featuredItemsHasMore: false,
  featuredItemsLimit: 10,
  featuredItemsOffset: 0,
};

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    clearCategories(state) {
      state.categories = [];
      state.totalItems = 0;
      state.perPage = 10;
      state.currentPage = 1;
      state.totalPages = 0;
      state.hasNextPage = false;
      state.hasPreviousPage = false;
    },
    clearFeaturedItems(state) {
      state.featuredItems = [];
      state.featuredItemsTotal = 0;
      state.featuredItemsHasMore = false;
      state.featuredItemsLimit = 10;
      state.featuredItemsOffset = 0;
    },
    clearError(state) {
      state.error = null;
    },
    clearFeaturedItemsError(state) {
      state.featuredItemsError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {        
        state.isLoading = false;
        state.categories = action.payload.categories.data;
        state.totalItems = action.payload.categories.totalItems;
        state.perPage = action.payload.categories.perPage;
        state.currentPage = action.payload.categories.currentPage;
        state.totalPages = action.payload.categories.totalPages;
        state.hasNextPage = action.payload.categories.hasNextPage;
        state.hasPreviousPage = action.payload.categories.hasPreviousPage;
        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as LandingError;
      })
      // Featured Items cases
      .addCase(getFeaturedItems.pending, (state) => {
        state.featuredItemsLoading = true;
        state.featuredItemsError = null;
      })
      .addCase(getFeaturedItems.fulfilled, (state, action) => {
        state.featuredItemsLoading = false;
        state.featuredItems = action.payload.getAllProperties.data;
        state.featuredItemsTotal = action.payload.getAllProperties.total;
        state.featuredItemsHasMore = action.payload.getAllProperties.hasMore;
        state.featuredItemsLimit = action.payload.getAllProperties.limit;
        state.featuredItemsOffset = action.payload.getAllProperties.offset;
        state.featuredItemsError = null;
      })
      .addCase(getFeaturedItems.rejected, (state, action) => {
        state.featuredItemsLoading = false;
        state.featuredItemsError = action.payload as LandingError;
      })
  },
});

export const { clearCategories, clearFeaturedItems, clearError, clearFeaturedItemsError } = landingSlice.actions;
export default landingSlice.reducer;