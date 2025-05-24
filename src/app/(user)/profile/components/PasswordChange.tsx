'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';

import { passwordChangeValidationSchema, type PasswordChangeFormData } from '@/lib/validations/password';

const PasswordChange = () => {
  const [isFocused, setIsFocused] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset } = useForm<PasswordChangeFormData>({
      resolver: zodResolver(passwordChangeValidationSchema),
      defaultValues: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      mode: 'onChange'
    });

  const onSubmit = async (data: PasswordChangeFormData) => {
    try {
      console.log('Password change submitted:', data);
      // Here you would submit the data to your backend
      // await changePassword(data);

      alert('Password updated successfully!');

      reset();
    } catch (error) {
      console.error('Error changing password:', error);
      // Handle error appropriately
      alert('Failed to update password. Please try again.');
    }
  };

  const handleFocus = (field: keyof typeof isFocused) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: keyof typeof isFocused) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const getBorderClass = (fieldName: keyof PasswordChangeFormData) => {
    if (errors[fieldName]) {
      return 'border-red-500';
    }
    return isFocused[fieldName as keyof typeof isFocused] ? 'border-gray-400' : 'border-gray-200';
  };

  return (
    <div className="w-full bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8">
          {/* Old Password Field */}
          <div className="relative">
            <div className={`relative border ${getBorderClass('oldPassword')}`}>
              <label
                htmlFor="oldPassword"
                className="absolute -top-2 left-3 px-2 bg-white text-sm font-medium text-gray-900"
              >
                Old Password
              </label>
              <input
                id="oldPassword"
                type="password"
                className="w-full h-14 px-4 pt-2 pb-1 outline-none"
                {...register('oldPassword')}
                onFocus={() => handleFocus('oldPassword')}
                onBlur={() => handleBlur('oldPassword')}
              />
            </div>
            {errors.oldPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.oldPassword.message}</p>
            )}
          </div>

          <div className="flex gap-4">
            {/* New Password Field */}
            <div className="relative w-1/2">
              <div className={`relative border ${getBorderClass('newPassword')}`}>
                <label
                  htmlFor="newPassword"
                  className="absolute -top-2 left-3 px-2 bg-white text-sm font-medium text-gray-900"
                >
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  className="w-full h-14 px-4 pt-2 pb-1 outline-none"
                  {...register('newPassword')}
                  onFocus={() => handleFocus('newPassword')}
                  onBlur={() => handleBlur('newPassword')}
                />
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative w-1/2">
              <div className={`relative border ${getBorderClass('confirmPassword')}`}>
                <label
                  htmlFor="confirmPassword"
                  className="absolute -top-2 left-3 px-2 bg-white text-sm font-medium text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full h-14 px-4 pt-2 pb-1 outline-none"
                  {...register('confirmPassword')}
                  onFocus={() => handleFocus('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="h-10 px-4 py-2 rounded-none bg-blue-500 hover:bg-blue-800 text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Updating...' : 'Update Profile'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
