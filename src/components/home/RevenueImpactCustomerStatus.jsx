import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, YAxis, CartesianGrid, XAxis, Tooltip } from 'recharts';
import { IoChevronDownOutline } from 'react-icons/io5';
import { CommonDropDown } from '../index';

const monthlyData = [
  { month: 'Jan', value: 32 },
  { month: 'Feb', value: 24 },
  { month: 'Mar', value: 42 },
  { month: 'Apr', value: 18 },
  { month: 'May', value: 28 },
  { month: 'Jun', value: 24 },
  { month: 'Jul', value: 34 },
];

const weeklyData = [
  { month: 'W1', value: 10 },
  { month: 'W2', value: 18 },
  { month: 'W3', value: 22 },
  { month: 'W4', value: 15 },
];

const lastMonthData = [
  { month: 'Week 1', value: 8 },
  { month: 'Week 2', value: 12 },
  { month: 'Week 3', value: 16 },
  { month: 'Week 4', value: 10 },
];

const thisMonthData = [
  { month: 'Week 1', value: 14 },
  { month: 'Week 2', value: 18 },
  { month: 'Week 3', value: 20 },
  { month: 'Week 4', value: 16 },
];

const customerData = [
  { name: 'Active', value: 680, percentage: '22%', color: '#6366F1' },
  { name: 'At Risk', value: 75, percentage: '10%', color: '#F97316' },
  { name: 'Lost', value: 58, percentage: '8%', color: '#EF4444' },
  { name: 'Recovered', value: 240, percentage: '15%', color: '#EC4899' },
];

const CustomYAxisTick = ({ x, y, payload }) => {
  if (payload.value === 0) return <text x={x} y={y} dy={3} fill="#6B7280" fontSize={12} textAnchor="end">0%</text>;
  return (
    <text x={x} y={y} dy={3} fill="#6B7280" fontSize={12} textAnchor="end">
      {payload.value}k
    </text>
  );
};

const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} dy={16} fill="#6B7280" fontSize={12} textAnchor="middle">
      {payload.value}
    </text>
  );
};

const FILTERS = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Last Month', value: 'lastMonth' },
  { label: 'This Month', value: 'thisMonth' },
];

const dataMap = {
  monthly: monthlyData,
  weekly: weeklyData,
  lastMonth: lastMonthData,
  thisMonth: thisMonthData,
};

function RevenueImpactCustomerStatus() {
  const [selectedFilter, setSelectedFilter] = useState('monthly');
  const [activeIndex, setActiveIndex] = useState(null);

  const chartData = dataMap[selectedFilter];

  // डेमो वैल्यू इंडिकेटर (hover पर दिखाने के लिए)
  const getValueIndicator = (entry) => (
    <div className="bg-gray-100 dark:bg-[#2C2C2C] px-4 py-2 rounded-lg shadow-lg transition-colors duration-200">
      <div className="text-gray-900 dark:text-white text-xl font-medium">
        ${entry.value * 500 + 10000}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-sm">
        {entry.month || 'Month'} 2025
      </div>
    </div>
  );

  // पाई चार्ट टूलटिप कंटेंट
  const getPieChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-100 dark:bg-[#2C2C2C] px-4 py-2 rounded-lg shadow-lg transition-colors duration-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></div>
            <span className="text-gray-900 dark:text-white font-medium">{data.name}</span>
          </div>
          <div className="text-gray-900 dark:text-white text-xl font-medium">
            {data.value.toLocaleString()} Users
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {data.percentage} of Total
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-ttcommons">
      {/* Revenue Impact Chart */}
      <div className="bg-white dark:bg-customBrown rounded-xl p-6 border border-gray-200 dark:border-gray-800 relative shadow-sm dark:shadow-none transition-colors duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-gray-900 dark:text-white">Revenue Impact</h2>
          <CommonDropDown
            options={FILTERS}
            value={selectedFilter}
            onChange={setSelectedFilter}
            className="w-[10rem] h-auto p-1"
          />
        </div>
        <div className="h-[300px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 40, bottom: 20 }}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false} 
                stroke="#D1D5DB"
                opacity={0.4}
              />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={<CustomXAxisTick />}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={<CustomYAxisTick />}
                tickCount={5}
                domain={[0, 40]}
              />
              <Bar 
                dataKey="value" 
                fill="#6366F1"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
                onMouseOver={(_, idx) => setActiveIndex(idx)}
              />
              <Tooltip
                cursor={{ fill: 'rgba(99,102,241,0.1)' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return getValueIndicator(payload[0].payload);
                  }
                  return null;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Status Chart */}
      <div className="bg-white dark:bg-customBrown rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none transition-colors duration-200">
        <h2 className="text-xl text-gray-900 dark:text-white mb-6">Customer Status Breakdown</h2>
        
        <div className="flex justify-center">
          <div className="w-[250px] h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  startAngle={90}
                  endAngle={450}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {customerData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      strokeWidth={activeIndex === index ? 2 : 0}
                      stroke={entry.color}
                      style={{
                        filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  content={getPieChartTooltip}
                  cursor={false}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-6">
          {customerData.map((item, index) => (
            <div key={index} className="flex-col items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
              <span className="text-gray-900 dark:text-white mr-2">{item.name}</span>
              </div>
              <span className="text-gray-600 dark:text-gray-400 ml-5">{item.value} ({item.percentage})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevenueImpactCustomerStatus;
