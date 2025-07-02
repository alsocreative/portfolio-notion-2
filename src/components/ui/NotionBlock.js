'use client';

import { useState } from 'react';

const NotionBlock = ({ 
  children, 
  type = 'text', 
  level = 1, 
  className = '',
  icon,
  collapsible = false,
  defaultExpanded = true 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getBlockStyles = () => {
    const baseStyles = "notion-block group relative";
    
    switch (type) {
      case 'heading1':
        return `${baseStyles} notion-h1`;
      case 'heading2':
        return `${baseStyles} notion-h2`;
      case 'heading3':
        return `${baseStyles} notion-h3`;
      case 'text':
        return `${baseStyles} notion-text`;
      case 'callout':
        return `${baseStyles} bg-[var(--notion-blue-0)] border-l-4 border-[var(--notion-blue-6)] p-4 rounded-r-md`;
      case 'quote':
        return `${baseStyles} border-l-4 border-[var(--notion-gray-3)] pl-4 italic text-[var(--muted-foreground)]`;
      case 'code':
        return `${baseStyles} notion-code-block`;
      case 'divider':
        return `${baseStyles} border-t border-[var(--border)] my-6`;
      case 'toggle':
        return `${baseStyles} cursor-pointer`;
      default:
        return baseStyles;
    }
  };

  const renderContent = () => {
    if (type === 'toggle') {
      return (
        <div>
          <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 p-2 hover:bg-[var(--accent)] rounded-md transition-colors"
          >
            <span className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
              ▶
            </span>
            {icon && <span className="text-lg">{icon}</span>}
            <span className="font-medium">{children}</span>
          </div>
          {isExpanded && (
            <div className="ml-6 mt-2 space-y-2">
              {/* Content goes here */}
            </div>
          )}
        </div>
      );
    }

    if (type === 'callout') {
      return (
        <div className="flex items-start gap-3">
          {icon && <span className="text-lg mt-0.5">{icon}</span>}
          <div className="flex-1">{children}</div>
        </div>
      );
    }

    return children;
  };

  if (type === 'divider') {
    return <div className={getBlockStyles()} />;
  }

  return (
    <div className={`${getBlockStyles()} ${className}`}>
      {renderContent()}
      
      {/* Hover controls */}
      <div className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-6 h-6 flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--accent)] rounded-sm">
          ⋮⋮
        </button>
      </div>
    </div>
  );
};

export default NotionBlock;
