import { useState } from 'react';

import { ThumbnailList } from './thumbnail-list';
import { MainImage } from './main-image';

import { ProductPreviewProps } from '@/lib/types';

export const ProductPreview = ({ images }: ProductPreviewProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
        <MainImage imageUrl={images[activeIndex]} />
      </div>
    </div>
  );
};
