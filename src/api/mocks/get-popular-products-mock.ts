import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 1', amount: 30 },
    { product: 'Pizza 2', amount: 25 },
    { product: 'Pizza 3', amount: 15 },
    { product: 'Pizza 4', amount: 10 },
    { product: 'Pizza 5', amount: 5 },
  ])
})
