

import { gql } from 'graphql-request';

export const GET_ALL_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilterInput, $offset: Int) {
  categories(filter: $filter, offset: $offset) {
      data {
        _id
        name
        slug
        description
        icon
        isActive    
        status
        sortOrder
        createdAt
        updatedAt
      }
      totalItems
      perPage
      currentPage
      totalPages
      hasNextPage
      hasPreviousPage
      errors
  }
}
`;

export const GET_ALL_PROPERTIES = gql`
query GetAllProperties($filter: PropertyFilterInput, $sort: PropertySortInput, $limit: Int, $offset: Int) {
  getAllProperties(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
    data {
      _id
      ownerId
      categoryId
      formId
      basicInfo {
        title
        description
        slug
      }
      location {
        address
        area
        city
        pinCode
        coordinates {
          type
          coordinates
        }
      }
      coverImage {
        url
        publicId
        caption
        isCover
        uploadedAt
        isActive
        order
      }
      status
      isActive
      details {
        _id
        propertyId
        customFields
        createdAt
        updatedAt
      }
      images {
        _id
        propertyId
        propertyImages {
          url
          publicId
          caption
          isCover
          uploadedAt
          isActive
          order
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
    total
    hasMore
    limit
    offset
    success
    message
    errors
  }
}
`;


