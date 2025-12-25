import graphqlClient from "@app/services/graphqlClient";
import { GET_ALL_CATEGORIES, GET_ALL_PROPERTIES } from "./queries";
import type { CategoryFilterInput, PropertyFilterInput, PropertySortInput } from "../types";

export const landingApi = {
  getAllCategories: async (variables: CategoryFilterInput | object | undefined) => {
    return await graphqlClient.request(GET_ALL_CATEGORIES, variables);
  },
  
  getAllProperties: async (variables: {
    filter?: PropertyFilterInput;
    sort?: PropertySortInput;
    limit?: number;
    offset?: number;
  } = {}) => {
    return await graphqlClient.request(GET_ALL_PROPERTIES, variables);
  },
};

