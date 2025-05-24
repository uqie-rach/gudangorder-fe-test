import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useFilters } from "@/store/use-filters";


export default function ClearFilterButton() {
  const { clearFilters, priceRange, category } = useFilters();

  // if priceRange is [0, 0] and category is "all", then no filters are applied
  const isDisabled = priceRange[0] === 0 && priceRange[1] === 0 && category === "all";

  const handleClearFilters = () => {
    clearFilters();
  }

  return (
    <>
      {
        !isDisabled ? (
          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="mb-4 shadow-none border-0 bg-destructive/10 hover:bg-destructive/20 text-destructive hover:text-destructive"
            size='lg'
          >
            <X /> Reset Filters
          </Button>
        ) : null
    }
    </>
  )
}
