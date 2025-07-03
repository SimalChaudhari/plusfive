import React, { useState, useMemo } from 'react';
import CommonAdminTable from '../../commonComponent/CommonAdminTable';
import adminData from '../../../jsonData/AdminUserData.json';
import CommonDateRange from '../../commonComponent/CommonDateRange';
import { format } from 'date-fns';
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsPatchCheck, BsTag } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

const getUnique = (arr, key) => Array.from(new Set(arr.map(item => item[key]))).filter(Boolean);

const columns = [
  {
    key: 'checkbox',
    label: (
      <input type="checkbox" aria-label="Select all" />
    ),
    render: (row, idx, { isSelected, onSelect }) => (
      <input
        type="checkbox"
        checked={isSelected(row)}
        onChange={() => onSelect(row)}
        aria-label={`Select row ${row.name}`}
      />
    ),
    className: 'w-8',
  },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'phone', label: 'Phone', sortable: false },
  { key: 'role', label: 'Role', sortable: true, render: (row) => (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${row.role === 'Admin' ? 'bg-gray-900 text-white border-gray-700' : row.role === 'Manager' ? 'bg-blue-900 text-blue-200 border-blue-700' : 'bg-gray-700 text-white border-gray-600'}`}>{row.role}</span>
  ) },
  { key: 'status', label: 'Status', sortable: true, render: (row) => (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.status === 'Active' ? 'bg-blue-100 text-blue-600' : row.status === 'Suspended' ? 'bg-red-200 text-red-600' : 'bg-red-100 text-red-500'}`}>{row.status}</span>
  ) },
  { key: 'businessType', label: 'Business Type', sortable: true, render: (row) => (
    <span className="font-bold">{row.businessType}</span>
  ) },
  { key: 'businessName', label: 'Business Name', sortable: true },
  { key: 'joiningDate', label: 'Joining Date', sortable: true },
  { key: 'plan', label: 'Plan', sortable: true, render: (row) => {
    let color = 'bg-pink-100 text-pink-600';
    if (row.plan === 'Standard') color = 'bg-blue-100 text-blue-600';
    if (row.plan === 'Basic') color = 'bg-gray-200 text-gray-700';
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>{row.plan}</span>;
  } },
  { key: 'expireDate', label: 'Expire Date', sortable: true },
];

function FilterBar({
  search, setSearch,
  filterPlan, setFilterPlan, planOptions,
  filterRole, setFilterRole, roleOptions,
  filterStatus, setFilterStatus, statusOptions,
  dateLabel, onDateClick
}) {
  return (
    <div className="flex gap-4 items-center p-4 bg-transparent">
      {/* Search */}
      <div className="flex items-center rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-gray-300 focus-within:border-blue-500 transition">
        <FiSearch className="mr-2 text-lg" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sm text-gray-200 placeholder-gray-400"
        />
      </div>
      {/* Plan */}
      <select
        value={filterPlan}
        onChange={e => setFilterRole(e.target.value)}
        className="flex items-center rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-gray-300 hover:border-blue-500 transition pr-8"
      >
        <option value="">Plan</option>
        {planOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {/* Role */}
      <select
        value={filterRole}
        onChange={e => setFilterRole(e.target.value)}
        className="flex items-center rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-gray-300 hover:border-blue-500 transition pr-8"
      >
        <option value="">Role</option>
        {roleOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {/* Status */}
      <select
        value={filterStatus}
        onChange={e => setFilterStatus(e.target.value)}
        className="flex items-center rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-gray-300 hover:border-blue-500 transition pr-8"
      >
        <option value="">Status</option>
        {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {/* Date */}
      <button
        className="flex items-center rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-gray-300 hover:border-blue-500 transition"
        onClick={onDateClick}
        type="button"
      >
        <FiCalendar className="mr-2 text-lg" />
        {dateLabel || 'Date'}
        <span className="ml-2">&#9662;</span>
      </button>
    </div>
  );
}

function AdminCustomerTable() {
  const [data] = useState(adminData);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterPlan, setFilterPlan] = useState('');
  const [sort, setSort] = useState({ key: '', direction: 'asc' });
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // Date range state for custom picker
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [showPicker, setShowPicker] = useState(false);

  // Filtered & searched data
  const filteredData = useMemo(() => {
    let d = [...data];
    if (search) {
      d = d.filter(row =>
        row.name?.toLowerCase().includes(search.toLowerCase()) ||
        row.email?.toLowerCase().includes(search.toLowerCase()) ||
        row.phone?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filterStatus) d = d.filter(row => row.status === filterStatus);
    if (filterRole) d = d.filter(row => row.role === filterRole);
    if (filterPlan) d = d.filter(row => row.plan === filterPlan);
    // Date range filter
    if (dateRange.startDate) d = d.filter(row => row.joiningDate >= format(dateRange.startDate, 'yyyy-MM-dd'));
    if (dateRange.endDate) d = d.filter(row => row.joiningDate <= format(dateRange.endDate, 'yyyy-MM-dd'));
    if (sort.key) {
      d = d.sort((a, b) => {
        if (a[sort.key] < b[sort.key]) return sort.direction === 'asc' ? -1 : 1;
        if (a[sort.key] > b[sort.key]) return sort.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return d;
  }, [data, search, filterStatus, filterRole, filterPlan, dateRange, sort]);

  // Pagination
  const pagedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  // Checkbox logic
  const isSelected = (row) => selected.some(s => s.email === row.email);
  const onSelect = (row) => {
    setSelected(sel =>
      isSelected(row) ? sel.filter(s => s.email !== row.email) : [...sel, row]
    );
  };
  const onSelectAll = () => {
    if (pagedData.every(isSelected)) {
      setSelected(sel => sel.filter(row => !pagedData.some(p => p.email === row.email)));
    } else {
      setSelected(sel => [...sel, ...pagedData.filter(row => !isSelected(row))]);
    }
  };

  // Sorting
  const handleSort = (key, direction) => setSort({ key, direction });

  // Pagination change
  const handlePageChange = (p) => setPage(p);
  const handlePageSizeChange = (size) => { setPageSize(size); setPage(1); };

  // Filter options
  const statusOptions = getUnique(data, 'status');
  const roleOptions = getUnique(data, 'role');
  const planOptions = getUnique(data, 'plan');

  // Checkbox column update for select all
  const columnsWithCheckbox = [
    {
      ...columns[0],
      label: (
        <input
          type="checkbox"
          aria-label="Select all"
          checked={pagedData.length > 0 && pagedData.every(isSelected)}
          onChange={onSelectAll}
        />
      ),
      render: (row) => (
        <input
          type="checkbox"
          checked={isSelected(row)}
          onChange={() => onSelect(row)}
          aria-label={`Select row ${row.name}`}
        />
      ),
    },
    ...columns.slice(1)
  ];

  // Date range display
  const dateLabel = (dateRange.startDate && dateRange.endDate)
    ? `${format(dateRange.startDate, 'dd MMM yy')} - ${format(dateRange.endDate, 'dd MMM yy')}`
    : 'Joining Date';

  return (
    <div className="p-4 md:p-6 dark:bg-customBrown bg-white border border-gray-200 dark:border-customBorderColor rounded-2xl text-white">
      {/* Date Picker Popup */}
      {showPicker && (
        <div className="absolute z-50 mt-2">
          <CommonDateRange
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            onChange={range => {
              setDateRange({ startDate: range.startDate, endDate: range.endDate });
              setShowPicker(false);
              setPage(1);
            }}
          />
        </div>
      )}
      {/* Table */}
      <CommonAdminTable
        columns={columnsWithCheckbox}
        data={pagedData}
        total={filteredData.length}
        searchValue={search}
        onSearchChange={val => { setSearch(val); setPage(1); }}
        planValue={filterPlan}
        planOptions={planOptions}
        onPlanChange={val => { setFilterPlan(val); setPage(1); }}
        roleValue={filterRole}
        roleOptions={roleOptions}
        onRoleChange={val => { setFilterRole(val); setPage(1); }}
        filterValue={filterStatus}
        filterOptions={statusOptions}
        onFilterChange={val => { setFilterStatus(val); setPage(1); }}
        dateRange={dateRange}
        onDateRangeChange={range => {
          setDateRange({ startDate: range.startDate, endDate: range.endDate });
          setPage(1);
        }}
        className=""
        currentPage={page}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        onSort={handleSort}
        renderActions={() => (
          <button className="px-2 py-1 rounded hover:bg-gray-700 transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/></svg>
          </button>
        )}
      />
      {/* Bottom Bar */}
      {/* Pagination handled by CommonAdminTable */}
    </div>
  );
}

export default AdminCustomerTable;
