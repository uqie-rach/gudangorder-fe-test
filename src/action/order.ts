'use server';

import { mockOrders, Order } from "@/lib/data/orders";

export interface OrderResponse {
  data: Order[];
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export async function fetchOrders(page = 1, pageSize = 12): Promise<OrderResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const data = mockOrders.slice(start, end);
      resolve({
        data,
        total: mockOrders.length,
        page,
        pageSize,
        pageCount: Math.ceil(mockOrders.length / pageSize),
      });
    }, 800);
  });
}
