'use client';

import { useState } from 'react';
import Image from 'next/image';

const NotionPage = ({ 
  title, 
  subtitle, 
  cover, 
  icon, 
  children,
  showCover = true,
  showTitle = true 
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [pageTitle, setPageTitle] = useState(title);

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Cover Image */}
      {showCover && cover && (
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image 
            src={cover} 
            alt="Cover"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          
          {/* Cover controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="px-3 py-1.5 bg-black bg-opacity-50 text-white text-sm rounded-md hover:bg-opacity-70 transition-all">
              Change cover
            </button>
            <button className="px-3 py-1.5 bg-black bg-opacity-50 text-white text-sm rounded-md hover:bg-opacity-70 transition-all">
              Reposition
            </button>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        {/* Icon and Title */}
        {showTitle && (
          <div className="mb-8">
            {icon && (
              <div className="mb-4">
                <span className="text-6xl">{icon}</span>
              </div>
            )}
            
            {isEditingTitle ? (
              <input
                type="text"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                onBlur={handleTitleBlur}
                onKeyDown={handleTitleKeyDown}
                className="w-full text-4xl md:text-5xl font-bold bg-transparent border-none outline-none text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                placeholder="Untitled"
                autoFocus
              />
            ) : (
              <h1 
                onClick={handleTitleClick}
                className="text-4xl md:text-5xl font-bold text-[var(--foreground)] cursor-text hover:bg-[var(--accent)] p-2 -m-2 rounded-md transition-colors"
              >
                {pageTitle || 'Untitled'}
              </h1>
            )}
            
            {subtitle && (
              <p className="text-lg text-[var(--muted-foreground)] mt-2">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Page Content */}
        <div className="space-y-4 pb-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NotionPage;
