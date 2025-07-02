'use client';

import { useState } from 'react';
import { Menu, Search, MoreHorizontal, Share, Star } from 'lucide-react';

const Header = ({ onMenuToggle, title = "Portfolio" }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="h-12 bg-[var(--background)] border-b border-[var(--border)] flex items-center justify-between px-4 sticky top-0 z-30">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1.5 hover:bg-[var(--accent)] rounded-md transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="hidden lg:flex items-center gap-2">
          <h1 className="text-[var(--foreground)] font-medium">{title}</h1>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-md mx-4">
        <div className={`
          relative flex items-center
          ${isSearchFocused ? 'ring-2 ring-[var(--notion-blue-6)] ring-opacity-20' : ''}
        `}>
          <Search className="absolute left-3 w-4 h-4 text-[var(--muted-foreground)]" />
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full pl-10 pr-4 py-1.5 bg-[var(--background-secondary)] border border-[var(--border)] rounded-md text-sm placeholder-[var(--muted-foreground)] focus:outline-none focus:border-[var(--notion-blue-6)] transition-colors"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <button className="p-1.5 hover:bg-[var(--accent)] rounded-md transition-colors">
          <Star className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        
        <button className="p-1.5 hover:bg-[var(--accent)] rounded-md transition-colors">
          <Share className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
        
        <button className="p-1.5 hover:bg-[var(--accent)] rounded-md transition-colors">
          <MoreHorizontal className="w-4 h-4 text-[var(--muted-foreground)]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
