"use client";

import { Copy, Images, PictureInPicture2, ShoppingBag } from 'lucide-react';
import React from 'react'
import { toast } from 'sonner';

import Tooltips from '@/components/tooltips';
import { Button } from '@/components/ui/button';

interface ResourceTabProps {
  assetUrl: string;
  buyerUrl: string;
  productId: string;
}

export default function ResourceTab(
  {
    assetUrl, buyerUrl, productId
  }: ResourceTabProps
) {

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('URL berhasil disalin ke clipboard', {
        richColors: true,
      })
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  return (
    <div className='space-y-4'>
      <div>
        <h5>Link aset produk</h5>
        <div className="cursor-pointer flex items-center">
          <Images />
          <Button
            variant='link'
            className='px-4 py-2'
            onClick={() => {
              window.open(assetUrl, '_blank')
            }}
          >
            {assetUrl}
          </Button>
          <Tooltips
            description='Salin URL'
            side='top'
          >
            <Button
              variant='link'
              className='rounded-lg text-gray-600 hover:bg-gray-100'
              onClick={() => copyToClipboard(assetUrl)}
              size='icon'
            >
              <Copy className='size-4' />
            </Button>
          </Tooltips>
        </div>
      </div>
      <div>
        <h5>Link untuk pembeli</h5>
        <div className="cursor-pointer flex items-center">
          <ShoppingBag />
          <Button
            variant='link'
            className='px-4 py-2'
            onClick={() => {
              window.open(buyerUrl, '_blank')
            }}
          >
            {buyerUrl}
          </Button>
          <Tooltips
            description='Salin URL'
            side='top'
          >
            <Button
              variant='link'
              className='rounded-lg text-gray-600 hover:bg-gray-100'
              onClick={() => copyToClipboard(buyerUrl)}
              size='icon'
            >
              <Copy className='size-4' />
            </Button>
          </Tooltips>
        </div>
      </div>
      <div>
        <h5>Link landing page</h5>
        <div className="cursor-pointer flex items-center">
          <PictureInPicture2 />
          <Button
            variant='link'
            className='px-4 py-2'
            onClick={() => {
              window.open(`/products/landing-page/${productId}`, '_blank')
            }}
          >
            {productId}
          </Button>
          <Tooltips
            description='Salin URL'
            side='top'
          >
            <Button
              variant='link'
              className='rounded-lg text-gray-600 hover:bg-gray-100'
              onClick={() => copyToClipboard(buyerUrl)}
              size='icon'
            >
              <Copy className='size-4' />
            </Button>
          </Tooltips>
        </div>
      </div>
    </div>
  )
}
