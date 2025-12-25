import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import type { RootState } from '@app/app/store/store';
import { getAllCategories } from '@app/features/landing/store/landingThunk';
import { clearCategories, clearError } from '@app/features/landing/store/landingSlice';
import type { AppDispatch } from '@app/app/store/store';
import type { CategoryFilterInput } from '@app/features/landing/types';

export const useGetAllCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const landingState = useSelector((state: RootState) => state.landing);

  const fetchCategories = useCallback((filterParams?: CategoryFilterInput) => {
    dispatch(getAllCategories(filterParams || {}));
  }, [dispatch]);

  const clearCategoriesData = useCallback(() => {
    dispatch(clearCategories());
  }, [dispatch]);

  const clearErrorData = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
   ...landingState,
    
    // Actions
    fetchCategories,
    clearCategoriesData,
    clearErrorData,
  };
};
