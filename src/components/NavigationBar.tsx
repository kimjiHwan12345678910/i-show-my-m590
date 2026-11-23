import React from 'react';
import { TabType } from '../types';

interface NavigationBarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, onSelectTab }) => {
  const navItems: { id: TabType; label: string; buttonId: string }[] = [
    { id: 'main', label: '메인 페이지 & 제품', buttonId: 'Button_1' },
    { id: 'features', label: '기능 소개', buttonId: 'Button_2' },
    { id: 'brand', label: '브랜드 소개', buttonId: 'Button_3' },
  ];

  return (
    // TODO: Replace with GitHub repository link/path
    <nav className="w-full bg-[#FFFFFF] dark:bg-[#111315] border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center md:justify-start gap-2 md:gap-8 h-14">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={item.buttonId}
                onClick={() => onSelectTab(item.id)}
                className={`relative px-4 py-3.5 text-sm md:text-base font-semibold transition-all outline-none border-none cursor-pointer group ${
                  isActive
                    ? 'text-black dark:text-white font-bold'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
                style={{ border: 'none' }}
              >
                <span>{item.label}</span>
                {/* Underline on hover or when active, styled with #D6F5F0 */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#D6F5F0] transition-all duration-200 rounded-t-sm ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
