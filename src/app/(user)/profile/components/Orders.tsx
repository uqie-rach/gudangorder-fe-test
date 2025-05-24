'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Copy, Link2 } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/pagination';
import { Skeleton } from '@/components/ui/skeleton';
import Tooltips from '@/components/tooltips';

import { mockOrders, Order } from '@/lib/data/orders';

const Orders = () => {
  const [orders, setOrders] = useState<Order[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showing, setShowing] = useState<Order[]>([]);
  const itemsPerPage = 10;

  const landingPageUrl = 'https://www.google.com'

  async function fetchOrders() {
    const response = await new Promise<Order[]>((res) => {
      setTimeout(() => {
        res(mockOrders);
      }, 1200);
    })

    setOrders(response as Order[]);
    setShowing((response as Order[]).slice(0, itemsPerPage));
  }

  function handleCopyUrl(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      toast.success('URL copied to clipboard');
    }).catch(() => {
      toast.error('Failed to copy');
    });
  }

  useEffect(() => {
    fetchOrders();
  }, [])

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    setShowing(orders.slice(start, start + itemsPerPage));
  }, [currentPage, orders]);

  return (
    <div className="space-y-8">
      {showing.length === 0 ? (
        <>
          <OrderTableSkeleton />
        </>
      ) : (
        <>
          <div className="py-6 w-full rounded-xl md:rounded-2xl">
            <div className="w-full overflow-x-scroll">
              <table className='w-[900px] lg:w-full'>
                <thead>
                  <tr className='h-12 bg-slate-50'>
                    <th className="text-center">Order ID</th>
                    <th className="text-center">Product</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Landing Page</th>
                  </tr>
                </thead>
                <tbody>
                  {showing.map((order) => (
                    <tr key={order.id} className='text-center h-12'>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.status}</td>
                      <td>${order.total.toFixed(2)}</td>
                      <td className='space-x-2'>
                        <Tooltips description='Click to view landing page' side='left'>
                          <Button variant="outline" size="icon" asChild>
                            <Link href={landingPageUrl} target='_blank'>
                              <Link2 />
                            </Link>
                          </Button>
                        </Tooltips>
                        <Tooltips description='Copy Link Landing Page' side='left'>
                          <Button variant="outline" size="icon" onClick={() => handleCopyUrl(landingPageUrl)}><Copy /></Button>
                        </Tooltips>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            data={orders}
          />
        </>
      )}

    </div>
  );
};

export default Orders;


const OrderTableSkeleton = () => {
  return (
    <>
      <div className="py-6 w-full rounded-xl md:rounded-2xl">
        {/* Head */}
        <Skeleton className="h-8 w-[80%] mx-auto bg-slate-100 mb-4" />
        {/* Body */}
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-[80%] mx-auto" />
          ))}
        </div>

      </div>
      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <Skeleton className="h-8 w-14 bg-gray-100" />
        <Skeleton className="h-8 w-10" />
        <Skeleton className="h-8 w-14 bg-gray-100" />
      </div>
    </>
  )
}
