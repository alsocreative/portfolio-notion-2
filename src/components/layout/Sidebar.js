'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  Briefcase, 
  FolderOpen, 
  BookOpen, 
  Mail,
  ChevronDown,
  ChevronRight,
  Settings,
  Sun,
  Moon,
  ExternalLink
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    workspace: true,
    pages: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)]
        transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-[var(--sidebar-border)]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">JD</span>
              </div>
              <span className="font-semibold text-[var(--foreground)]">John Doe</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-2">
            {/* Workspace Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection('workspace')}
                className="flex items-center gap-2 w-full p-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors"
              >
                {expandedSections.workspace ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                <span>Workspace</span>
              </button>
              
              {expandedSections.workspace && (
                <div className="ml-4 mt-1 space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className={`
                          flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors
                          ${isActive 
                            ? 'bg-[var(--notion-blue-1)] text-[var(--notion-blue-9)] font-medium' 
                            : 'text-[var(--foreground)] hover:bg-[var(--sidebar-hover)]'
                          }
                        `}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Pages Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection('pages')}
                className="flex items-center gap-2 w-full p-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors"
              >
                {expandedSections.pages ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                <span>Quick Links</span>
              </button>
              
              {expandedSections.pages && (
                <div className="ml-4 mt-1 space-y-1">
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Resume</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[var(--sidebar-border)]">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--muted-foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
              
              <button className="p-2 text-[var(--muted-foreground)] hover:bg-[var(--sidebar-hover)] rounded-md transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
