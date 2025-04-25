import React, { useCallback, useMemo, useState } from 'react';
import { PaginationCache } from '@/lib/paginationCache';
import { calculatePagination, PaginationProps } from '@/lib/pagination';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Pagination<T>({
  data,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps<T>) {
  // Initialize cache
  const [cache] = useState(() => new PaginationCache<T>());

  // Calculate pagination info
  const paginationInfo = useMemo(
    () => calculatePagination(data.length, itemsPerPage, currentPage),
    [data.length, itemsPerPage, currentPage]
  );

  // Get paginated data with cache
  useCallback(() => {
    const cachedData = cache.get(currentPage, itemsPerPage);
    if (cachedData) return cachedData;

    const { startIndex, endIndex } = paginationInfo;
    const pageData = data.slice(startIndex, endIndex + 1);
    cache.set(currentPage, itemsPerPage, pageData);
    return pageData;
  }, [cache, currentPage, itemsPerPage, data, paginationInfo]);

  // Generate page numbers
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const { totalPages, currentPage: current } = paginationInfo;

    // Always show first page
    pages.push(1);

    // Calculate range around current page
    const start = Math.max(2, current - 2);
    const end = Math.min(totalPages - 1, current + 2);

    // Add ellipsis after first page if needed
    if (start > 2) pages.push('...');

    // Add pages in range
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis before last page if needed
    if (end < totalPages - 1) pages.push('...');

    // Always show last page if there is more than one page
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  }, [paginationInfo]);

  const handlePageChange = (page: number) => {
    window.scrollTo(0, 0); // Scroll to top on page change
    if (page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant='outline'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={!paginationInfo.hasPrevPage}
          className={cn(
            "px-3 py-1 rounded border",
            !paginationInfo.hasPrevPage && "opacity-50 cursor-not-allowed"
          )}
        >
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => (
            <React.Fragment key={index}>
              {typeof page === 'number' ? (
                <Button
                  variant='outline'
                  onClick={() => handlePageChange(page)}
                  className={cn(
                    "px-3 py-1",
                    page === currentPage && "bg-blue-500 text-white"
                  )}
                >
                  {page}
                </Button>
              ) : (
                <span className="px-2">...</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <Button
          variant='outline'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!paginationInfo.hasNextPage}
          className={cn(
            "px-3 py-1 rounded border",
            !paginationInfo.hasNextPage && "opacity-50 cursor-not-allowed"
          )}
        >
          Next
        </Button>
      </div>

      <div className="text-sm text-gray-500">
        Showing {paginationInfo.startIndex + 1} to{" "}
        {paginationInfo.endIndex + 1} of {data.length} entries
      </div>
    </div>
  );
}
