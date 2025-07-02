'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Plus, MoreHorizontal } from 'lucide-react';

const NotionDatabase = ({ 
  title, 
  data, 
  columns, 
  viewType = 'table',
  showHeader = true,
  allowAdd = false 
}) => {
  const [view, setView] = useState(viewType);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({});

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnKey);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    
    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const renderTableView = () => (
    <div className="notion-card overflow-hidden">
      {showHeader && (
        <div className="p-4 border-b border-[var(--border)]">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm text-[var(--muted-foreground)] hover:bg-[var(--accent)] rounded-md transition-colors">
                Filter
              </button>
              <button className="px-3 py-1.5 text-sm text-[var(--muted-foreground)] hover:bg-[var(--accent)] rounded-md transition-colors">
                Sort
              </button>
              <button className="p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--accent)] rounded-md transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[var(--background-secondary)]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className="px-4 py-3 text-left text-sm font-medium text-[var(--muted-foreground)] cursor-pointer hover:bg-[var(--accent)] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span>{column.title}</span>
                    {sortBy === column.key && (
                      <span className="text-xs">
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr 
                key={index}
                className="border-t border-[var(--border)] hover:bg-[var(--accent)] transition-colors"
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-sm">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {allowAdd && (
        <div className="p-3 border-t border-[var(--border)]">
          <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add new</span>
          </button>
        </div>
      )}
    </div>
  );

  const renderGalleryView = () => (
    <div className="notion-card">
      {showHeader && (
        <div className="p-4 border-b border-[var(--border)]">
          <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
        </div>
      )}
      
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedData.map((item, index) => (
            <div 
              key={index}
              className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--notion-gray-3)] transition-colors cursor-pointer"
            >
              {columns.map((column) => (
                <div key={column.key} className="mb-2 last:mb-0">
                  {column.render ? column.render(item[column.key], item) : (
                    <div>
                      <span className="text-xs text-[var(--muted-foreground)]">{column.title}</span>
                      <div className="text-sm">{item[column.key]}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderListView = () => (
    <div className="notion-card">
      {showHeader && (
        <div className="p-4 border-b border-[var(--border)]">
          <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
        </div>
      )}
      
      <div className="divide-y divide-[var(--border)]">
        {sortedData.map((item, index) => (
          <div 
            key={index}
            className="p-4 hover:bg-[var(--accent)] transition-colors cursor-pointer"
          >
            <div className="space-y-1">
              {columns.map((column) => (
                <div key={column.key} className="flex items-center gap-2">
                  <span className="text-xs text-[var(--muted-foreground)] min-w-[80px]">
                    {column.title}:
                  </span>
                  <span className="text-sm">
                    {column.render ? column.render(item[column.key], item) : item[column.key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  switch (view) {
    case 'gallery':
      return renderGalleryView();
    case 'list':
      return renderListView();
    default:
      return renderTableView();
  }
};

export default NotionDatabase;
