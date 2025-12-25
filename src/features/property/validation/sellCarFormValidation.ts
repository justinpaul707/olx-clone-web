import type { FieldValidationConfig } from '../../../types/validation.types';

export const carFormValidation: FieldValidationConfig = {
  brand: [
    {
      type: 'required',
      message: 'Brand is required'
    }
  ],
  year: [
    {
      type: 'required',
      message: 'Year is required'
    },
    {
      type: 'range',
      message: 'Year must be between 1900 and current year',
      value: { min: 1900, max: new Date().getFullYear() }
    },
    {
      type: 'pattern',
      message: 'Year must be a valid 4-digit number',
      value: /^\d{4}$/
    }
  ],
  fuelType: [
    {
      type: 'required',
      message: 'Fuel type is required'
    }
  ],
  transmission: [
    {
      type: 'custom',
      message: 'Please select a transmission type',
      validator: (value: string) => value === 'automatic' || value === 'manual'
    }
  ],
  kilometers: [
    {
      type: 'required',
      message: 'Kilometers is required'
    },
    {
      type: 'range',
      message: 'Kilometers must be between 0 and 999,999',
      value: { min: 0, max: 999999 }
    },
    {
      type: 'pattern',
      message: 'Kilometers must be a valid number',
      value: /^\d+$/
    }
  ],
  owner: [
    {
      type: 'custom',
      message: 'Please select number of owners',
      validator: (value: string) => [
        '1st Owner',
        '2nd Owner',
        '3rd Owner',
        '4th Owner',
        '5+ Owners'
      ].includes(value)
    }
  ],
  title: [
    {
      type: 'required',
      message: 'Title is required'
    },
    {
      type: 'minLength',
      message: 'Title must be at least 10 characters long',
      value: 10
    },
    {
      type: 'maxLength',
      message: 'Title cannot exceed 100 characters',
      value: 100
    },
    {
      type: 'custom',
      message: 'Title should not contain special characters like @, #, $',
      validator: (value: string) => !/[@#$%^&*()]+/.test(value)
    }
  ]
};
