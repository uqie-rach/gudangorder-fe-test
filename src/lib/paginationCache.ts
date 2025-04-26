interface CacheItem<T> {
  data: T[];
  timestamp: number;
}

export class PaginationCache<T> {
  private cache: Map<string, CacheItem<T>> = new Map();
  private readonly maxAge: number; // Cache duration in milliseconds

  constructor(maxAgeInMinutes: number = 5) {
    this.maxAge = maxAgeInMinutes * 60 * 1000;
  }

  private getCacheKey(page: number, itemsPerPage: number): string {
    return `${page}-${itemsPerPage}`;
  }

  get(page: number, itemsPerPage: number): T[] | null {
    const key = this.getCacheKey(page, itemsPerPage);
    const cached = this.cache.get(key);

    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.maxAge;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  set(page: number, itemsPerPage: number, data: T[]): void {
    const key = this.getCacheKey(page, itemsPerPage);
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  clear(): void {
    this.cache.clear();
  }
}
