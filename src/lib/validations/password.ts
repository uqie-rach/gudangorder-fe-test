import { z } from 'zod';

export const passwordChangeValidationSchema = z.object({
  oldPassword: z
    .string()
    .min(1, 'Old password is required')
    .min(8, 'Password must be at least 8 characters'),
  
  newPassword: z
    .string()
    .min(1, 'New password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must not exceed 100 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password')
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
}).refine((data) => data.oldPassword !== data.newPassword, {
  message: "New password must be different from old password",
  path: ["newPassword"]
});

export type PasswordChangeFormData = z.infer<typeof passwordChangeValidationSchema>;