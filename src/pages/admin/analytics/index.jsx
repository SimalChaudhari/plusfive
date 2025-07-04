import React from 'react'
import { AdminAnalyticsMonthlyPerformance, AdminAnalyticsRevenueAndCustomerStatus, AdminAnalyticsSecontChart, AdminLTVGrothChart } from '../../../components';

function Analytics() {
  return (
    <div>
      <AdminAnalyticsMonthlyPerformance />
      <h2 className='text-2xl font-bold mt-10 dark:text-white'>Analytics</h2>
      <AdminAnalyticsRevenueAndCustomerStatus />
      <AdminAnalyticsSecontChart />
      <AdminLTVGrothChart />
    </div>
  )
}

export default Analytics
