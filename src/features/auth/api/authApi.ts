import { useQuery } from '@tanstack/react-query';
import graphqlClient from '@app/services/graphqlClient';
import { LOGIN_USER, SIGNUP_USER } from '@app/features/auth/api/mutations';
import { GET_USER_PROFILE } from '@app/features/auth/api/queries';
import type { LoginData, LoginMutationResponse, SignupRequest, SignupMutationResponse } from '@app/features/auth/types';

export const authApi = {
  login: async (variables: LoginData): Promise<LoginMutationResponse> => {
    return await graphqlClient.request<LoginMutationResponse>(LOGIN_USER, variables);
  },

  signup: async (variables: SignupRequest): Promise<SignupMutationResponse> => {
    return await graphqlClient.request<SignupMutationResponse>(SIGNUP_USER, variables);
  },

  getUserProfile: async (userId: string) => {
    return await graphqlClient.request(GET_USER_PROFILE, { userId });
  },
};

export const useAuthQueries = () => {
  const useUserProfile = (userId: string, enabled: boolean = true) => {
    return useQuery({
      queryKey: ['userProfile', userId],
      queryFn: () => authApi.getUserProfile(userId),
      enabled: enabled && !!userId,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 2,
    });
  };

  return {
    useUserProfile,
  };
};
