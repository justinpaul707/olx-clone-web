export interface Category {
  _id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  isActive: boolean;
  status: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoriesResponse {
  categories: {
    data: Category[];
    totalItems: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    errors: string[] | null;
  };
}

export interface CategoryFilterInput {
  search?: string;
  status?: string;
  isPaginate?: boolean;
  offset?: number;
}

// Featured Items (Properties) Types
export interface Property {
  _id: string;
  ownerId: string;
  categoryId: string;
  formId: string;
  basicInfo: {
    title: string;
    description: string;
    slug: string;
  };
  location: {
    address: string;
    area: string;
    city: string;
    pinCode: string;
    coordinates: {
      type: string;
      coordinates: number[];
    };
  };
  coverImage: {
    url: string;
    publicId: string;
    caption: string;
    isCover: boolean;
    uploadedAt: string;
    isActive: boolean;
    order: number;
  };
  status: string;
  isActive: boolean;
  details: {
    _id: string;
    propertyId: string;
    customFields: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
  };
  images: {
    _id: string;
    propertyId: string;
    propertyImages: Array<{
      url: string;
      publicId: string;
      caption: string;
      isCover: boolean;
      uploadedAt: string;
      isActive: boolean;
      order: number;
    }>;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PropertiesResponse {
  getAllProperties: {
    data: Property[];
    total: number;
    hasMore: boolean;
    limit: number;
    offset: number;
    success: boolean;
    message: string;
    errors: string[] | null;
  };
}

export interface PropertyFilterInput {
  search?: string;
  categoryId?: string;
  status?: string;
  isActive?: boolean;
}

export interface PropertySortInput {
  field?: string;
  order?: 'ASC' | 'DESC';
}