import React, { useState } from 'react'
import { CommonDropDown } from '../index'
import { BiQr } from 'react-icons/bi'
import { FiMousePointer } from 'react-icons/fi'
import { IoStatsChart } from 'react-icons/io5'

const timeOptions = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' }
];

const StatCard = ({ icon, value, label }) => {
    return (
        <div className="bg-white dark:bg-customBrown rounded-xl p-6 border border-gray-200 dark:border-gray-800 transition-colors duration-200">
            <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-gray-100 dark:bg-white rounded-full transition-colors duration-200">
                    {icon}
                </div>
                <span className="text-3xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">{value}</span>
                <span className="text-gray-500 dark:text-gray-400 transition-colors duration-200">{label}</span>
            </div>
        </div>
    )
}

function ReportsandAnalyticsTitle() {
    const [timeFrame, setTimeFrame] = useState('monthly')

    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                    Reports & Analytics
                </h2>
                <CommonDropDown
                    options={timeOptions}
                    value={timeFrame}
                    onChange={setTimeFrame}
                    className="w-auto h-auto p-1"
                />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    icon={<BiQr className="text-2xl text-customRed transition-colors duration-200" />}
                    value="25"
                    label="Scans"
                />
                <StatCard
                    icon={<FiMousePointer className="text-2xl text-customRed transition-colors duration-200" />}
                    value="980"
                    label="Clicks"
                />
                <StatCard
                    icon={<IoStatsChart className="text-2xl text-customRed transition-colors duration-200" />}
                    value="75%"
                    label="Conversions"
                />
            </div>
        </div>
    )
}

export default ReportsandAnalyticsTitle
