'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, MapPin, Mail, Phone, Facebook, Twitter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileValidationSchema, type ProfileFormData } from '@/lib/validations/profile';

const Information = () => {
  const [isDropdownFocused, setIsDropdownFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting } } = useForm<ProfileFormData>({
      resolver: zodResolver(profileValidationSchema),
      defaultValues: {
        name: '',
        email: 'example@mail.com',
        facebookUsername: 'examplename',
        twitterUsername: 'examplename',
        phone: '0123 456 7889',
        gender: 'Male',
        address: '3304 st washinghton',
        bio: 'Hi there, this is my bio...'
      },
      mode: 'onChange'
    });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      console.log('Profile updated:', data);
      // Here you would submit the data to your backend
      // await updateProfile(data);

      // Show success message or redirect
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error appropriately
    }
  };

  const inputGroupStyle = {
    display: 'flex',
    position: 'relative' as const,
    overflow: 'hidden',
    borderRadius: '0',
    border: '0.5px solid #c9c8c5'
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    backgroundColor: 'white',
    borderRight: 'none'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem 0.75rem',
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent'
  };

  const dropdownContainerStyle = {
    ...inputGroupStyle,
    transition: 'all 0.3s ease',
  };

  const dropdownArrowStyle = {
    position: 'absolute' as const,
    right: '12px',
    top: '50%',
    transform: `translateY(-50%) ${isDropdownFocused ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    transition: 'transform 0.3s ease',
    pointerEvents: 'none' as const,
    zIndex: 1
  };

  const getInputGroupClassName = (fieldName: keyof ProfileFormData) => {
    return `focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 ${errors[fieldName] ? 'border-red-500' : ''
      }`;
  };

  return (
    <div className="bg-white w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Name Field */}
          <div>
            <div
              style={{
                ...inputGroupStyle,
                transition: 'all 0.3s ease',
              }}
              className={getInputGroupClassName('name')}
            >
              <div style={iconContainerStyle}>
                <User size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                {...register('name')}
                style={{ ...inputStyle, outline: 'none' }}
                placeholder="Full Name"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <div
              style={{
                ...inputGroupStyle,
                transition: 'all 0.3s ease',
              }}
              className={getInputGroupClassName('email')}
            >
              <div style={iconContainerStyle}>
                <Mail size={20} className="text-gray-500" />
              </div>
              <input
                type="email"
                {...register('email')}
                style={{ ...inputStyle, outline: 'none' }}
                placeholder="Email Address"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Facebook Username */}
          <div>
            <div
              style={{
                ...inputGroupStyle,
                transition: 'all 0.3s ease',
              }}
              className={getInputGroupClassName('facebookUsername')}
            >
              <div style={iconContainerStyle}>
                <Facebook size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                {...register('facebookUsername')}
                style={{ ...inputStyle, outline: 'none' }}
                placeholder="Facebook Username"
              />
            </div>
            {errors.facebookUsername && (
              <p className="text-red-500 text-sm mt-1">{errors.facebookUsername.message}</p>
            )}
          </div>

          {/* Twitter Username */}
          <div>
            <div
              style={{
                ...inputGroupStyle,
                transition: 'all 0.3s ease',
              }}
              className={getInputGroupClassName('twitterUsername')}
            >
              <div style={iconContainerStyle}>
                <Twitter size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                {...register('twitterUsername')}
                style={{ ...inputStyle, outline: 'none' }}
                placeholder="Twitter Username"
              />
            </div>
            {errors.twitterUsername && (
              <p className="text-red-500 text-sm mt-1">{errors.twitterUsername.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <div
              style={{
                ...inputGroupStyle,
                transition: 'all 0.3s ease',
              }}
              className={getInputGroupClassName('phone')}
            >
              <div style={iconContainerStyle}>
                <Phone size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                {...register('phone')}
                style={{ ...inputStyle, outline: 'none' }}
                placeholder="Phone Number"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Gender Dropdown */}
          <div>
            <div
              style={dropdownContainerStyle}
              className={getInputGroupClassName('gender')}
            >
              <select
                {...register('gender')}
                onFocus={() => setIsDropdownFocused(true)}
                onBlur={() => setIsDropdownFocused(false)}
                style={{ ...inputStyle, outline: 'none', appearance: 'none', paddingRight: '40px' }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown
                size={20}
                className="text-gray-500"
                style={dropdownArrowStyle}
              />
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
          </div>
        </div>

        {/* Address Field (Full Width) */}
        <div className="mb-4">
          <div
            style={{
              ...inputGroupStyle,
              transition: 'all 0.3s ease',
            }}
            className={getInputGroupClassName('address')}
          >
            <div style={iconContainerStyle}>
              <MapPin size={20} className="text-gray-500" />
            </div>
            <input
              type="text"
              {...register('address')}
              style={{ ...inputStyle, outline: 'none' }}
              placeholder="Address"
            />
          </div>
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
          )}
        </div>

        {/* Bio Text Area (Full Width) */}
        <div className="mb-6">
          <textarea
            {...register('bio')}
            className={`w-full px-3 py-2 min-h-48 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 outline-none ${errors.bio ? 'border-red-500' : ''
              }`}
            placeholder="Write your bio here..."
          />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>

        {/* Update Profile Button */}
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-10 px-4 py-2 rounded-none bg-blue-500 hover:bg-blue-800 text-white transition-all duration-500 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Updating...' : 'Update Profile'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Information;
