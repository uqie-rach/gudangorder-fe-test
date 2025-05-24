import { Image } from "./types/product";

export interface Product {
  id: number;
  buyerUrl: string;
  title: string;
  rating: number;
  price: number;
  category: string;
  images: string[];
  description: string;
  brand?: string;
  discountPercentage: number;
  weight: number;
  tags: string[];
  stock: number;
  sku: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  },
  thumbnail: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  },
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
}

export interface Review {
  id?: number;
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  gender: string;
  bio?: string;
  createdAt: string;
  updatedAt: string;
  socialMedia: SocialMedia[];
  addresses: Address[];
  // orders: Order[];
}

export interface SocialMedia {
  id: number;
  userId: number;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: number;
  category: 'billing' | 'shipping';
  userId: number;
  address: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice: number
  quantity: number
  image: string
  inStock: boolean
  vendor: string
}


export interface Brand {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface ProductPreviewProps {
  images: string[];  // Array of image URLs
}

export interface ThumbnailListProps {
  images: Image[];
  activeIndex: number;
  onImageClick: (index: number) => void;
}

export interface MainImageProps {
  imageUrl: string;
}
