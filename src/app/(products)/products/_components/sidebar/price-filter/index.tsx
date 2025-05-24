
import React from 'react'
import { toast } from 'sonner';

import { Filter } from './filter'

import { useFilters } from '@/store/use-filters'

const PriceFilter = () => {
  const { setPriceRange } = useFilters();

  const handleSubmit = (values: { min: number; max: number }) => {
    if (values.max === 0 && values.min === 0) {
      toast.error("Harga tidak boleh 0", { richColors: true });
      return;
    }

    if (values.max !== 0 && values.min > values.max) {
      toast.error("Harga minimum tidak boleh lebih besar dari harga maksimum", { richColors: true });
      return;
    }

    setPriceRange([values.min, values.max]);
  }
  return (
    <div className="tp-shop-widget mb-35">
      <h3 className="text-lg font-semibold">Filter Harga</h3>

      <Filter
        initialMin={0}
        initialMax={0}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default PriceFilter
