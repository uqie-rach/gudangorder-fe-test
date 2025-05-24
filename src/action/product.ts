'use server';

import { mayarProducts } from '@/lib/data/products';
import { ProductDetailResponse, ProductsResponse } from '@/lib/types/product';
import 'server-only';

export type QueryParams = {
  key?: string;
  value?: string | number | boolean;
}

interface GetProductsActionParams {
  query?: QueryParams[]
}

export async function getProductsAction({
  query
}: GetProductsActionParams): Promise<ProductsResponse> {

  // Simulate a delay for the API call
  const res: ProductsResponse = await new Promise((res) => {
    setTimeout(() => {
      res(mayarProducts);
    }, 1000);
  });

  let filteredProducts;

  if (query?.length !== 0) {
    filteredProducts = res?.data?.filter((product) => {
      let isValid = true;

      query?.forEach((q) => {
        if (q.key === 'category' && q.value) {
          console.log('ada kategori')
          isValid = isValid && product.category === q.value;
        }

        if (q.key === 'minPrice' && q.value) {
          console.log('ada minPrice')
          isValid = isValid && product.amount >= Number(q.value);
        }

        if (q.key === 'maxPrice' && q.value) {
          console.log('ada maxPrice')
          isValid = isValid && product.amount <= Number(q.value);
        }
      });

      return isValid;
    });
  }

  const finalResponse: ProductsResponse = {
    ...res,
    data: filteredProducts!,
  }

  console.log(finalResponse)

  return finalResponse;


  // Real api call
  // const products = await fetch(`${process.env.NEXT_PUBLIC_MAYAR_API_BASE_URL}/product/type/physical_product`, {
  //   cache: "no-store",
  //   headers: {
  //     'Authorization': `Bearer ${process.env.MAYAR_API_KEY}`,
  //   }
  // });

  // if (!products.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await products.json();

  // console.log('from node server', data)

  // return data;
}

export async function getProductByIdAction(id: string): Promise<ProductDetailResponse> {
  // Simulate a delay for the API call
  const res: ProductsResponse = await new Promise((res) => {
    setTimeout(() => {
      res(mayarProducts);
    }, 1000);
  });

  const product = res.data?.find((product) => product.id === id);

  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }

  return {
    statusCode: 200,
    messages: "success",
    data: product,
  };

  // Real api call
  // const product = await fetch(`${process.env.NEXT_PUBLIC_MAYAR_API_BASE_URL}/product/${id}`, {
  //   cache: "no-store",
  //   headers: {
  //     'Authorization': `Bearer ${process.env.MAYAR_API_KEY}`,
  //   }
  // });

  // if (!product.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await product.json();

  // console.log('from node server', data)

  // return data;
}
