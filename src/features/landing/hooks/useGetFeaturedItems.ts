import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import type { RootState } from '@app/app/store/store';
import { getFeaturedItems } from '@app/features/landing/store/landingThunk';
import { clearFeaturedItems, clearFeaturedItemsError } from '@app/features/landing/store/landingSlice';
import type { AppDispatch } from '@app/app/store/store';
import type { PropertyFilterInput, PropertySortInput } from '@app/features/landing/types';

export const useGetFeaturedItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    featuredItems,
    featuredItemsLoading,
    featuredItemsError,
    featuredItemsTotal,
    featuredItemsHasMore,
    featuredItemsLimit,
    featuredItemsOffset,
  } = useSelector((state: RootState) => state.landing);

  const fetchFeaturedItems = useCallback((params?: {
    filter?: PropertyFilterInput;
    sort?: PropertySortInput;
    limit?: number;
    offset?: number;
  }) => {
    dispatch(getFeaturedItems(params || {}));
  }, [dispatch]);

  const clearFeaturedItemsData = useCallback(() => {
    dispatch(clearFeaturedItems());
  }, [dispatch]);

  const clearFeaturedItemsErrorData = useCallback(() => {
    dispatch(clearFeaturedItemsError());
  }, [dispatch]);

  return {
    // State
    featuredItems,
    featuredItemsLoading,
    featuredItemsError,
    featuredItemsTotal,
    featuredItemsHasMore,
    featuredItemsLimit,
    featuredItemsOffset,
    
    // Actions
    fetchFeaturedItems,
    clearFeaturedItemsData,
    clearFeaturedItemsErrorData,
  };
};
