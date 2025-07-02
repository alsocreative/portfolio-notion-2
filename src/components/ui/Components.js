'use client';

import Image from 'next/image';

const ProgressBar = ({ 
  value, 
  max = 100, 
  color = 'blue',
  size = 'medium',
  showValue = true,
  label,
  className = '' 
}) => {
  const percentage = Math.min((value / max) * 100, 100);
  
  const getColorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-[var(--notion-blue-6)]';
      case 'green':
        return 'bg-[var(--notion-green-6)]';
      case 'red':
        return 'bg-[var(--notion-red-6)]';
      case 'yellow':
        return 'bg-[var(--notion-yellow-6)]';
      default:
        return 'bg-[var(--notion-blue-6)]';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'h-1';
      case 'medium':
        return 'h-2';
      case 'large':
        return 'h-3';
      default:
        return 'h-2';
    }
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-[var(--foreground)]">{label}</span>
          {showValue && (
            <span className="text-sm text-[var(--muted-foreground)]">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div className={`w-full bg-[var(--accent)] rounded-full overflow-hidden ${getSizeClass()}`}>
        <div 
          className={`${getSizeClass()} ${getColorClass()} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const Tag = ({ 
  children, 
  color = 'gray',
  size = 'medium',
  variant = 'filled',
  onClick,
  className = '' 
}) => {
  const getColorClasses = () => {
    const baseClasses = 'inline-flex items-center rounded-md font-medium transition-colors';
    
    switch (variant) {
      case 'filled':
        switch (color) {
          case 'blue':
            return `${baseClasses} bg-[var(--notion-blue-1)] text-[var(--notion-blue-9)]`;
          case 'green':
            return `${baseClasses} bg-[var(--notion-green-1)] text-[var(--notion-green-9)]`;
          case 'red':
            return `${baseClasses} bg-[var(--notion-red-1)] text-[var(--notion-red-9)]`;
          case 'yellow':
            return `${baseClasses} bg-[var(--notion-yellow-1)] text-[var(--notion-yellow-9)]`;
          default:
            return `${baseClasses} bg-[var(--accent)] text-[var(--foreground)]`;
        }
      case 'outline':
        switch (color) {
          case 'blue':
            return `${baseClasses} border border-[var(--notion-blue-6)] text-[var(--notion-blue-6)]`;
          case 'green':
            return `${baseClasses} border border-[var(--notion-green-6)] text-[var(--notion-green-6)]`;
          case 'red':
            return `${baseClasses} border border-[var(--notion-red-6)] text-[var(--notion-red-6)]`;
          case 'yellow':
            return `${baseClasses} border border-[var(--notion-yellow-6)] text-[var(--notion-yellow-6)]`;
          default:
            return `${baseClasses} border border-[var(--border)] text-[var(--foreground)]`;
        }
      default:
        return `${baseClasses} bg-[var(--accent)] text-[var(--foreground)]`;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-0.5 text-xs';
      case 'medium':
        return 'px-2.5 py-1 text-sm';
      case 'large':
        return 'px-3 py-1.5 text-base';
      default:
        return 'px-2.5 py-1 text-sm';
    }
  };

  const classes = `${getColorClasses()} ${getSizeClasses()} ${onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`;

  return (
    <span onClick={onClick} className={classes}>
      {children}
    </span>
  );
};

const Badge = ({ 
  children, 
  color = 'blue',
  size = 'medium',
  className = '' 
}) => {
  return (
    <Tag 
      color={color} 
      size={size} 
      variant="filled" 
      className={`font-semibold ${className}`}
    >
      {children}
    </Tag>
  );
};

const Divider = ({ 
  orientation = 'horizontal',
  className = '' 
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={`w-px bg-[var(--border)] ${className}`} />
    );
  }

  return (
    <div className={`h-px bg-[var(--border)] my-6 ${className}`} />
  );
};

const Avatar = ({ 
  src, 
  alt, 
  size = 'medium',
  fallback,
  className = '' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-8 h-8 text-sm';
      case 'medium':
        return 'w-10 h-10 text-base';
      case 'large':
        return 'w-12 h-12 text-lg';
      case 'xl':
        return 'w-16 h-16 text-xl';
      default:
        return 'w-10 h-10 text-base';
    }
  };

  const classes = `${getSizeClasses()} rounded-full bg-[var(--accent)] flex items-center justify-center font-medium text-[var(--foreground)] ${className}`;

  if (src) {
    return (
      <div className={`${classes} relative overflow-hidden`}>
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={classes}>
      {fallback || (alt ? alt.charAt(0).toUpperCase() : '?')}
    </div>
  );
};

export { ProgressBar, Tag, Badge, Divider, Avatar };
