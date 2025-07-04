import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight, FaAngleLeft, FaPlus } from 'react-icons/fa';
import CommonDateRange from './CommonDateRange';
import CommonButton from './CommonButton';
import CommonOutlineButton from './CommonOutlineButton';
import { FiUpload } from 'react-icons/fi';
import CommonPagination from './CommonPagination';

const PAGE_SIZES = [7, 10, 20, 30, 50];

// Search component
const SearchInput = React.memo(({ value, onChange }) => (
  <div className="relative flex-1">
    <input
      type="text"
      placeholder="Search..."
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      className=" pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-200 dark:bg-customBrown bg-white md:w-auto w-full "
      aria-label="Search table"
    />
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true">
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
    </span>
  </div>
));

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

// Filter component
const FilterDropdown = React.memo(({ value, options, onChange, placeholder = 'Filter' }) => {
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
    <div className="relative min-w-[150px]" ref={filterRef}>
      <button
        type="button"
        className="w-full flex items-center justify-between bg-gray-50 dark:bg-customBrown text-gray-700 dark:text-white px-4 py-2.5 rounded-xl text-sm border-2 border-gray-200 dark:border-customBorderColor hover:border-pink-500 dark:hover:border-pink-500 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-200"
        onClick={() => setIsOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{value || placeholder}</span>
        <svg className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-full bg-white dark:bg-customBrown border-2 border-gray-200 dark:border-customBorderColor rounded-xl shadow-lg z-20 animate-fadeIn overflow-hidden"
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
              {option || placeholder}
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
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
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

const CommonAdminTable = ({
  columns,
  data,
  total,
  searchValue = '',
  onSearchChange,
  filterValue = '',
  filterOptions,
  onFilterChange,
  planValue = '',
  planOptions,
  onPlanChange,
  roleValue = '',
  roleOptions,
  onRoleChange,
  dateRange,
  onDateRangeChange,
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
  const [range, setRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ]);
  const [showPicker, setShowPicker] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleSort = useCallback((key) => {
    if (!onSort) return;

    const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    onSort(key, direction);
  }, [sortConfig, onSort]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const paginationNumbers = getPagination(currentPage, totalPages);

  return (
    <div className={`shadow-sm dark:shadow-none transition-colors duration-200 font-ttcommons bg-white dark:bg-customBrown ${className}`}>
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
        {/* Filters */}
        <div className="flex flex-col xl:flex-row gap-3 md:gap-4 items-center flex-shrink-0 w-full md:w-auto">
          {/* हर filter को min-w-[150px] या w-48 दें */}
          {onSearchChange && (
            <div className="w-full xl:w-56">
              <SearchInput value={searchValue} onChange={onSearchChange} />
            </div>
          )}
          <div className='flex flex-col sm:flex-row gap-3 md:gap-4 items-center flex-shrink-0 w-full md:w-auto'>
            {onPlanChange && planOptions && (
              <div className="w-full md:w-48">
                <FilterDropdown value={planValue} options={['', ...planOptions]} onChange={onPlanChange} placeholder="Plan" />
              </div>
            )}
            {onFilterChange && filterOptions && (
              <div className="w-full md:w-48">
                <FilterDropdown value={filterValue} options={['', ...filterOptions]} onChange={onFilterChange} placeholder="Status" />
              </div>
            )}
          </div>
          {/* Desktop: Role & Date */}
          <div className="hidden md:flex gap-4">
            {onRoleChange && roleOptions && (
              <div className="w-48">
                <FilterDropdown value={roleValue} options={['', ...roleOptions]} onChange={onRoleChange} placeholder="Role" />
              </div>
            )}
            {onDateRangeChange && (
              <div className="w-48">
                <CommonDateRange
                  startDate={dateRange?.startDate}
                  endDate={dateRange?.endDate}
                  onChange={onDateRangeChange}
                />
              </div>
            )}
          </div>
          {/* Mobile: More/Less Filters logic */}
          {(onRoleChange || onDateRangeChange) && !showMoreFilters && (
            <button
              className="md:hidden w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white bg-gray-50 dark:bg-customBrown font-medium flex items-center gap-2 justify-center"
              onClick={() => setShowMoreFilters(true)}
              type="button"
            >
              More Filters
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
          )}
          {/* Mobile: Inline expanded filters */}
          {showMoreFilters && (
            <div className="w-full flex flex-col gap-3 md:hidden animate-fadeIn">
              {onRoleChange && roleOptions && (
                <FilterDropdown value={roleValue} options={['', ...roleOptions]} onChange={onRoleChange} placeholder="Role" />
              )}
              {onDateRangeChange && (
                <CommonDateRange
                  startDate={dateRange?.startDate}
                  endDate={dateRange?.endDate}
                  onChange={onDateRangeChange}
                />
              )}
              <button
                className="mt-2 w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white bg-gray-50 dark:bg-customBrown font-medium flex items-center gap-2 justify-center"
                onClick={() => setShowMoreFilters(false)}
                type="button"
              >
                Less Filters
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 15l7-7 7 7" /></svg>
              </button>
            </div>
          )}
        </div>
        {/* Export/Add User buttons rightmost */}
        <div className="flex gap-3 flex-wrap">
          <CommonOutlineButton
            text="Export"
            className="!py-2.5 !text-[15px] w-auto rounded-xl border-2 border-gray-200 dark:border-gray-800"
            icon={<FiUpload className="text-lg" />}
          />
          <CommonButton
            text="Add User"
            className=" !text-[15px] w-auto rounded-xl px-4 py-2"
            icon={<FaPlus className="text-lg font-bold" />}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm table-auto" role="grid">
          <thead>
            <tr className="border-b border-gray-200 dark:border-customBorderColor">
              {columns.map(col => (
                <th
                  key={col.key}
                  className={`py-3 px-4 text-left font-semibold text-black dark:text-white ${col.className || ''} ${col.sortable ? 'cursor-pointer select-none' : ''}`}
                  onClick={() => col.sortable && handleSort(col.key)}
                  aria-sort={sortConfig?.key === col.key ? sortConfig.direction : undefined}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && (
                      <svg
                        className={`w-4 h-4 transition-transform ${sortConfig?.key === col.key
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


                  className={
                    idx % 2 === 0
                      ? "border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-[#181818] transition-colors dark:bg-[#181818] bg-gray-100"
                      : "border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-[#181818] transition-colors"
                  }
                  role="row"
                >
                  {columns.map(col => (
                    <td
                      key={col.key}
                      className={`py-3 px-4 dark:text-white text-black ${col.className || ''}`}
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

      <div className="mt-6">
        <CommonPagination
          currentPage={currentPage}
          pageSize={pageSize}
          total={total}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      </div>
    </div>
  );
};

CommonAdminTable.propTypes = {
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
  planValue: PropTypes.string,
  planOptions: PropTypes.arrayOf(PropTypes.string),
  onPlanChange: PropTypes.func,
  roleValue: PropTypes.string,
  roleOptions: PropTypes.arrayOf(PropTypes.string),
  onRoleChange: PropTypes.func,
  dateRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
  }),
  onDateRangeChange: PropTypes.func,
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

export default CommonAdminTable; 