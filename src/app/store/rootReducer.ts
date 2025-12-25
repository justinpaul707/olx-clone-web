import { combineReducers } from '@reduxjs/toolkit';
import { resetStore } from './action';
import authReducer from '@app/features/auth/store/authSlice';
import landingReducer from '@app/features/landing/store/landingSlice';
import type { AnyAction } from '@reduxjs/toolkit';
        
const appReducer = combineReducers({
  auth: authReducer,
  landing: landingReducer
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  if (action.type === resetStore.type) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
