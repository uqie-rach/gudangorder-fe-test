
export interface ProductsResponse {
  statusCode: number;
  messages: string;
  hasMore: boolean;
  pageCount: number;
  pageSize: number;
  page: number;
  data: Product[] | null;
  total: number;
}

export interface ProductResponse {
  statusCode: number;
  messages: string;
  hasMore: boolean;
  pageCount: number;
  pageSize: number;
  page: number;
  data: Product | null;
}

export interface ProductDetailResponse {
  statusCode: number;
  messages: string;
  data: Product | null;
}

export interface Product {
  id: string;
  amount: number;
  category: string | null;
  createdAt: number;
  description: string;
  link: string;
  type: string;
  status: string;
  name: string;
  limit: string | null;
  redirectUrl: string | null;
  installmentId: string | null;
  event: string | null;
  order: Order | null;
  coverImageId: string | null;
  multipleImageId: string;
  coverImage: string | null;
  multipleImage: Image[];
  qty: number | 0;
}

export interface Image {
  id: string | null;
  fileType: string;
  createdAt: number;
  updatedAt: number;
  url: string;
}

export interface Order {
  id: string;
  variant: string | null;
  length: number;
  width: number;
  weight: number;
}
