import { useState } from 'react';

import { ThumbnailList } from './thumbnail-list';
import { MainImage } from './main-image';

import { Image } from '@/lib/types/product';

interface ProductPreviewProps {
  images: Image[];
}
export const ProductPreview = ({ images }: ProductPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  console.log('images', images);
  // Guard against empty images array
  if (!images?.length) {
    return null;
  }

  return (
    <div className="flex flex-col-reverse gap-4 p-4">
      <div className="w-full">
        <ThumbnailList
          images={images}
          activeIndex={activeIndex}
          onImageClick={setActiveIndex}
        />
      </div>
      <div className="flex-1">
        <MainImage imageUrl={images[activeIndex].url} />
      </div>
    </div>
  );
};
