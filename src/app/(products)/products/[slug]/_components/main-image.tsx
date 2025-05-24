import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MainImageProps {
  imageUrl: string;
}

export const MainImage = ({ imageUrl }: MainImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden bg-gray-100">
      <Image
        src={imageUrl}
        alt="Product image"
        fill
        priority
        className={cn(
          "object-contain transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        sizes="(max-width: 768px) 100vw, 600px"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};
