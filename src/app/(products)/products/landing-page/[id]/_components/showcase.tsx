'use client'

import Tooltips from "@/components/tooltips";
import { Button } from "@/components/ui/button";
import { ProductsResponse } from "@/lib/types/product"
import { Download, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { usePDF } from 'react-to-pdf';
import { toast } from "sonner";

interface ShowcaseProps {
  data: ProductsResponse
}

export default function Showcase(
  { data }: ShowcaseProps
) {
  const product = data?.data?.[0];
  const { toPDF, targetRef } = usePDF({ filename: `${product?.name.replace(' ', '-').toLowerCase()}.pdf` });

  const pathname = usePathname();

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${process.env.NEXT_PUBLIC_BASE_URL}${pathname} berhasil disalin ke clipboard`, {
        richColors: true,
      })
    }).catch(() => {
      toast.error('Gagal menyalin URL', {
        richColors: true,
      })
    });
  }

  return (
    <div>
      <div className="flex items-center gap-3 justify-center">
        <Tooltips
          description="Download PDF"
          side="top"
        >
          <Button
            className="shadow-none"
            variant='outline'
            size='lg'
            onClick={() => toPDF()}
          >
            <Download /> Unduh PDF
          </Button>
        </Tooltips>
        <Tooltips
          description="Salin URL"
          side="top"
        >
          <Button
            className="shadow-none"
            variant='outline'
            size='lg'
            onClick={() => copyToClipboard(pathname)}
          >
            <Share2 /> Bagikan Link
          </Button>
        </Tooltips>
      </div>
      {/* Image grid */}
      <div className="p-2 mt-3" ref={targetRef}>
        <h2 className="text-2xl font-bold text-center m-0">{product?.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {product?.multipleImage?.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image?.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div >
    </div>
  )
}
