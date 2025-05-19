import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ThumbnailListProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export const ThumbnailList = ({
  images,
  activeIndex,
  onImageClick
}: ThumbnailListProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll active thumbnail into view
  useEffect(() => {
    const activeThumb = scrollRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    activeThumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [activeIndex]);

  return (
    <div
      ref={scrollRef}
      className="flex justify-center items-center gap-2 max-h-[600px] overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-gray-300"
    >
      {images.map((imageUrl, index) => (
        <button
          key={index}
          onClick={() => onImageClick(index)}
          className={cn(
            "relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all",
            "hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary",
            activeIndex === index && "ring-2 ring-primary"
          )}
          data-index={index}
          aria-label={`View product image ${index + 1}`}
        >
          <Image
            src={imageUrl}
            alt={`Product image ${index + 1}`}
            fill
            className={cn(
              "object-cover transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            sizes="80px"
            onLoadingComplete={() => setIsLoading(false)}
          />
        </button>
      ))}
    </div>
  );
};
