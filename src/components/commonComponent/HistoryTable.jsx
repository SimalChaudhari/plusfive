import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CommonOutlineButton from './CommonOutlineButton';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const SearchInput = React.memo(({ value, onChange }) => (
    <div className="relative flex-1">
        <input
            type="text"
            placeholder="Search..."
            value={value || ''}
            onChange={e => onChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#232323] border-2 border-gray-200 dark:border-customBorderColor rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-200"
            aria-label="Search table"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </span>
    </div>
));
SearchInput.propTypes = { value: PropTypes.string, onChange: PropTypes.func.isRequired };
SearchInput.displayName = 'SearchInput';

const FilterDropdown = React.memo(({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    React.useEffect(() => {
        const handleClick = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) setIsOpen(false);
        };
        if (isOpen) document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isOpen]);

    return (
        <div className="relative min-w-[180px]" ref={filterRef}>
            <button type="button" className="w-full flex items-center justify-between bg-gray-50 dark:bg-[#232323] text-gray-700 dark:text-white px-4 py-2.5 rounded-xl text-sm border-2 border-gray-200 dark:border-customBorderColor hover:border-pink-500 dark:hover:border-pink-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-200" onClick={() => setIsOpen(o => !o)}>
                <span>{value || 'Filter'}</span>
                <svg className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white dark:bg-[#232323] border-2 border-gray-200 dark:border-customBorderColor rounded-xl shadow-lg z-20 animate-fadeIn overflow-hidden">
                    {options.map(option => (
                        <button key={option} className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-[#2C2C2C] transition-colors duration-150 ${value === option ? 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400' : 'text-gray-700 dark:text-white'}`} onClick={() => { onChange(option); setIsOpen(false); }}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
});
FilterDropdown.propTypes = { value: PropTypes.string, options: PropTypes.arrayOf(PropTypes.string).isRequired, onChange: PropTypes.func.isRequired };
FilterDropdown.displayName = 'FilterDropdown';

const PAGE_SIZES = [7, 10, 20, 30, 50];

function getPagination(current, total) {
    const delta = 2;
    const range = [];
    let l;

    if (total <= 1) return [1];

    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            range.push(i);
        }
    }

    const rangeWithDots = [];
    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l > 2) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}

const HistoryTable = ({
    data,
    total,
    currentPage = 1,
    pageSize = PAGE_SIZES[0],
    onPageChange,
    onPageSizeChange,
    searchValue,
    onSearchChange,
    filterValue,
    filterOptions,
    onFilterChange,
    loading = false,
    loadingComponent,
    noDataComponent,
}) => {
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const paginationNumbers = getPagination(currentPage, totalPages);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {onSearchChange && (
                    <SearchInput value={searchValue} onChange={onSearchChange} />
                )}
                {onFilterChange && filterOptions && (
                    <FilterDropdown value={filterValue} options={filterOptions} onChange={onFilterChange} />
                )}
            </div>

            <div className="space-y-4">
                {loading ? (
                    loadingComponent || <div className="text-center py-8 text-gray-500 dark:text-gray-400">Loading...</div>
                ) : (!data || data.length === 0) ? (
                    noDataComponent || <div className="text-center py-8 text-gray-500 dark:text-gray-400">No history found.</div>
                ) : (
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 dark:bg-customGray p-4 rounded-xl">
                            <div className="flex items-center space-x-4 mb-4 sm:mb-0 flex-1">
                                <div className={`shrink-0 p-3 rounded-lg ${item.iconBgColor || 'bg-[#5965F9]'}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-base text-gray-900 dark:text-white">{item.title}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                                </div>
                            </div>
                            <div className="mb-4 sm:mb-0 text-center flex-1">
                                <p className="font-semibold text-lg text-gray-900 dark:text-white">{item.value}</p>
                                {item.statusInfo && <p className={`text-sm font-semibold ${item.statusInfo.className}`}>{item.statusInfo.text}</p>}
                            </div>
                            <div className="flex-1 flex justify-end">
                                {item.action}
                            </div>
                        </div>
                    ))
                )}
            </div>
            {total > 0 && !loading && (
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 px-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-4">
                        <label className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <span className="hidden sm:inline mr-2">Rows per page</span>
                            <select
                                value={pageSize}
                                onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
                                className="bg-gray-50 dark:bg-[#232323] border-2 border-gray-200 dark:border-customBorderColor text-gray-900 dark:text-white text-sm rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 pr-8 transition-all duration-200"
                            >
                                {PAGE_SIZES.map(size => (<option key={size} value={size}>{size}</option>))}
                            </select>
                        </label>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {`${((currentPage - 1) * pageSize) + 1}-${Math.min(currentPage * pageSize, total)} of ${total}`}
                        </span>
                    </div>
                    <nav className="flex items-center gap-2" aria-label="Table navigation">
                        <button type="button" onClick={() => onPageChange?.(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-1.5 border rounded-full border-gray-200 dark:border-customBorderColor text-gray-500 dark:text-gray-400 hover:border-pink-500 hover:text-pink-500 disabled:opacity-50 transition-all duration-200" aria-label="Previous page">
                            <FaAngleLeft className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-1">
                            {paginationNumbers.map((num, i) =>
                                num === '...' ? (<span key={i} className="px-2 py-1 text-gray-400">...</span>) : (
                                <button key={num} type="button" className={`w-8 h-8 flex items-center justify-center rounded-full border ${currentPage === num ? 'bg-customRed text-white border-customRed' : 'border-gray-200 dark:border-customBorderColor text-gray-700 dark:text-gray-300 hover:border-customRed hover:text-customRed'} transition-all duration-200 text-sm`} onClick={() => onPageChange?.(Number(num))} aria-label={`Go to page ${num}`} aria-current={currentPage === num ? 'page' : undefined}>
                                    {num}
                                </button>
                            ))}
                        </div>
                        <button type="button" onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-1.5 rounded-full border border-gray-200 dark:border-customBorderColor text-gray-500 dark:text-gray-400 hover:border-pink-500 hover:text-pink-500 disabled:opacity-50 transition-all duration-200" aria-label="Next page">
                            <FaAngleRight className="w-4 h-4" />
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
};

HistoryTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.node.isRequired,
        iconBgColor: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        value: PropTypes.string.isRequired,
        statusInfo: PropTypes.shape({
            text: PropTypes.string.isRequired,
            className: PropTypes.string,
        }),
        action: PropTypes.node,
    })).isRequired,
    total: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
    searchValue: PropTypes.string,
    onSearchChange: PropTypes.func,
    filterValue: PropTypes.string,
    filterOptions: PropTypes.arrayOf(PropTypes.string),
    onFilterChange: PropTypes.func,
    loading: PropTypes.bool,
    loadingComponent: PropTypes.node,
    noDataComponent: PropTypes.node,
};

export default HistoryTable; 