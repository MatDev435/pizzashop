import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { GetDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { GetDayOrdersAmountMock } from './get-day-orders-amount'
import { GetMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { GetMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { GetMonthRevenueMock } from './get-month-revenue-mock'
import { GetPopularProductsMock } from './get-popular-products-mock'
import { RegisterRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  RegisterRestaurantMock,
  GetDayOrdersAmountMock,
  GetMonthOrdersAmountMock,
  GetMonthCanceledOrdersAmountMock,
  GetMonthRevenueMock,
  GetDailyRevenueInPeriodMock,
  GetPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
