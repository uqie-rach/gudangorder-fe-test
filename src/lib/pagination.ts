export interface PaginationProps<T> {
  data: T[];
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface PaginationInfo {
  totalPages: number;
  currentPage: number;
  startIndex: number;
  endIndex: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const calculatePagination = (
  totalItems: number,
  itemsPerPage: number,
  currentPage: number
): PaginationInfo => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  return {
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};
