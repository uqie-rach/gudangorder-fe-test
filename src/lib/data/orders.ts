export interface Order {
  id: string;
  customer: string;
  total: number;
  product: string;
  quantity: number;
  status: string;
  createdAt: string;
}

export const mockOrders: Order[] = Array.from({ length: 50 }).map((_, i) => ({
  id: `ORD-${i + 1}`,
  customer: `Customer ${i + 1}`,
  total: Math.floor(Math.random() * 1000) + 100,
  product: `Product ${i + 1}`,
  quantity: Math.floor(Math.random() * 10) + 1,
  status: ["pending", "paid", "shipped", "cancelled"][i % 4],
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
}));
