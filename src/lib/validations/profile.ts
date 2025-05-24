import { z } from 'zod';

export const profileValidationSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  
  facebookUsername: z
    .string()
    .min(3, 'Facebook username must be at least 3 characters')
    .max(30, 'Facebook username must not exceed 30 characters')
    .regex(/^[a-zA-Z0-9._]+$/, 'Facebook username can only contain letters, numbers, dots and underscores')
    .optional()
    .or(z.literal('')),
  
  twitterUsername: z
    .string()
    .min(3, 'Twitter username must be at least 3 characters')
    .max(15, 'Twitter username must not exceed 15 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Twitter username can only contain letters, numbers and underscores')
    .optional()
    .or(z.literal('')),
  
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 characters')
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
    .min(1, 'Phone number is required'),
  
  gender: z
    .enum(['Male', 'Female', 'Other'], {
      required_error: 'Please select a gender',
      invalid_type_error: 'Please select a valid gender'
    }),
  
  address: z
    .string()
    .min(10, 'Address must be at least 10 characters')
    .max(200, 'Address must not exceed 200 characters')
    .min(1, 'Address is required'),
  
  bio: z
    .string()
    .max(500, 'Bio must not exceed 500 characters')
    .optional()
    .or(z.literal(''))
});

export type ProfileFormData = z.infer<typeof profileValidationSchema>;