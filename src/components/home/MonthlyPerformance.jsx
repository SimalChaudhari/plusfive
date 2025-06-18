import React, { useState } from 'react';
import { Area, AreaChart, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 15 },
  { name: 'Mar', value: 12 },
  { name: 'Apr', value: 18 },
  { name: 'May', value: 14 },
  { name: 'Jun', value: 16 },
  { name: 'Jul', value: 19 },
];

const timeOptions = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'yearly', label: 'Yearly' }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white font-medium">
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const StatCard = ({ title, value, change, trend, color }) => {
  return (
    <div className="bg-white dark:bg-customBrown rounded-xl p-6 border border-gray-200 dark:border-gray-800 relative">
      <span className="text-gray-900 dark:text-white text-xl mb-2">{title}</span>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <span className="text-5xl font-semibold text-gray-900 dark:text-white mb-2">{value}</span>
          <div className="flex items-center justify-center">
            <span className={`text-sm mt-3 ${color === 'green' ? 'text-customGreen' : 'text-customRed'}`}>
              {change > 0 ? '+' : ''}{change}%
            </span>
            <span className="text-sm text-customBlack dark:text-white ml-2 mt-3">{trend}</span>
          </div>
        </div>
        <div className="w-24 h-12">
          <ResponsiveContainer width="100%" height={88}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="test-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="6.34%" stopColor="#FF542A" stopOpacity={0.56} />
                  <stop offset="60.92%" stopColor="#FF542A" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="value"
                stroke="#FF542A"
                strokeWidth={1.12}
                fill="url(#test-gradient)"
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

function MonthlyPerformance() {
  const [timeFrame, setTimeFrame] = useState('monthly');

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">
          Monthly Performance
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Recovered Customers"
          value="95"
          change={12}
          trend="Increase"
          color="green"
        />
        <StatCard
          title="Recovered Revenue"
          value="$18k"
          change={-5}
          trend="Decrease"
          color="red"
        />
        <StatCard
          title="Lost Revenue"
          value="$122"
          change={3}
          trend="Increase"
          color="green"
        />
        <StatCard
          title="Customers LTV"
          value="6.4/m"
          change={3}
          trend="Increase"
          color="green"
        />
      </div>
    </div>
  );
}

export default MonthlyPerformance;
