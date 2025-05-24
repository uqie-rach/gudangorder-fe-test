'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import ClearFilterButton from '../clear-filter-button';

import { formatPriceToRupiah } from '@/lib/utils';

import { useFilters } from '@/store/use-filters';

interface PriceFilterProps {
  onSubmit: (values: { min: number; max: number }) => void;
  initialMin?: number;
  initialMax?: number;
  className?: string;
}

export const Filter = ({
  onSubmit,
  initialMin = 0,
  initialMax = 0,
  className = '',
}: PriceFilterProps) => {
  const [minPrice, setMinPrice] = useState<string>(initialMin.toString());
  const [maxPrice, setMaxPrice] = useState<string>(initialMax.toString());
  const [isMinFocused, setIsMinFocused] = useState(false);
  const [isMaxFocused, setIsMaxFocused] = useState(false);

  const { priceRange } = useFilters();

  useEffect(() => {
    // Set initial values from priceRange
    if (priceRange && priceRange.length === 2) {
      setMinPrice(priceRange[0].toString());
      setMaxPrice(priceRange[1].toString());
    } else {
      setMinPrice(initialMin.toString());
      setMaxPrice(initialMax.toString());
    }
  }, [priceRange])


  // Handle input change for minimum price
  const handleMinChange = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    setMinPrice(numericValue);
  };

  // Handle input change for maximum price
  const handleMaxChange = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    setMaxPrice(numericValue);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || 0;

    // Ensure max is greater than or equal to min
    // const validatedMax = Math.max(min, max);

    onSubmit({
      min,
      max
    });
  };

  // Get displayed value based on focus state
  const getDisplayValue = (value: string, isFocused: boolean): string => {
    if (isFocused) {
      return value;
    }
    return formatPriceToRupiah(parseInt(value) || 0);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <label htmlFor="minPrice" className="block text-sm font-medium text-blue-400">
          Harga Minimum
        </label>
        <input
          id="minPrice"
          type="text"
          value={getDisplayValue(minPrice, isMinFocused)}
          onChange={(e) => handleMinChange(e.target.value)}
          onFocus={() => setIsMinFocused(true)}
          onBlur={() => setIsMinFocused(false)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter minimum price"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="maxPrice" className="block text-sm font-medium text-blue-400">
          Harga Maksimum
        </label>
        <input
          id="maxPrice"
          type="text"
          value={getDisplayValue(maxPrice, isMaxFocused)}
          onChange={(e) => handleMaxChange(e.target.value)}
          onFocus={() => setIsMaxFocused(true)}
          onBlur={() => setIsMaxFocused(false)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter maximum price"
        />
      </div>

      <div className="flex gap-3">
        <Button
          type="submit"
          className="w-full shadow-none bg-blue-50 text-blue-500 hover:bg-blue-100"
          size='lg'
        >
          Terapkan Filter
        </Button>
        <ClearFilterButton />
      </div>
    </form>
  );
};
