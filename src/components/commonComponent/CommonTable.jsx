import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const PAGE_SIZES = [7, 10, 20, 30, 50];

// सर्च कंपोनेंट
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
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </span>
  </div>
));

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

// फ़िल्टर कंपोनेंट
const FilterDropdown = React.memo(({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef(null);

  React.useEffect(() => {
    const handleClick = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <div className="relative min-w-[180px]" ref={filterRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between bg-gray-50 dark:bg-[#232323] text-gray-700 dark:text-white px-4 py-2.5 rounded-xl text-sm border-2 border-gray-200 dark:border-customBorderColor hover:border-pink-500 dark:hover:border-pink-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-200"
        onClick={() => setIsOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{value || 'Filter'}</span>
        <svg className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-full bg-white dark:bg-[#232323] border-2 border-gray-200 dark:border-customBorderColor rounded-xl shadow-lg z-20 animate-fadeIn overflow-hidden"
          role="listbox"
        >
          {options.map(option => (
            <button
              key={option}
              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-[#2C2C2C] transition-colors duration-150
                ${value === option ? 'bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400' : 'text-gray-700 dark:text-white'}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={value === option}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

FilterDropdown.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

function getPagination(current, total) {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (let i of range) {
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

const CommonTable = ({
  columns,
  data,
  total,
  searchValue = '',
  onSearchChange,
  filterValue = '',
  filterOptions,
  onFilterChange,
  loading = false,
  renderActions,
  onSort,
  loadingComponent,
  noDataComponent,
  className = '',
  onPageChange,
  onPageSizeChange,
  currentPage = 1,
  pageSize = PAGE_SIZES[0],
}) => {
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = useCallback((key) => {
    if (!onSort) return;
    
    const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    onSort(key, direction);
  }, [sortConfig, onSort]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paginationNumbers = getPagination(currentPage, totalPages);

  return (
    <div className={`shadow-sm dark:shadow-none transition-colors duration-200 font-ttcommons ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {onSearchChange && (
          <SearchInput value={searchValue} onChange={onSearchChange} />
        )}
        {onFilterChange && filterOptions && (
          <FilterDropdown value={filterValue} options={filterOptions} onChange={onFilterChange} />
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm table-auto" role="grid">
          <thead>
            <tr className="border-b border-gray-200 dark:border-customBorderColor">
              {columns.map(col => (
                <th
                  key={col.key}
                  className={`py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300 ${col.className || ''} ${col.sortable ? 'cursor-pointer select-none' : ''}`}
                  onClick={() => col.sortable && handleSort(col.key)}
                  aria-sort={sortConfig?.key === col.key ? sortConfig.direction : undefined}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && (
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          sortConfig?.key === col.key
                            ? sortConfig.direction === 'asc'
                              ? 'transform rotate-180'
                              : ''
                            : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 15l4 4 4-4M8 9l4-4 4 4" />
                      </svg>
                    )}
                  </div>
                </th>
              ))}
              {renderActions && <th className="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">Action</th>}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (renderActions ? 1 : 0)} className="text-center py-8">
                  {loadingComponent || 'Loading...'}
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (renderActions ? 1 : 0)} className="text-center py-8">
                  {noDataComponent || 'No data found'}
                </td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr 
                  key={idx}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#181818] transition-colors"
                  role="row"
                >
                  {columns.map(col => (
                    <td 
                      key={col.key}
                      className={`py-3 px-4 ${col.className || ''}`}
                      role="gridcell"
                    >
                      {col.render ? col.render(row, idx) : row[col.key]}
                    </td>
                  ))}
                  {renderActions && (
                    <td className="py-3 px-4" role="gridcell">
                      {renderActions(row, idx)}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 px-2">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-4">
          <label className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            <span className="hidden sm:inline mr-2">Rows per page</span>
            <select
              value={pageSize}
              onChange={(e) => {
                const newSize = Number(e.target.value);
                onPageSizeChange?.(newSize);
              }}
              className="bg-gray-50 dark:bg-[#232323] border-2 border-gray-200 dark:border-customBorderColor text-gray-900 dark:text-white text-sm rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 p-2 pr-8 transition-all duration-200"
            >
              {PAGE_SIZES.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </label>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {((currentPage - 1) * pageSize) + 1}-{Math.min(currentPage * pageSize, total)} of {total}
          </span>
        </div>
        <nav className="flex items-center gap-2" aria-label="Table navigation">
          <button
            type="button"
            onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-1.5 border rounded-full border-gray-200 dark:border-customBorderColor text-gray-500 dark:text-gray-400 hover:border-pink-500 hover:text-pink-500 disabled:opacity-50 transition-all duration-200"
            aria-label="Previous page"
          >
          <FaAngleLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1">
            {paginationNumbers.map((num, i) =>
              num === '...' ? (
                <span key={i} className="px-2 py-1 text-gray-400">...</span>
              ) : (
                <button
                  key={num}
                  type="button"
                  className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                    currentPage === num
                      ? 'bg-customRed text-white border-customRed'
                      : 'border-gray-200 dark:border-customBorderColor text-gray-700 dark:text-gray-300 hover:border-customRed hover:text-customRed'
                  } transition-all duration-200 text-sm`}
                  onClick={() => onPageChange?.(Number(num))}
                  aria-label={`Go to page ${num}`}
                  aria-current={currentPage === num ? 'page' : undefined}
                >
                  {num}
                </button>
              )
            )}
          </div>
          <button
            type="button"
            onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-full border border-gray-200 dark:border-customBorderColor text-gray-500 dark:text-gray-400 hover:border-pink-500 hover:text-pink-500 disabled:opacity-50 transition-all duration-200"
            aria-label="Next page"
          >
          <FaAngleRight className="w-4 h-4" />
          </button>
        </nav>
      </div>
    </div>
  );
};

CommonTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func,
      className: PropTypes.string,
      sortable: PropTypes.bool
    })
  ).isRequired,
  data: PropTypes.array.isRequired,
  total: PropTypes.number,
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func,
  filterValue: PropTypes.string,
  filterOptions: PropTypes.arrayOf(PropTypes.string),
  onFilterChange: PropTypes.func,
  loading: PropTypes.bool,
  renderActions: PropTypes.func,
  onSort: PropTypes.func,
  loadingComponent: PropTypes.node,
  noDataComponent: PropTypes.node,
  className: PropTypes.string,
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number
};

export default CommonTable; 